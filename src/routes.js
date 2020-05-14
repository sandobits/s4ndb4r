// rotas da api base
import { Router } from 'express'
import * as PokemonController from './controllers/PokemonController'

const router = Router()

router.get('/', PokemonController.getFromKanto)

export default router
