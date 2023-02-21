const express = require('express');
const router = express.Router();

const RevendeurController = require('../controllers/revendeur.controller')
router.get('/',RevendeurController.allProducts)

module.exports = router;