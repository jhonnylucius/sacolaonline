-- Criação da tabela "product"
CREATE TABLE product (
                         id SERIAL PRIMARY KEY,                      -- Chave primária para identificação única do produto
                         name VARCHAR(255) NOT NULL,                 -- Nome do produto
                         description TEXT,                           -- Descrição do produto
                         price DECIMAL(10,2) NOT NULL,               -- Preço do produto
                         imageUrl TEXT                               -- URL da imagem do produto
);

-- Índice para melhorar a pesquisa por nome de produto
CREATE INDEX idx_product_name ON product(name);

-- Índice para otimizar consultas por preço
CREATE INDEX idx_product_price ON product(price);

-- Índice para otimizar buscas por imageUrl (URLs de imagens)
CREATE INDEX idx_product_imageUrl ON product(imageUrl);

-- Criação da tabela "users"
CREATE TABLE users (
                       id SERIAL PRIMARY KEY,                      -- Chave primária para identificação única do usuário
                       username VARCHAR(255) NOT NULL,             -- Nome de usuário
                       email VARCHAR(255) NOT NULL UNIQUE          -- E-mail do usuário, garantindo que seja único
);

-- Índice para otimizar buscas por nome de usuário
CREATE INDEX idx_user_username ON users(username);

-- Índice para melhorar pesquisas por e-mail
CREATE INDEX idx_user_email ON users(email);

-- Criação da tabela "orders"
CREATE TABLE orders (
                        id SERIAL PRIMARY KEY,                      -- ID auto-incrementado para o pedido
                        user_id BIGINT NOT NULL,                    -- Chave estrangeira para a tabela "users"
                        product_id BIGINT NOT NULL,                 -- Chave estrangeira para a tabela "product"
                        status VARCHAR(255),                        -- Status do pedido (ex: pendente, completo)
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data de criação do pedido
                        CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id),     -- Relacionamento com "users"
                        CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES product(id) -- Relacionamento com "product"
);

-- Índice para otimizar consultas de pedidos por status
CREATE INDEX idx_order_status ON orders(status);

-- Índice para melhorar a performance nas consultas de pedidos pelo usuário
CREATE INDEX idx_order_user_id ON orders(user_id);

-- Índice para otimizar buscas por produto nos pedidos
CREATE INDEX idx_order_product_id ON orders(product_id);

-- Índice para consultas por data de criação
CREATE INDEX idx_order_created_at ON orders(created_at);
