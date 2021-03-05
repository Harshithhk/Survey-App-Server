import express from 'express'
const router = express.Router()
import {
  addSurveyData, getSurveyData,
} from '../controllers/surveyController.js'
import {protect} from '../middlewares/authMiddleware.js'

router.route('/surveydata').post(addSurveyData).get(getSurveyData)

export default router