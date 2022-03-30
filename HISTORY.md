# History of this project

- [Environment](#environment)
- [Project](#project)
  - [Initiation](#initiation)
  - [Set dependencies](#set-dependencies)


## Environment

1. [Install nvm(Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating)

   ```bash
   # Check
   nvm --version
   ```

2. Install node environment

   ```bash
   # Setup node manager
   nvm install 14.17.3
   
   # Check
   nvm current
   nvm list --no-alias
   node --version

   # Setup package manger
   npm install --global npm   # Maybe need to set a version. Please 
   
   # Check
   npm --version
   ```

## Project

### Initiation

```bash
# At the root of repository
mkdir hangout-zoom-with-nomad && cd hangout-zoom-with-nomad
# Create new node project
npm init -y
```

- Set [`.gitignore`](.gitignore)

### Set dependencies

1. [**Nodemon**](https://nodemon.io/)

    ```bash
    # nodemon
    npm i nodemon -D
    ```

    > Set [`nodemon.json`](nodemon.json)

2. [**Babel**](https://babeljs.io/docs/en/)

    ```bash
    # babel
    npm i @babel/core @babel/cli @babel/node -D
    ```

    [**babel/preset-env**](https://babeljs.io/docs/en/babel-preset-env)

    ```bash
    # babel preset-env
    npm i @babel/preset-env -D
    ```

    > Set [`babel.config.json`](babel.config.json)

3. [**express**](https://expressjs.com/)
    ```bash
    # express
    npm i express
    ```

4. [**pug**](https://pugjs.org/api/getting-started.html)
    ```bash
    # pug
    npm i pug
    ```

5. [**WebSocket**](https://github.com/theturtle32/WebSocket-Node)
    ```bash
    # WebSocket
    npm i ws
    ```
 

## Develop

- [`src/server.js`](src/server.js)