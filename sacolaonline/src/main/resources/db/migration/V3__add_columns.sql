-- Alterar a tabela users para adicionar colunas faltantes
ALTER TABLE users
ADD COLUMN provider_id VARCHAR(255),
ADD COLUMN provider VARCHAR(50),
ADD COLUMN login_type VARCHAR(50),
ADD COLUMN estrelas_acumuladas INT DEFAULT 0,
ADD COLUMN created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW();

-- Alterar a tabela orders para adicionar colunas faltantes
ALTER TABLE orders
ADD COLUMN estrelas_ganhas INT DEFAULT 0,
ADD COLUMN total DECIMAL(12, 2),
ADD COLUMN qr_code_url TEXT;
