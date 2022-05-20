const express = require('express')
const path = require('path');
const adminControllers = require('../controllers/product')

const router = express.Router();


router.get("/add-product", adminControllers.getAddProduct);

router.post("/add-product", adminControllers.postAddProduct);

module.exports = router;