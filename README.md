# Trabalho de Extensão da Faculdade - Curso de ADS - Análise e Desenvolvimento de Sistemas </br>
</br>
Abordando as Matérias de Computação em Nuvem e Banco de Dados.</br>
</br>
Usaremos o PostgreSql em Nuvem, além de hospedar o site em um dos serviços da AWS, usaremos o trabalho para atender um pequeno mercado de verduras e frutas da Cidade de Coromandel/MG.</br>
</br>
Trabalho será todo voluntários usando e serviços gratuitos. Terá além do site, um app mobile, toda parte de marketing digital da empresa rescem formada.</br>
</br>

🌐 O Conhecimento só tem um destino, ser commpartilhado! 🌐




🛒 Sacolão Online</br>
</br>
Bem-vindo ao projeto Sacolão Online! </br>
</br>
Este repositório contém o código para um sistema de gerenciamento de pedidos, usuários e produtos. Abaixo, você encontrará todas as informações necessárias para rodar o frontend e backend do projeto.</br>
</br>
🚀 Tecnologias Utilizadas</br>
</br>
Aqui estão as principais tecnologias e ferramentas usadas no projeto:</br>
</br>
<br> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="40"/>
Node.js: Plataforma JavaScript para o backend.

<br> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40"/>
React: Biblioteca para construir interfaces de usuário no frontend.

<br> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" width="40"/>
Spring Boot: Framework Java para o backend.

<br> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" alt="Yarn" width="40"/>
Yarn: Gerenciador de pacotes JavaScript.

<br> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openssl/openssl-original.svg" alt="OpenSSL" width="40"/>
OpenSSL: Biblioteca para criptografia utilizada no Node.js.

📋 Pré-requisitos</br>
</br>
Antes de começar, certifique-se de ter o seguinte instalado:</br>
</br>
Node.js (recomendado: versão 22)</br>
</br>
Yarn
</br>
Java JDK 17+
</br>
Spring Boot
</br>
OpenSSL</br>
</br>
🛠️ Setup do Projeto</br>
</br>
1. Verificar versões instaladas</br>
</br>
Certifique-se de que todas as ferramentas necessárias estão instaladas corretamente, verificando suas versões com os seguintes comandos:
</br>
bash</br>
Copiar código</br>
# Verificar versão do Node.js</br>
node -v</br>
</br>
# Verificar versão do Yarn</br>
</br>
yarn -v
</br>
# Verificar versão do Java</br>
</br>
java -version</br>
</br>
# Verificar versão do Spring Boot</br>
</br>
spring --version
</br>
# Verificar versão do OpenSSL</br>
</br>
openssl version</br>
<br>
2. Configuração do Frontend (React)</br>
</br>
Instale as dependências do projeto usando Yarn:</br>
</br>

bash</br>
Copiar código</br>
yarn install</br>
</br>
Inicie o servidor de desenvolvimento do React:</br>
</br>

bash</br>
Copiar código</br>
yarn start</br>
</br>
O frontend será iniciado em http://localhost:3000.</br>
</br>
<br>
3. Configuração do Backend (Spring Boot)</br>
</br>
Navegue até o diretório do backend e inicie o servidor Spring Boot:</br>
</br>
bash</br>
Copiar código</br>
./mvnw spring-boot:run</br>
</br>
O backend será iniciado em http://localhost:8080.</br>
</br>
<br>
4. Soluções de Erro (caso ocorra)</br>
</br>
Node.js: ERR_OSSL_EVP_UNSUPPORTED</br>
</br>
Se você encontrar o erro relacionado ao OpenSSL, execute o seguinte comando para usar a flag de openssl-legacy-provider:
</br>
bash</br>
Copiar código</br>
# Solução temporária</br>
</br>
export NODE_OPTIONS=--openssl-legacy-provider</br>
</br>
Para usuários Windows:</br>
</br>
bash</br>
Copiar código</br>
set NODE_OPTIONS=--openssl-legacy-provider</br>
<br>
5. Atualizando dependências e ferramentas</br>
</br>
Caso precise atualizar as dependências e garantir que tudo está na versão mais recente, utilize os comandos abaixo:</br>
</br>
bash</br>
Copiar código</br>
# Atualizar pacotes do frontend</br>
</br>
yarn upgrade</br>
</br>
# Atualizar pacotes no backend (Java)</br>
</br>
./mvnw clean install</br>
</br>
📄 Documentação do Projeto</br>
</br>
Documentação oficial do React</br>
</br>
Documentação oficial do React</br>
</br>
Guia do Yarn</br>
</br>
OpenSSL FAQs</br>
</br>
🌐 Endpoints</br>
</br>
Frontend: http://localhost:3000</br>
</br>
Backend: http://localhost:8080</br>
</br>
Rotas Disponíveis no Backend
</br>
/pedidos: Gerenciamento de pedidos
</br>
/produtos: Gerenciamento de produtos
</br>
/usuarios: Gerenciamento de usuários
</br>
🧑‍💻 Contribuidores
</br>
Sinta-se à vontade para contribuir! Abra issues, envie pull requests e vamos melhorar este projeto juntos. Se encontrar dificuldades, confira os logs e não hesite em pedir ajuda.</br>
</br>
📄 Licença</br>
</br>
Este projeto é licenciado sob a MIT License.
