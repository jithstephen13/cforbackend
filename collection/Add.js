const {postModel}=require("../model/post.model")
const Add=async(req,res)=>{
    const post=req.body


    try {
        let todo=new postModel(post)
        todo.save()
        res.send("added") 
    } catch (error) {
        res.status(404).send(error)
    }
 

}
module.exports={Add}