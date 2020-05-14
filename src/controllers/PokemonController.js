// tradicionalmente incluiriamos aqui os 4 métodos padrão para um recurso: GET, POST, PUT, e DELETE;
// porém, dado o desafio, todas as requisições GET ficarão aqui temporariamente, e serão abertas em
// outros controllers conforme necessário
import pokeapi from '../api'

// lista todos os pokémons da primeira geração (Kanto)

const getFromKanto =  async (req, res) => {
  let external_res = await pokeapi.get('/api/v2/type/2/')  
  
  let data = external_res.data.pokemon

  console.log(data)
  return res.status(200).json(data)
}

export { getFromKanto }