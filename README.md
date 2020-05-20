# Desafio: s4ndb4r

Para entender o desafio, clique [aqui](https://ps-mercadou.firebaseapp.com/).

## Acessando a API

A API pode ser acessada diretamente em [`s4ndb4r.herokuapp.com`](https://s4ndb4r.herokuapp.com).  
Os links, caso o repositório seja baixado localmente, ainda apontarão para a API na Heroku.  

## Acessando o Frontend

O repositório do app frontend está [aqui](https://github.com/sandobits/s4ndb4r-react).  
Alternativamente, o app pode ser acessado diretamente em [`sandobits.github.io`](https://sandobits.github.io)

### Rotas

  METHOD |ENDPOINT            | OUTPUT  |
:-------:|:-------------------|:--      |
GET      | /                  | Lista os Pokémons de Kanto
GET      | /type/:type        | Lista os Pokémons de Kanto filtrados por tipo
GET      | /type/             | Lista tipos de Pokémon
GET      | /pokemon/:poke_id  | Lista algumas informações sobre um Pokémon específico

### Parâmetros

PARAM     | TYPES         | EXAMPLE
---------:|:-------------:|:--
:type     | string; int   | /normal; /1
:poke_id  | int           | /151

## Rodando a API localmente

```sh
$ git clone https://github.com/sandobits/s4ndb4r.git
$ cd s4ndb4r
$ npm i
$ npm run dev
. . .
[nodemon] starting `node ./server.js`
App running in port 4000
```
