const express = require("express");
const db = require("../model/db");
const router =express.Router();


router.get("/",async(req,res)=>{

    //const user = await db.getAll;
    let user = await db.getAll();
    res.send(user)

})
router.get("/:id",async(req,res)=>{
    ;
    const user = await db.getone(req.params.id);
    res.send(user)

})
router.post("/",async(req,res)=>{
    const {firstname} = req.body
    if(!firstname) res.json("name is missing")
    const user = await db.create(req.body);
    res.send(user)

})

router.delete("/:id",async(req,res)=>{
    const showDeleted = await db.getone(req.params.id)
    res.send(showDeleted)
    const user = await db.remove(req.params.id);
    /*res.send(await db.getone(req.params.id))*/

})
router.put("/:id",async(req,res)=>{
    const user = await db.edit(req.params.id,req.body)
    return res.send(user)
})

module.exports = router
