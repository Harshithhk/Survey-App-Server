import mongoose from 'mongoose'

const surveySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    profession:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required:true,
    },
    sex:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true,
    },
    voterId:{
        type: Boolean,
        required: true,
    },
    adharCard:{
        type: Boolean,
        required: true,
    },
    rationCard:{
        type: Boolean,
        required: true,
    },
    panCard:{
        type: Boolean,
        required: true,
    },
    votingCity:{
        type: String,
        required: true,
    },
    votingState:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    currentSatisfaction:{
        type: Number,
        required: true,
    },
    scopeOfImprovement:{
        type: [String],
        required: true,
    },
    year:{
        type: String,
        required: true,
    },
    votedParty:{
        type: String,
        required: true,
    },
},{
    timestamps: true
})

const Survey = mongoose.model('Survey', surveySchema)

export default Survey










// {
//     "name": "Harshith",
//     "email": "harshithhk98@gmail.com",
//     "profession": "student",
//     "phone":  8308743202,
//     "sex": "Male",
//     "dob": "04-09-1998",
//     "voterId": false,
//     "adharCard": true,
//     "rationCard": false,
//     "panCard": false,
//     "votingCity": "Kolhapur",
//     "votingState":  "Maharashtra",
//     "address": "131,Pratibha Nagar, Kolhapir, 416008",
//     "currentSatisfaction": 1,
//     "scopeOfImprovement": ["roads","expenses","everything fucking"],
//     "year": "2020",
//     "votedParty": "NA"
// }