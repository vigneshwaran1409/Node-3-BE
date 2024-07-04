import express from 'express'
import indexcontroller from '../controller/index.js'
import mentorRoutes from './mentor.js'
import studentRoutes from './student.js'
import assignRoutes from './assign.js'
const router=express.Router()
router.get('/', function(req, res){
    indexcontroller.homePage
//router.get('/',indexcontroller.homePageStudent
  })
router.use('/mentor',mentorRoutes)
router.use('/student',studentRoutes)
router.use('/assign',assignRoutes)

export default router