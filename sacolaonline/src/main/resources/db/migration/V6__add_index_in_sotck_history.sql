-- Migration V6__add_index_in_sotck_history.sql

-- Cria índice na coluna product_id
CREATE INDEX idx_stock_history_product_id ON stock_history (product_id);

-- Cria índice composto nas colunas sale_date e product_id
CREATE INDEX idx_stock_history_sale_date_product_id ON stock_history (sale_date, product_id);