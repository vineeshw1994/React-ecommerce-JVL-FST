const mongoose = require('mongoose');

const productSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter the product name'],
        trim:true,
        maxLength:[100, 'product name cannot exceed 100 charactrers'],
    },
    price:{
        type:Number,
        required:true,
        default:0.0
    },
    discription:{
        type:String,
        required:[true, 'please enter product description']

    },
    ratings:{
        type:String,
        default:0
    },
    images:[{
        image:{
            type:String,
            required:true
        }
    }],
    category:{
        type:String,
        required:[true,'please enter product category'],
        enum:{
            values:[
                'Electronics',
                'Mobile phones',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message:'please select correct category'
        }
    },
    seller:{
        type:String,
        required:[true,'please enter product seller'],
      
    },
    stock:{
        type:Number,
        required:[true,'please enter product stock'],
        maxLength:[20,'product stock cannot exceed 20'] 
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:String,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const schema = mongoose.model('product', productSchema)

module.exports = schema;