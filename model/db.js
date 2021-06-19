const mongoose = require("mongoose")

const scheme = new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:String,
    email:String
})
const User = mongoose.model("User",scheme)
const getAll = ()=>{
    return User.find()
}
const getone = (id)=>{
    
    return User.findById(id);
}
const create =(user)=>{
    return new User(user).save()
}
const remove =(id)=>{
    //return User.findByIdAndDelete(id);
    return User.deleteOne({_id:id})
}

const edit = (id,user)=>{
    return User.updateOne({_id:id},user)
}
module.exports = {getAll,getone,create,remove,edit}