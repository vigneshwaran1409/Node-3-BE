import express from 'express'
import mentorController from '../controller/mentor.js'
const router = express.Router()

router.get('/', mentorController.allMentor)
router.post('/',mentorController.addMentor)
router.delete('/:id', mentorController.deleteMentor)
router.get('/students/:id', mentorController.mentorstudentlist)
router.put('/:id/:batch', mentorController.addBatch)
router.put('/:id/', mentorController.editMentor)
router.get('/:id/', mentorController.getoneMentor)


export default router