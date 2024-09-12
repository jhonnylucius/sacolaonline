🛒 **Sacolão Online**

Bem-vindo ao projeto Sacolão Online! Este repositório contém o código para um sistema de gerenciamento de pedidos, usuários e produtos. Abaixo, você encontrará todas as informações necessárias para rodar o frontend e backend do projeto.

🚀 **Tecnologias Utilizadas**

<img src="https://upload.wikimedia.org/wikipedia/commons/3/39/OpenSSL_logo.svg" alt="OpenSSL" width="80"/>
* **Node.js:** Plataforma JavaScript para o backend.
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React_logo.svg/1200px-React_logo.svg.png" alt="React" width="80"/>
* **React:** Biblioteca para construir interfaces de usuário no frontend.
<img src="https://www.spring.io/images/projects/spring-boot.svg" alt="Spring Boot" width="80"/>
* **Spring Boot:** Framework Java para o backend.
<img src="https://yarnpkg.com/static/logo.svg" alt="Yarn" width="80"/>
* **Yarn:** Gerenciador de pacotes JavaScript.
<img src="https://upload.wikimedia.org/wikipedia/commons/3/39/OpenSSL_logo.svg" alt="OpenSSL" width="80"/>
* **OpenSSL:** Biblioteca para criptografia utilizada no Node.js.

📋 **Pré-requisitos**

Antes de começar, certifique-se de ter o seguinte instalado:

* Node.js (recomendado: versão 16)
* Yarn
* Java JDK 11+
* Spring Boot
* OpenSSL

🛠️ **Setup do Projeto**

1. **Verificar versões instaladas:**

   ```bash
   node -v
   yarn -v
   java -version
   spring --version
   openssl version
Use code with caution.
Configuração do Frontend (React):
Instale as dependências do projeto usando Yarn:
yarn install
Use code with caution.
Bash
Inicie o servidor de desenvolvimento do React:
yarn start
Use code with caution.
Bash
O frontend será iniciado em http://localhost:3000.
Configuração do Backend (Spring Boot):
Navegue até o diretório do backend e inicie o servidor Spring Boot:
./mvnw spring-boot:run
Use code with caution.
Bash
O backend será iniciado em http://localhost:8080.
Soluções de Erro (caso ocorra):
Node.js: ERR_OSSL_EVP_UNSUPPORTED:
Se você encontrar o erro relacionado ao OpenSSL, execute o seguinte comando para usar a flag de openssl-legacy-provider:
# Solução temporária
export NODE_OPTIONS=--openssl-legacy-provider
Use code with caution.
Bash
Para usuários Windows:
set NODE_OPTIONS=--openssl-legacy-provider
Use code with caution.
Bash
Atualizando dependências e ferramentas:
Caso precise atualizar as dependências e garantir que tudo está na versão mais recente, utilize os comandos abaixo:
# Atualizar pacotes do frontend
yarn upgrade

# Atualizar pacotes no backend (Java)
./mvnw clean install
Use code with caution.
Bash
📄 Documentação do Projeto
Documentação oficial do React: https://reactjs.org/docs/getting-started.html
Documentação do Spring Boot: https://spring.io/guides/gs/spring-boot/
Guia do Yarn: https://classic.yarnpkg.com/en/docs/
OpenSSL: https://www.openssl.org/docs/
🌐 Endpoints
Frontend: http://localhost:3000
Backend: http://localhost:8080
Rotas Disponíveis no Backend:
/pedidos: Gerenciamento de pedidos
/produtos: Gerenciamento de produtos
/usuarios: Gerenciamento de usuários
🧑‍💻 Contribuidores
Sinta-se à vontade para contribuir! Abra issues, envie pull requests e vamos melhorar este projeto juntos. Se encontrar dificuldades, confira os logs e não hesite em pedir ajuda.
📄 Licença
Este projeto é licenciado sob a MIT License.
