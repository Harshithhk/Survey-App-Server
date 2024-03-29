import mongoose from 'mongoose'

const connectDB = async()=>{
    console.log(process.env.MONGO_URI)
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology : true,
            useNewUrlParser:true,
            useCreateIndex:true
            })
            console.log(`MongoDB Connected: ${conn.connection.host}`)
            }
        catch(err){
            console.log(`Error: ${err.message}`)
            process.exit(1)
          }
    }

    export default connectDB


    