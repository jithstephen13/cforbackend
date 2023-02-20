
const express=require("express")
const { Add } = require("../collection/Add")
const { Delete } = require("../collection/Delete")
const { GetPost } = require("../collection/Get")
const { HomePage } = require("../collection/HomePage")
const { Login } = require("../collection/Login")
const { Register } = require("../collection/Register")
const { Updatenode } = require("../collection/UpdateteNotes")
const AppRoutes=express.Router()

AppRoutes.get("/",HomePage)

AppRoutes.post("/users/register",Register)
AppRoutes.post("/users/login",Login)

AppRoutes.post("/post",Add)
AppRoutes.get("/post",GetPost)
AppRoutes.patch("/posts/update/:id",Updatenode)
AppRoutes.delete("/posts/delete/:id",Delete)


module.exports={AppRoutes}