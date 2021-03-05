import generateToken from '../utils/generateToken.js'
import Survey from '../models/surveyInput.js' 

// @desc     Add Survey Data
// @route    POST /api/survey/surveyData
// @access   Public
const addSurveyData = async(req,res) => {
    const {phone} = req.body
    console.log(req.body)
    
    const existingSurvey = await Survey.findOne({phone:phone})

    if(existingSurvey){
        res.status(400).json("survey for this phone number is already conducted")
    }else{
        try{
        const surveyData = await Survey.create(req.body)
        res.status(200).json({msg:"survey data created",surveyData})
        }catch(e){
            res.status(400).json(e)
        }
        
    }
}

const getSurveyData = async(req,res) => {
    
    try{
    const surveyData = await Survey.find({})
    res.send(surveyData)
    }catch(e){
        res.status(400).json(e)
    }
}

export{addSurveyData,getSurveyData}