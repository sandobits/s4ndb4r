# Desafio: s4ndb4r

Para entender o desafio, clique [aqui](https://ps-mercadou.firebaseapp.com/).

## Acessando a API

A API pode ser acessada diretamente em [`s4ndb4r.herokuapp.com`](https://s4ndb4r.herokuapp.com).  

### Rotas

  METHOD |ENDPOINT        | OUTPUT  |
:-------:|:---------------|:--      |
GET      | /              | Lista os Pokémons de Kanto
GET      | /type/:type    | Lista os Pokémons de Kanto filtrados por tipo
GET      | /view/:poke_id | Lista algumas informações sobre um Pokémon específico

### Parâmetros

PARAM     | TYPES         | EXAMPLE
---------:|:-------------:|:--
:type     | string; int   | /normal; /1
:poke_id  | int           | /151

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

Aqui os endereços de requisição para as rotas não funcionarão a não ser que a variável `hostBaseUrl`, em  
PokemonController, seja modificada pois ela aponta em hardcode para o host da Heroku.

## Frontend

O repositório do app frontend está [aqui](https://github.com/sandobits/s4ndb4r-react).  
Alternativamente, o app pode ser acessado diretamente em [`sandobits.github.io`](htpps://sandobits.github.io)
