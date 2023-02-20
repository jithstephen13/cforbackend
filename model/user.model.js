
const mongoose=require("mongoose")

const userShema=mongoose.Schema({
        name:String,
        email:String,
        password :String,
        gender:String,
        age:String,
        city:String
        
})

const UserModel=mongoose.model("user",userShema)

module.exports={UserModel}


