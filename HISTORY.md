# History of this project

- [Environment](#environment)
- [Project](#project)
  - [Initiation](#initiation)
  - [Set dependencies](#set-dependencies)
- [Develop](#develop)


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
    > 서버 코드를 수정했을 때 nodemone이 감지해 자동으로 재실행 시켜준다.
    ```bash
    # nodemon
    npm i nodemon -D
    ```

    > Set [`nodemon.json`](nodemon.json)

2. [**Babel**](https://babeljs.io/docs/en/)
    > 자바스크립트 컴파일러  
    > 최신 사양의 자바스크립트 코드를 IE나 구형 브라우저에서도 동작하는 ES5 이하의 코드로 변환(트랜스파일링)할 수 있다.
    ```bash
    # babel
    npm i @babel/core @babel/cli @babel/node -D
    ```

    [**babel/preset-env**](https://babeljs.io/docs/en/babel-preset-env)
    > babel을 실행하기 위해 필요한 플러그인들을 모아놓은 파일이다
    ```bash
    # babel preset-env
    npm i @babel/preset-env -D
    ```

    > Set [`babel.config.json`](babel.config.json)

3. [**express**](https://expressjs.com/)
    > NodeJS를 사용하여 서버를 개발하고자 하는 개발자들을 위하여 서버를 쉽게 구성할 수 있게 만든 프레임워크다.
    ```bash
    # express
    npm i express
    ```

4. [**pug**](https://pugjs.org/api/getting-started.html)
    > pug는 html을 조금 더 세련되게 쓸 수 있는 템플릿 언어, express 뷰 엔진으로 npm으로 설치할 수 있다.
    ```bash
    # pug
    npm i pug
    ```

5. [**WebSocket**](https://github.com/theturtle32/WebSocket-Node)
    > HTTP 환경에서 클라이언트와 서버 사이에 하나의 TCP 연결을 통해 실시간으로 양방향 통신을 가능하게 하는 프로토콜이다.

    ```bash
    # WebSocket
    npm i ws
    ```

6. [**socket.io**](https://socket.io/)
    > 자바스크립트를 이용하여 브라우저 종류에 상관없이 실시간 웹을 구현할 수 있도록 한 라이브러리이다.  
    > 소켓 연결 실패시 다른 방식으로 알아서 해당 클라이언트와 연결을 시도한다
    ```bash
    # socket.io
    npm i socket.io
    ```

7. [**socket.io admin**](https://socket.io/docs/v4/admin-ui/)
    > socket.io 관리 UI이다.
    ```bash
    # socket.io admin-ui
    npm i @socket.io/admin-ui
    ```

8. [**localtunnel**](https://github.com/localtunnel/localtunnel)
    > 로컬 환경을 외부에서 접속해 볼 수 있는 주소를 생성해준다. (테스트 용도)
    ```bash
    # localtunnel
    npm i localtunnel

    npm install -g localtunnel
    ```
 

## Develop

- [`src/server.js`](src/server.js)