import { Router } from 'express'
import * as PokemonController from './controllers/PokemonController'

const router = Router()

router.get('/', PokemonController.getFromKanto)
router.get('/:type', PokemonController.getByType)
router.get('/view/:poke_id', PokemonController.view)

export default router
