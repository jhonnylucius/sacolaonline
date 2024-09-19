# Trabalho de Extensão da Faculdade - Curso de ADS - Análise e Desenvolvimento de Sistemas </br>
</br>
Abordando as Matérias de Computação em Nuvem e Banco de Dados.</br>
</br>
Usaremos o PostgreSql em Nuvem, além de hospedar o site em um dos serviços da AWS, usaremos o trabalho para atender um pequeno mercado de verduras e frutas da Cidade de Coromandel/MG.</br>
</br>
Trabalho será todo voluntário e usando serviços gratuitos. Terá além do site, um app mobile e toda parte de marketing digital da empresa rescem formada.</br>
</br>

# Sacolão Online - README

## Projeto de Extensão da Faculdade - Curso de ADS

🌐 O Conhecimento só tem um destino, ser compartilhado! 🌐

Este repositório contém o código para o sistema de gerenciamento de pedidos, usuários e produtos para um mercado de verduras e frutas.

---

### Tecnologias Utilizadas:

- **Java**: Java é a linguagem de programação principal usada no desenvolvimento do backend do projeto. [Documentação](https://docs.oracle.com/en/java/)
- **Node.js**: Plataforma JavaScript para o backend. [Documentação](https://nodejs.org/en/docs/)
- **React**: Biblioteca para construir interfaces de usuário no frontend. [Documentação](https://reactjs.org/docs/getting-started.html)
- **Spring Boot**: Framework Java para backend. [Documentação](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
- **Yarn**: Gerenciador de pacotes JavaScript. [Guia do Yarn](https://classic.yarnpkg.com/en/docs/)
- **OpenSSL**: Biblioteca de criptografia utilizada no Node.js. [Novo link OpenSSL FAQ](https://www.openssl.org/docs/faq.html)
- **PostgreSQL**: Banco de dados relacional na nuvem. [Documentação](https://www.postgresql.org/docs/)

---

### Pré-requisitos


- **Node.js** (versão 22 ou superior)
- **Yarn**
- **Java JDK 17+**
- **Spring Boot**
- **OpenSSL**

---

### Setup do Projeto

#### Tecnologias e Ferramentas

Aqui estão as principais tecnologias e ferramentas usadas no projeto:

- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="40px"/> **Java**: Java é a linguagem de programação principal usada no desenvolvimento do backend do projeto.
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="40"/> **Node.js**: Plataforma JavaScript para o backend.
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40"/> **React**: Biblioteca para construir interfaces de usuário no frontend.
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" width="40"/> **Spring Boot**: Framework Java para o backend.
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" alt="Yarn" width="40"/> **Yarn**: Gerenciador de pacotes JavaScript.
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openssl/openssl-original.svg" alt="OpenSSL" width="40"/> **OpenSSL**: Biblioteca para criptografia utilizada no Node.js.

#### Soluções de Erro

Caso você encontre o erro `ERR_OSSL_EVP_UNSUPPORTED` relacionado ao OpenSSL, execute o seguinte comando para usar a flag de `openssl-legacy-provider`:

---
export NODE_OPTIONS=--openssl-legacy-provider
---
Para usuários Windows:
---
set NODE_OPTIONS=--openssl-legacy-provider
---

#### Atualizando dependências e ferramentas
Caso precise atualizar as dependências e garantir que tudo está na versão mais recente, utilize os comandos abaixo:

- Atualizar pacotes do frontend:
---
./mvnw clean install
---
- Atualizar pacotes no backend (Java):
---
./mvnw clean install
---
#### onfiguração do Projeto

1. Configuração do Frontend (React)
---
yarn install
yarn start
---
#### O frontend será iniciado em http://localhost:3000.

2. Configuração do Backend (Spring Boot)

---
./mvnw spring-boot:run
---
O backend será iniciado em http://localhost:8080.
---
## Migrações do Banco de Dados

Estrutura inicial (V1)

A V1 contém a criação das tabelas:

- product: Produtos do sistema.</br>

- users: Usuários com suporte a login via Google.</br>

- orders: Pedidos realizados.</br>

- order_items: Itens pertencentes aos pedidos.</br>

- rewards: Sistema de fidelidade.</br>

- payment_methods: Métodos de pagamento, incluindo QR code.</br>

- stock_history: Histórico de vendas e estoque.</br>

Índices (V2)</br>

A V2 contém a criação de índices para otimizar as consultas:</br>

- Índices para a tabela "product"</br>

CREATE INDEX IF NOT EXISTS idx_product_name ON product(name);</br>
CREATE INDEX IF NOT EXISTS idx_product_price ON product(price);</br>
CREATE INDEX IF NOT EXISTS idx_product_category ON product(category);</br>
CREATE INDEX IF NOT EXISTS idx_product_validity_date ON product(validity_date);</br>
</br>

- Índices para a tabela "users"</br>

CREATE INDEX IF NOT EXISTS idx_user_username ON users(username);</br>
CREATE INDEX IF NOT EXISTS idx_user_email ON users(email);</br>
CREATE INDEX IF NOT EXISTS idx_users_provider_id ON users(provider_id);</br>
</br>

- Índices para a tabela "orders"</br>

CREATE INDEX IF NOT EXISTS idx_order_status ON orders(status);</br>
CREATE INDEX IF NOT EXISTS idx_order_user_id ON orders(user_id);</br>
CREATE INDEX IF NOT EXISTS idx_order_created_at ON orders(created_at);</br>
CREATE INDEX IF NOT EXISTS idx_order_user_id_status ON orders(user_id, status);  -- Índice composto</br>

- Índices para a tabela "order_items"</br>

CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);</br>
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id);</br>

- Índices para a tabela "payment_methods"</br>

CREATE INDEX IF NOT EXISTS idx_payment_methods_order_id ON payment_methods(order_id);</br>

- Índices para a tabela "rewards"</br>

CREATE INDEX IF NOT EXISTS idx_rewards_user_id ON rewards(user_id);</br>

- Índices para a tabela "stock_history"</br>

CREATE INDEX IF NOT EXISTS idx_stock_history_product_id ON stock_history(product_id);</br>
CREATE INDEX IF NOT EXISTS idx_stock_history_sale_date_product_id ON stock_history(sale_date, product_id);</br>

- API Endpoints</br>

- Endpoints principais:<\br>
- /api/users: Gerenciamento de usuários (criação, consulta).</br>
- /api/product: Gerenciamento de produtos (criação, consulta, atualização, remoção).</br>
- /api/orders: Gerenciamento de pedidos e itens do pedido.</br>

### Contribuição

- Sinta-se à vontade para contribuir! Abra issues, envie pull requests, e vamos melhorar o projeto juntos.

### Licença
- Este projeto está licenciado sob a licença MIT.
