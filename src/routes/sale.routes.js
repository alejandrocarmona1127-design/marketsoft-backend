const express = require('express')
const router = express.Router()
const SaleController = require('../controllers/sale.controller')

router.get('/', SaleController.getAllSales)
router.get('/:id', SaleController.getSaleById)
router.post('/', SaleController.createSale)
router.delete('/:id', SaleController.deleteSale)

module.exports = router