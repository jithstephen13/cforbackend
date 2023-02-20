
const mongoose=require("mongoose")

const postShema=mongoose.Schema({
        title:{type:String,required:true},
        body:{type:String,required:true},
        device :{type:String,required:true},
        no_if_commentsP:{type:Number,required:true},
        user:{type:String,required:true}
        
        
})

const postModel=mongoose.model("post",postShema)

module.exports={postModel}