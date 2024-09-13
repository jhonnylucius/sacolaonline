-- Migration V4: Criação de índices nas tabelas

-- Índice para otimizar buscas por provider_id
CREATE INDEX idx_users_provider_id ON users(provider_id);

-- Índice para otimizar buscas por order_id em itens de pedido
CREATE INDEX idx_order_items_order_id ON order_items(order_id);

-- Índice para otimizar buscas por product_id em itens de pedido
CREATE INDEX idx_order_items_product_id ON order_items(product_id);

-- Índice para otimizar buscas por order_id na tabela de métodos de pagamento
CREATE INDEX idx_payment_methods_order_id ON payment_methods(order_id);

-- Índice para otimizar buscas por user_id na tabela de recompensas
CREATE INDEX idx_rewards_user_id ON rewards(user_id);