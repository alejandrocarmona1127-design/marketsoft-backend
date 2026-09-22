const { Provider } = require('../models/index')

class ProviderController {
    static async getAllProviders(req, res) {
        try {
            const providers = await Provider.findAll()
            res.json(providers)
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving providers', error })
        }
    }

    static async getProviderById(req, res) {
        try {
            const { id } = req.params
            const provider = await Provider.findByPk(id)
            if (!provider) {
                return res.status(404).json({ message: 'Provider not found' })
            }
            res.json(provider)
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving provider', error })
        }
    }

    static async createProvider(req, res) {
        try {
            const provider = await Provider.create(req.body)
            res.status(201).json(provider)
        } catch (error) {
            res.status(400).json({ message: 'Error creating provider', error })
        }
    }

    static async updateProvider(req, res) {
        try {
            const { id } = req.params
            const provider = await Provider.findByPk(id)
            if (!provider) {
                return res.status(404).json({ message: 'Provider not found' })
            }
            await provider.update(req.body)
            res.json(provider)
        } catch (error) {
            res.status(400).json({ message: 'Error updating provider', error })
        }
    }

    static async deleteProvider(req, res) {
        try {
            const { id } = req.params
            const provider = await Provider.findByPk(id)
            if (!provider) {
                return res.status(404).json({ message: 'Provider not found' })
            }
            // Al usar paranoid: true en el modelo, esto hace un borrado lógico (soft delete)
            await provider.destroy()
            res.json({ message: 'Provider deleted successfully' })
        } catch (error) {
            res.status(500).json({ message: 'Error deleting provider', error })
        }
    }
}

module.exports = ProviderController