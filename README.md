# Desafio: s4ndb4r

Para entender o desafio, clique [aqui](https://ps-mercadou.firebaseapp.com/).

## Acessando a API

A API pode ser acessada diretamente em `s4ndb4r.herokuapp.com`.
Atualmente ela conta com as seguintes rotas de acesso:

  METHOD |ENDPOINT        | OUTPUT  |
:-------:|:---------------|:--      |
GET      | /              | Lista os Pokémons de Kanto
GET      | /type/:type    | Lista os Pokémons de Kanto filtrados por tipo
GET      | /view/:poke_id | Lista algumas informações sobre um Pokémon específico

## Rodando a API para acesso local

```sh
$ git clone https://github.com/sandobits/s4ndb4r.git
$ cd s4ndb4r
$ npm i
$ npm run dev
. . .
[nodemon] starting `node ./server.js`
App running in port 4000
```

## Rodando o frontend

Coming soon... possivelmente. Vai depender.
