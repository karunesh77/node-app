
import mongoose from "mongoose";
import express from "express";
import user from "./user";
const app = express()
const port = 3000;



mongoose.connect("mongodb://127.0.0.1:27017")
.then(()=> console.log('mongoDB connected')
.catch((err)=> console.log("error",err)
));

//middleware

app.use(express.urlencoded({extended:"false"}))


app.get('/login', (req, res) => res.send('Hello World!'))

app.post("/login",async (req,res) =>{
    const body = req.body;
    const result = await user.create({
        userName:body.userName,
        email:body.email,
        isLoggedIn:body.isLoggedIn,
        address:body.address,
    })
    console.log(result);
    return res.status(200).json({msg:'success', id:result._id})
    

})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))