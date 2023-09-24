const { json } = require('express')
const productModel = require('../models/productModel')


exports.getproducts = (req, res) => {
    res.status(200).json({
        success: true,
        message:'this route will show all the products in database'
    })
}
//create product - /api/v1/product/new
exports.newproduct = async(req,res,next)=>{
   const product = await productModel.create(req.body)
   res.status(200)/json({
    success:true,
    product
   })
}