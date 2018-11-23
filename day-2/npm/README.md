# Node Js & NPM

---

## NodeJs & NPM

### What is NodeJs

NodeJs is a open source JavaScript runtime environment. Using NodeJs we can execute javascript code outside of a browser.

### Install NodeJs

[Install via package manager](https://nodejs.org/en/download/package-manager) or via [nvm](https://github.com/creationix/nvm#installation).

### Node REPL

REPL stands for Read Eval Print Loop and it represents a computer environment like a Windows console or Unix/Linux shell.

Start REPL by using node command

```sh
node
```

```sh
# node command list
ctrl + c − terminate the current command.
ctrl + c twice − terminate the Node REPL.
ctrl + d − terminate the Node REPL.
Up/Down Keys − see command history and modify previous commands.
tab Keys − list of current commands.
.help − list of all commands.
.break − exit from multiline expression.
.clear − exit from multiline expression.
.save filename − save the current Node REPL session to a file.
.load filename − load file content in current Node REPL session.
```

you can also execute a javascript file.

```sh
node index.js
```

---

## NPM (Node Package Manager)

NPM is distributed with NodeJs - which means that when you download NodeJs, you automatically get NPM installed on your computer. NPM is a package manager for Node.js packages, or modules if you like.

###  NPM Commands

```zsh
# install npm package globally
npm install -g nodemon
# setup new npm package
npm init
# setup new npm package without any question
npm init -y
# install package and save to package dependency
npm install express --save
# install package and save to development package dependency
npm install pretty-error --save-dev
# install package dependency on production mode
npm install --production
# run a project
npm start
npm run dev
```

After `npm install` command, NPM will create node_modules folder in your project, dont forget to add node_modules folder to your .gitignore file.

### package.json

The `npm init` command will generate package.json, this file holds various information relevant to the project. 

```js
{
  "name": "api-project-3",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build" "echo \"build\" "
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.4",
    "dotenv": "^6.0.0",
    "express": "^4.16.3",
    "morgan": "^1.9.0",
    "mysql2": "^1.5.3",
    "sequelize": "^4.38.0"
  }
}
```

The `scripts` part is a collections of command list to run the project.

```sh
# run start script
npm start
# run another script besides start script
npm run dev
npm run test 
```
### package-lock.json

The package-lock.json help you to ensure a consistent install and compatible dependencies.

---

## Project Environment

Software code is usually developed, tested, and ultimately made available to end users in different computing environments.

* Dev Environment
Development environments are either local or remote environments that are meant for a programmer to write, test, and optimize code before it’s deployed into a real-world live situation. 

* Prod Environment
The production environment is where the software runs constantly and is widely available to end users and/or other software. 

For separating global variable in diffrent enviroment we can use `.env` file

```
APP_URL=http://localhost:5000/api

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

## References

* [Slide: JavaScript & Node 101](http://bit.ly/js-node-101)
* [Repo: `module-nodejs`](https://github.com/impactbyte-learn/module-nodejs)
* [Node.js Tutorial - TutorialsPoint](https://www.tutorialspoint.com/nodejs)
* [Semantic Versioning: Why You Should Be Using it — SitePoint](https://www.sitepoint.com/semantic-versioning-why-you-should-using)
* [NodeJs  W3Schools](https://www.w3schools.com/nodejs/nodejs_intro.asp)
* [NPM - W3Schools](https://www.w3schools.com/nodejs/nodejs_npm.asp)
* [Innoarchitech - Dev vs nvironment](https://www.innoarchitech.com/development-vs-or-production-batch-offline-online-automated-artificial-intelligence-ai-machine-learning
)



