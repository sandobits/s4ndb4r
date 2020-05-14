// importa o módulo axios e define a api externa para busca de dados
import axios from 'axios'

const pokeapi = axios.create({
  baseURL: 'https://pokeapi.co'
})

export default pokeapi
