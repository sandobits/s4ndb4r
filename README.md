# Desafio Estágio #1

O desafio proposto para a vaga de estágio como full stack consistiu em utilizar a PokeAPI para filtrar e exibir registros, especificamente os Pokémons da Primeira Geração. Com base nisso e na descrição da vaga, optei por construir uma API própria em Node, uma vez que eu não tinha experiência com React até aquele momento.

## Acessando a API

A API pode ser acessada diretamente em [`s4ndb4r.herokuapp.com`](https://s4ndb4r.herokuapp.com).  
Os links, caso o repositório seja baixado localmente, ainda apontarão para a API na Heroku, e deverão ser alterados para uso local.  

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
