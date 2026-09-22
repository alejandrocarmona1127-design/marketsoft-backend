const { Product, Provider } = require('../models/index')

class ProductController {
    static async getAllProducts(req, res) {
        try {
            const products = await Product.findAll({
                include: [{ model: Provider, as: 'provider' }]
            })
            res.json(products)
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving products', error })
        }
    }

    static async getProductById(req, res) {
        try {
            const { id } = req.params
            const product = await Product.findByPk(id, {
                include: [{ model: Provider, as: 'provider' }]
            })
            if (!product) return res.status(404).json({ message: 'Product not found' })
            res.json(product)
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving product', error })
        }
    }

    static async createProduct(req, res) {
        try {
            const product = await Product.create(req.body)
            res.status(201).json(product)
        } catch (error) {
            res.status(400).json({ message: 'Error creating product', error })
        }
    }

    static async updateProduct(req, res) {
        try {
            const { id } = req.params
            const product = await Product.findByPk(id)
            if (!product) return res.status(404).json({ message: 'Product not found' })
            await product.update(req.body)
            res.json(product)
        } catch (error) {
            res.status(400).json({ message: 'Error updating product', error })
        }
    }

    static async deleteProduct(req, res) {
        try {
            const { id } = req.params
            const product = await Product.findByPk(id)
            if (!product) return res.status(404).json({ message: 'Product not found' })
            await product.destroy()
            res.json({ message: 'Product deleted successfully' })
        } catch (error) {
            res.status(500).json({ message: 'Error deleting product', error })
        }
    }
}

module.exports = ProductController