// tradicionalmente incluiriamos aqui os 4 métodos padrão para um recurso: GET, POST, PUT, e DELETE;
// porém, dado o desafio, todas as requisições GET ficarão aqui temporariamente, e serão abertas em
// outros controllers conforme necessário
// decidi incluir detalhes sobre verificação de valores apenas uma vez, já que alguns foram feitos
// de maneira quase idêntica em mais de um local
import pokeapi from '../api'

// lista todos os pokémons da primeira geração (Kanto)
const getFromKanto =  async (req, res) => {
  let external_res = await pokeapi.get('/api/v2/pokedex/2/')  
  let data = external_res.data.pokemon_entries
  return res.status(200).json(data)
}

// lista pokémons da primeira geração filtrados pelo tipo selecionado
const getByType = async (req, res) => {
  let { type } = req.params

  // define os nomes dos tipos válidos, na ordem apropriada
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
    'unknown',
    'shadow'
  ]
  
  // verifica se o parametro é texto, e caso seja, se está na lista de types validos
  if (isNaN(parseInt(type))) {
    if (!typeNames.includes(type)) {
      return res.status(400).json(`Invalid type: ${type}`)
    }
  }

  // verifica se o parametro (numerico) está entre 1 e quantos tipos válidos a lista contiver, neste caso 18
  if (type < 1 || type > typeNames.length) {
    return res.status(400).json(`Invalid type: ${type}`)
  }

  // transforma, invariavelmente, o texto do tipo (caso seja) para o código correspondente
  for (let i = 0; i < typeNames.length; i++) {
    if (typeNames[i] == type) {
      type = (i+1).toString()
    }
  }

  let external_res = await pokeapi.get(`/api/v2/type/${type}`)
  let pokemons = external_res.data.pokemon
  let gen1 = []

  // lê todos os pokemons do array e verifica, através dos seus IDs, se eles são da gen1 (1-151),
  // e os adiciona a um array de pokemons válidos
  for (let i = 0; i < pokemons.length; i++) {
    var url = pokemons[i].pokemon.url.slice(0, -1)
    let poke_id = url.split('/').pop()
  
    for (let j = 0; j <= 151; j++) { 
      if (poke_id == j) {
        gen1.push(pokemons[i])
      }
    }
  }
  return res.status(200).json({type: typeNames[type-1], gen1})
}

// detalha único pokémon, a partir do ID 
const view = async (req, res) => {
  let { poke_id } = req.params
  
  if (isNaN(parseInt(poke_id))){
    return res.status(400).json(`Invalid poke_id: ${poke_id}`)
  }

  let external_res = await pokeapi.get(`/api/v2/pokemon/${poke_id}`)
  let pokemon = external_res.data

  if (pokemon.id > 151 || pokemon.id < 1) {
    return res.status(400).json(`Pokémon does not belong in Kanto region: ${pokemon.name}`)
  }

  let pokedata = {
    poke_id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    sprite: pokemon.sprites.front_default
  }

  return res.status(200).json(pokedata)
}

export { getFromKanto, getByType, view }
