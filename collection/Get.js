const {postModel}=require("../model/post.model")
const jwt = require('jsonwebtoken');
const GetPost=async(req,res)=>{
    let query=req.query
    var token=req.headers.authorization

    try {

        jwt.verify(token, 'secrettocken', async function (err, decoded) {
            if(decoded){
                let todo=await postModel.find({_id:decoded.id,module:query})
                 res.send(todo)
               
            }
            else{
                res.send({mssg:"plzzzzz login "})
            }
        });
        
    } catch (error) {
        res.status(404).send(error)
    }
 

}
module.exports={GetPost}


