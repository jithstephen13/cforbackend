const {postModel}=require("../model/post.model")
const Updatenode=async(req,res)=>{
    const id=req.params.id
    const payload=req.body

        try {
       await postModel.findByIdAndUpdate({_id:id},payload)
        res.status(200).send("Updated")
        } 
       catch (error) {
        res.status(404).send(error)
      
}

}


module.exports={Updatenode}