import { Router } from 'express'
import * as PokemonController from './controllers/PokemonController'
import * as TypeController from './controllers/TypeController'

const router = Router()

router.get('/', PokemonController.getFromKanto)
router.get('/type/', TypeController.getTypes)
router.get('/type/:type', PokemonController.getByType)
router.get('/pokemon/:poke_id', PokemonController.viewSingle)

export default router
