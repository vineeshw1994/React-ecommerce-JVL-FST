const express = require('express');
const { getproducts, newproduct } = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getproducts);
router.route('/product/new').post(newproduct)



module.exports = router;
