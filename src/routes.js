import { Router } from 'express'
import * as PokemonController from './controllers/PokemonController'

const router = Router()

router.get('/', PokemonController.getFromKanto)
router.get('/type/:type', PokemonController.getByType)
router.get('/pokemon/:poke_id', PokemonController.viewSingle)

export default router
