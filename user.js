
import mongoose from "mongoose";

const addresSchema = new mongoose.Schema({
    city:{
        type:String,
        
    },
    state:{
        type:String,
    },
    pinCode:{
        type:Number,
    }
},{timestamps:true})




const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        lowercase:true,
    },

    email:{
        type:String,
        required:true,
        lowercase:true,

    },

    isLoggedIn:{
        type:Boolean,
        required:true,
    },
    address:[addresSchema]

},{timestamps:true})

export const User = mongoose.model("User",userSchema)

