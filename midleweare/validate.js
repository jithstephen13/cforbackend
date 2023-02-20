const jwt = require('jsonwebtoken');
const validate= (req,res,next)=>{
    

    var token=req.headers.authorization
            jwt.verify(token, 'secrettocken',async function(err, decoded) {
                const  post =await postModel.findOne({_id:id})

              let  userinnote=post.user
             let userlogin=req.body.user
                if(!decoded||userinnote!=userlogin){
                    res.status(404).send({"error":"user is not autherised"})
                     
                }
                else{ 
                    
                    next()
                   
                }
            });
}

module.exports={validate}