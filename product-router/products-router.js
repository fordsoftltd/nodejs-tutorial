const express = require('express')
const router = express.Router()

router.get("/:productName/:price",(req,res, next)=>{
    const{productName,price} =req.params
    res.status(200).json({message:"Success",data:"welcome to nodejs tutorial "+productName+" Price: "+ price})
})

router.get("/list",(req,res, next)=>{
    let result =[{name:"odofin",email:"Odofin@swipe.ng"},{name:"Lanre",email:"lanre@gmail.com"}]
    res.status(200).json({message:"Success",data:result})
})
router.post("/add", (req, res, next)=>{
    
   let payload=req.body
  
    console.log(payload['comments'])
    res.status(200).json({message:"Success",data:"Record received successfully"})
})

module.exports = router;
