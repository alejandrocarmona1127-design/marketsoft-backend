const express = require('express')
const router = express.Router()
const ProviderController = require('../controllers/provider.controller')

router.get('/', ProviderController.getAllProviders)
router.get('/:id', ProviderController.getProviderById)
router.post('/', ProviderController.createProvider)
router.put('/:id', ProviderController.updateProvider)
router.delete('/:id', ProviderController.deleteProvider)

module.exports = router