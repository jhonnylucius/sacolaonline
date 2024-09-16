-- Migration V5__Create_stock_history_table.sql
CREATE TABLE IF NOT EXISTS stock_history (
    id SERIAL PRIMARY KEY,
    product_id BIGINT NOT NULL,  -- Relaciona com o produto
    initial_quantity INT NOT NULL,  -- Quantidade inicial no estoque antes da venda
    final_quantity INT NOT NULL,  -- Quantidade final após a venda
    cost_price DECIMAL(10, 2) NOT NULL,  -- Preço de custo do produto
    sale_price DECIMAL(10, 2) NOT NULL,  -- Preço de venda
    sale_date TIMESTAMP NOT NULL DEFAULT NOW(),  -- Data da venda
    profit_margin DECIMAL(5, 2) NOT NULL,  -- Margem de lucro (%)
    
    -- Chave estrangeira para a tabela de produtos
    CONSTRAINT fk_product
      FOREIGN KEY (product_id) 
      REFERENCES product(id)
      ON DELETE CASCADE
);
