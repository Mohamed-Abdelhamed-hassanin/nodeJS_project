const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const userRouter =require("./routes/users")
const userViewRouter =require("./routes/userView")


const app = express()
app.use(express.static("img"))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set("view engine","ejs")

app.use("/api/users",userRouter)
app.use("/users",userViewRouter)

app.get("/",(req,res)=>{
    //res.sendFile(path.join(__dirname,"main.html"))`
    res.render("main",{title:"i will fuck u very hard"})
})
mongoose.connect("mongodb://localhost/project",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("the server is started")
}).catch((error)=>{console.log(`something went wrong ${error}`)})

const port = 3000
app.listen(port,()=>{
    console.log(`the server now is listening on port number ${port}`)
})