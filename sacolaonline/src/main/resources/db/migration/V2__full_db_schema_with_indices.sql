-- V2__full_db_schema_with_indices.sql

-- Tabela 'users' com suporte para login via Google
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,       -- Índice único para e-mails
    provider VARCHAR(50),                     -- Ex: google, facebook
    provider_id VARCHAR(255),                 -- ID do usuário no provedor de autenticação
    login_type VARCHAR(50),                   -- Tipo de login (ex: google, email)
    endereco VARCHAR(255),
    telefone VARCHAR(20),
    whatsapp VARCHAR(20),
    estrelas_acumuladas INT DEFAULT 0,         -- Sistema de pontuação para brindes
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

-- Tabela 'product' (produtos do sacolão)
CREATE TABLE IF NOT EXISTS product (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    unit_of_measure VARCHAR(50),         -- Unidade de medida (kg, unidade, etc.)
    quantity_in_stock DECIMAL(10, 2),    -- Quantidade disponível em estoque
    url_imagem TEXT,                     -- URL da imagem do produto (S3)
    categoria VARCHAR(50),               -- Categoria do produto (frutas, laticínios, etc.)
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);


-- Tabela 'orders' (pedidos feitos pelos usuários)
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    status VARCHAR(50) NOT NULL,          -- Status do pedido (pendente, enviado, concluído)
    total DECIMAL(10, 2) NOT NULL,        -- Valor total do pedido
    estrelas_ganhas INT DEFAULT 0,        -- Estrelas ganhas neste pedido
    qr_code_url TEXT,                     -- URL do QR code para pagamento
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);


-- Tabela 'order_items' (itens do pedido)
CREATE TABLE IF NOT EXISTS order_items (
    id SERIAL PRIMARY KEY,
    order_id BIGINT REFERENCES orders(id),
    product_id BIGINT REFERENCES product(id),
    quantity DECIMAL(10, 2) NOT NULL,    -- Quantidade de produtos no pedido
    price DECIMAL(10, 2) NOT NULL        -- Preço por unidade do produto no momento da compra
);



-- Tabela para registrar brindes recebidos
CREATE TABLE IF NOT EXISTS rewards (
    id SERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    reward_description VARCHAR(255) NOT NULL,  -- Descrição do brinde recebido
    received_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

-- Tabela para registrar métodos de pagamento, incluindo QR code
CREATE TABLE IF NOT EXISTS payment_methods (
    id SERIAL PRIMARY KEY,
    order_id BIGINT REFERENCES orders(id),
    payment_type VARCHAR(50) NOT NULL,         -- Tipo de pagamento (QR code, cartão, etc.)
    payment_status VARCHAR(50),                -- Status do pagamento (ex: pendente, pago)
    payment_reference VARCHAR(255),            -- Referência de transação (ex: ID da transação QR)
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

