import express from "express"
import studentController from "../controller/student.js"
const router = express.Router()
router.get('/', studentController.allStudent)
router.get('/:id', studentController.getoneStudent)
router.post('/addstudent', studentController.addStudent)
router.delete('/:id', studentController.deleteStudent)

export default router