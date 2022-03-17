const retrieveProduct=(req,res, next)=>{
    const{productName,price} =req.params
    res.status(200).json({message:"Success",data:"welcome to nodejs tutorial "+productName+" Price: "+ price})
}

