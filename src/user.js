
import mongoose from "mongoose";

// const addresSchema = new mongoose.Schema({
//     city:{
//         type:String,
        
//     },
//     state:{
//         type:String,
//     },
//     pinCode:{
//         type:Number,
//     }
// },{timestamps:true})




const userSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true,
        lowercase:true,
    },

    email:{
        type:String,
        required:true,
        lowercase:true,

    },

    lastName:{
        type:String,
        required:true,
    },
    address:{
        type:String,
    }

},{timestamps:true})

const User = mongoose.model("User",userSchema)

export default User;

