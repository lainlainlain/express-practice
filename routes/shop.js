const express = require('express')
const path = require('path');



const adminData = require('../controllers/product')

const router = express.Router()

router.get("/", adminData.getProducts);

module.exports = router;