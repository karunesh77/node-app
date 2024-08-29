
import mongoose from "mongoose";
import express from "express";
import User from "./src/user.js"
const app = express()
const port = 3000;



mongoose.connect("mongodb://127.0.0.1:27017/my-app")
.then(()=> console.log('mongoDB connected')
);

//middleware

app.use(express.urlencoded({extended:"false"}))


app.get('/user', async (req, res) => {
    const allUser = await User.find({})
    return res.json(allUser)
})

app.get("/user/:id", async (req,res)=>{
        const user = await User.findById(req.params.id)
        console.log(user);
        return res.status(200).json(user)        

})

app.post("/user",async (req,res) =>{
    const body = req.body;
    // console.log("This is body",body);
    
    const result = await User.create({
        user:body.user,
        email:body.email,
        lastName:body.lastName,
        address:body.address,   
    })

    console.log("This is result" ,result);
    return res.status(200).json({msg:'success', id:result._id})
})


app.delete("/user/:id", async (req,res) => {
    await User.findByIdAndDelete(req.params.id)
     return res.json({msg:"success"})
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))