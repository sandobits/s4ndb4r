//inclui listagem dos tipos apenas
import pokeapi from '../api'
const hostBaseUrl = 'https://s4ndb4r.herokuapp.com'

const getTypes = async (req, res) => {

  let external_res = await pokeapi.get('/type')
  let types = external_res.data.results

  let typeNames = [
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy',
  ]

  let valid_types = []

  // verifica se os tipos da lista estão presentes entre os tipos válidos
  for (let i = 0; i < types.length; i++) {
    if (typeNames.includes(types[i].name)) {
      let valid_type = {
        name: types[i].name,
        url: `${hostBaseUrl}/type/${types[i].name}`
      }      
      valid_types.push(valid_type)
    }
  }

  return res.json(valid_types)
}

export { getTypes }