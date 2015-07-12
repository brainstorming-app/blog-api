### Install NVM

```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash
```

### Install IO.js (latest now: v2.3.1)

```
$ nvm install v2.3.1
$ nvm use v2.3.1

```
# Install Start

```
$ npm install
$ npm start
```

# Postgres DB docker

```
$ docker-compose up

or run in background

$ docker-compose up -d

```

# run migrations
```
$ cd lib
$ ../node_modules/sequelize-cli/bin/sequelize db:migrate

```
enjoy
