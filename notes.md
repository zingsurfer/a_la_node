# Notes

### Node
[Node.js](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.

Allowed JavaScript to be used as a more general purpose language and a stand alone process on your machine (whereas before, really could only work in a browser). Let devs run JavaScript server-side vs only getting to run JavaScript on the client in the browser.

Because of Node's general purpose nature, we'll need to add packages to provide the additional functionality we need (like pg to interact directly with our database, and knex to build SQL queries).

### What is a JavaScript runtime?
A JavaScript runtime is the system that compiles JavaScript files into machine code. Runtimes also provide tools and libraries specific to an environment (aka custom functionality).

Chrome V8 custom functionality examples:
- functions for click events & DOM manipulation
- window & document

Node custom functionality examples:
- libraries for setting up web servers
- global & process

Chrome & Node pass JavaScript and C++ bindings to create the context for JavaScript to be executed in to the V8 engine.

### V8
A JavaScript engine written in C++. In other words, a C++ program that receives JavaScript, compiles, & executes it. Designed to speed up JavaScript execution inside web browsers by translating JavaScript into more efficient machine code instead of using an interpreter.

### Knex.js
A query builder for relational database management systems (RDBMSes) like PostgreSQL & MySQL.

### Objection
An object-rational mapper (ORM) built on Knex. Objection provides a Model class our models can inherit from, reduces complex join queries, and has other nice features like eager loading and schema validation.

### Query Builder
An abstraction layer above querying languages like SQL for database access that adds usability, safety, or flexibility features. Query builders are typically light-weight and do not attempt to translate the data into a specific programming paradigm like object oriented programming.

### ORM
TL;DR: A tool that maps data stored in a relational database into objects. It is a higher abstraction layer than a query builder that translates between the relational database data representation and the representation in memory used with object oriented programming. An ORM provides an object oriented interface to the data in a relational database. An ORM allows devs to use the object-oriented paradigm of their chosen language instead of writing SQL, reduces repetitive (boilerplate) code, and abstracts away some of the complexity. If often includes added out-of-the-box functionality (ex: support for transaction & migrations).

### Database setup, migrations, & seeding
Create a local PostgreSQL database: `$ createdb a_la_node`
To create a migration: `$ knex migrate:make migrationName`
To run the latest migration: `$ knex migrate:latest`
To rollback a migration: `$ knex migrate:down`
To seed: `$ knex seed:run`
Check it by running `$ psql a_la_node` & `\dt` (or whatever SQL command your heart desires). Run `exit` when you're done.

### Hapi.js
A web framework for building web apps, APIs, & services.

### Babel
On-the-fly transpilation of ES6 code, meaning no need to run `gulp build:development` for every change.

### Resources
- https://scotch.io/tutorials/getting-started-with-hapi-js
- https://hapi.dev/tutorials/?lang=en_US#server
- https://scotch.io/tutorials/making-a-restful-api-with-hapi-js
- https://frontend.turing.io/lessons/module-4/knex-postgres.html?ads_cmpid=6451354298&ads_adid=76255849919&ads_matchtype=b&ads_network=g&ads_creative=378042327747&utm_term=&ads_targetid=dsa-310094130363&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=CjwKCAiAnfjyBRBxEiwA-EECLCkN6zNQC55MLUilMWSO3FZiGK0EGvRi-uFrY1Ayt-y3H2eeB7ltkBoC8bgQAvD_BwE
- https://www.youtube.com/watch?v=Recv7vR8ZlA
- https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef
- https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e
- https://itnext.io/express-knex-objection-painless-api-with-db-74512c484f0c
- https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a
- https://dataguide.prisma.io/types/relational/comparing-sql-query-builders-and-orms
