const router= require("express").Router();



router.get("/",(req,res)=>{
    res.status(200).json({message:"version V2"})
})


module.exports= router



