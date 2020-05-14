import { Router } from 'express'
import api from './api'

const router = Router()

router.get('/', async (req, res) => {
  let api_res = await api.get('/api/v2/pokedex/2/')  
  
  console.log(api_res.data.pokemon_entries)
  return res.status(200).json(api_res.data.pokemon_entries)
})

export default router
