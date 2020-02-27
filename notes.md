# Notes

### Node
[Node.js](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.

Allowed JavaScript to be used as a more general purpose language and a stand alone process on your machine (whereas before, really could only work in a browser). Let devs run JavaScript server-side vs only getting to run JavaScript on the client in the browser.

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
A query builder for relational database management systems (RDBMSes) like MySQL.

### Hapi.js
A web framework for building web apps, APIs, & services.

### Babel
On-the-fly transpilation of ES6 code, meaning no need to run `gulp build:development` for every change.

### Resources
- https://scotch.io/tutorials/getting-started-with-hapi-js
- https://hapi.dev/tutorials/?lang=en_US#server
- https://scotch.io/tutorials/making-a-restful-api-with-hapi-js
- https://www.youtube.com/watch?v=Recv7vR8ZlA
- https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef
- https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e
