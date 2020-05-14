import axios from 'axios'

const pokeapi = axios.create({
  baseURL: 'https://pokeapi.co'
})

export default pokeapi
