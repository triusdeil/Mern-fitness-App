import {Router} from 'express'
import {findCards, createCard, findCard} from '../controllers/exercisesController' 
const router = Router()

router.route('/exercises')
    .get(findCards)
    .post(createCard)

router.route('/exercises/:id')
    .get(findCard)

export default router