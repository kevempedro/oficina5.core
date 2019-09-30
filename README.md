# officina5.core

It is a service developed with Node.js and MySql, responsible for the CRUD of vehicles in a relational database.

## Technologies

* Node.js -> Javascript runtime environment server-side.
* MySql -> Relational database.
* JavaScript -> Client-side programming language, which now also runs on the serve-side side along with Node.js.

## Tools used

* VSCODE -> Development IDE used to write code.
* Insomnia -> Used to test the project's GET, POST, PUT, DELETE, and PATCH.

## Libs

### Sequelize

Object-Relational Mapper (ORM) for Node.js. It allows you to create, fetch, alter and remove database data using JS objects and methods, as well as make changes to the table structure. It supports PostgreSQL, MySQL, MSSQL and SQLite databases.

### Express

It is the most popular web framework, and is the underlying library for a number of other popular Node frameworks. Provides mechanisms for:

* Manages the requests of different requests and routes and URLs.
* Combine with view rendering engines to generate responses by inserting data into models.
* Configure common web application settings such as the port to use for connection and the location of templates that are used to render the response.
* Add middleware at any point of the request to intercept processing or preprocessing and processing it.

## Instalation

* 'npm install' or 'yarn' -> to generate the node_modules;
* 'npx sequelize db:migrate' or 'yarn sequelize db:migrate' -> to generate the database according to dabase.js settings;
* 'npm run dev' or 'yarn dev' -> to run the project
