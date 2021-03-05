import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js' 

// @desc     Auth user & get token
// @route    POST /api/users/login
// @access   Public
const login = async(req,res) => {
    const {name,password} = req.body
    console.log(req.body)
    
    const user = await User.findOne({name:name})
    console.log(user)

    if(user && (await user.matchPassword(password))){
        delete user.password
        res.json({
            user: {
                name: user.name
                },
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid name or password')
    }
}


// @desc     Register a new user
// @route    POST /api/users
// @access   Public
const register =async(req,res) => {
    const {name,password} = req.body
    
    const userExists = await User.findOne({flatNo:flatNo})

    if(!userExists){

        const user = await User.create({name,password,wing,flatNo,phoneNo,isRental,ownerId,avatar})

        if(user){
             delete user['password']
            res.json({
                user: {
                    name: user.name,
                },
                token: generateToken(user._id),    
            })
        }else{
            res.status(400).json('Invalid user data')
        }
    }else{
        res.status(400).json('UserExists')
    }
}



// @desc     GET user profile
// @route    GET /api/users/profile
// @access   Private
const getUserProfile =async(req,res)=>{
    
   const user = await User.findById(req.user._id)

   if(user){
    res.json({
        _id: user._id,
        name: user.name,
        role: user.role,
    })
   }else{
       res.status(404)
       throw new Error('User not found')
   }
}


// @desc     Update user profile
// @route    PUT /api/users/profile
// @access   Private
const updateUserProfile = async(req,res) => {
    
    
   
//    console.log(`USER OF REPLY ${userOfReply}`)
   
   const user = await User.findById(req.user._id)

   if(user){

        // UPDATING USER
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }
        
        const updatedUser = await user.save()

        res.json({
            name : updatedUser.name,
            email : updatedUser.email,
        })

   }else{
       res.status(404)
       throw new Error('User not found')
   }
}


export{login,register,getUserProfile,updateUserProfile}