const express = require("express")
const path = require("path")
const router = express.Router()
const User = require("../model/db")
router.get("/",async(req,res)=>{
    const user = await User.getAll()
    res.render(path.join(__dirname,"..","views","adding_users"),{title:"add user"})
   // console.log(path.join(__dirname,"..","adding_users.html"))
})

router.get("/view",async(req,res)=>{
    const users = await User.getAll()
    res.render(path.join(__dirname,"..","views","viewing_users"),{users})
   // console.log(path.join(__dirname,"..","adding_users.html"))
})

router.post("/",async(req,res)=>{
    /*const users = await User.getAll()*/
   //res.render(path.join(__dirname,"..","views","viewing_users"),{users})
   // console.log(path.join(__dirname,"..","adding_users.html"))
   await User.create(req.body)
   res.redirect("/users/view")
})

router.get("/delete/:id",async(req,res)=>{
    /*const users = await User.getAll()*/
   // res.render(path.join(__dirname,"..","views","viewing_users"),{users})
   // console.log(path.join(__dirname,"..","adding_users.html"))
   console.log(req.params.id)
   await User.remove(req.params.id)
   res.redirect("/users/view")
})


router.get("/edit/:id",async(req,res)=>{
    /*const users = await User.getAll()*/
   
   // console.log(path.join(__dirname,"..","adding_users.html"))
   const user = await User.getone(req.params.id)
   //user = req.body
   res.render("editing_user",{title:"edit user",user})
   
   //res.redirect("viewing_users")
   
})
router.post("/edit/:id",async(req,res)=>{
    /*const users = await User.getAll()*/
   // res.render(path.join(__dirname,"..","views","viewing_users"),{users})
   // console.log(path.join(__dirname,"..","adding_users.html"))
   await User.edit(req.params.id,req.body)
   
   res.redirect("viewing_users")
   //res.redirect("/users/view")
})
module.exports = router