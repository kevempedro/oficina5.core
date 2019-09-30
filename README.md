# officina5.core

É um serviço desenvolvido com Node.js e MySql, responsável pelo CRUD de veiculos em uma banco de dados relacional.

## Tecnologias

* Node.js -> Ambiente de execução Javascript server-side.
* MySql -> Banco de dados relacional.
* JavaScript -> Linguagem de programação client-side, mas que também agora roda no lado serve-side junto com o Node.js.

## Ferramentas utilizadas

* VSCODE -> IDE de desenvolviemento utilizada para escrever os códigos.
* Insomnia -> Utilizado para testar os serviços GET, POST, PUT, DELETE e PATCH do projeto.

## Bibliotecas

### Sequelize

ORM (Object-Relational Mapper) para Node.js. Ele permite criar, buscar, alterar e remover dados do banco usando objetos e métodos em JS, além de fazer alterações na estrutura das tabelas. Ele suporta os bancos PostgreSQL, MySQL, MSSQL e SQLite.

### Express

 É o framework web mais popular, e é a biblioteca subjacente para uma série de outros frameworks populares de Nodes. Fornece mecanismos para:

* Gerencia as requisições de diferentes requisições e rotas e URLs.
* Combinar com mecanismos de renderização de "view" para gerar respostas inserindo dados em modelos.
* Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta.
* Adicionar em qualquer ponto da requisição um "middleware" para interceptar processar ou pré-processar e tratamentar à mesma.

## Instalação

* 'npm install' ou 'yarn' -> para gerar a node_modules;
* 'npx sequelize db:migrate' ou 'yarn sequelize db:migrate' -> para gerar o banco de acordo com as configurações da dabase.js;
* 'npm run dev' ou 'yarn dev' -> para rodar o porjeto.
