-- Migration V7__Create_trigger_insert_into_stock_history.sql
CREATE OR REPLACE FUNCTION record_sale_in_stock_history() 
RETURNS TRIGGER AS $$
BEGIN
    -- Insere um novo registro no histórico de estoque ao ocorrer uma venda
    INSERT INTO stock_history (
        product_id,
        initial_quantity,
        final_quantity,
        cost_price,
        sale_price,
        sale_date,
        profit_margin
    )
    VALUES (
        NEW.product_id,    -- ID do produto vendido
        (SELECT quantity_in_stock FROM product WHERE id = NEW.product_id),  -- Quantidade inicial
        (SELECT quantity_in_stock - NEW.quantity FROM product WHERE id = NEW.product_id), -- Quantidade final
        NEW.cost_price,    -- Preço de custo
        NEW.sale_price,    -- Preço de venda
        NOW(),             -- Data da venda
        ((NEW.sale_price - NEW.cost_price) / NEW.cost_price) * 100 -- Margem de lucro em %
    );

    -- Atualiza a quantidade de produtos em estoque
    UPDATE products
    SET quantity_in_stock = quantity_in_stock - NEW.quantity
    WHERE id = NEW.product_id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Criando o gatilho que chama a função sempre que uma nova venda é inserida
CREATE TRIGGER after_sale_insert
AFTER INSERT ON orders
FOR EACH ROW
EXECUTE FUNCTION record_sale_in_stock_history();
