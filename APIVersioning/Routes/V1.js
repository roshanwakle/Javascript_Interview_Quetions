const router= require("express").Router();



router.get("/",(req,res)=>{
    res.status(200).json({message:"version V1"})
})


module.exports= router