const { Sale, SaleProduct, Product, User } = require('../models/index')

class SaleController {
    static async getAllSales(req, res) {
        try {
            
            const sales = await Sale.findAll({
                include: [
                    { model: User, as: 'user', attributes: ['id', 'name', 'email'] },
                    { model: SaleProduct, as: 'saleProducts' }
                ]
            })
            res.json(sales)
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving sales', error })
        }
    }

    static async getSaleById(req, res) {
        try {
            const { id } = req.params
            const sale = await Sale.findByPk(id, {
                include: [
                    { model: User, as: 'user', attributes: ['id', 'name', 'email'] },
                    { model: SaleProduct, as: 'saleProducts' }
                ]
            })
            if (!sale) return res.status(404).json({ message: 'Sale not found' })
            res.json(sale)
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving sale', error })
        }
    }

    static async createSale(req, res) {
        try {
            const { userId, products } = req.body
            

            if (!products || products.length === 0) {
                return res.status(400).json({ message: 'A sale must have at least one product' })
            }

           
            const sale = await Sale.create({ userId, total: 0 })
            let calculatedTotal = 0

           
            for (const item of products) {
                const product = await Product.findByPk(item.productId)
                
                if (product) {
                    const price = product.price
                    const subtotal = price * item.quantity
                    calculatedTotal += subtotal

                    
                    await SaleProduct.create({
                        saleId: sale.id,
                        productId: item.productId,
                        quantity: item.quantity,
                        price: price 
                    })

                    
                    await product.update({ stock: product.stock - item.quantity })
                }
            }

            
            await sale.update({ total: calculatedTotal })

            
            const completedSale = await Sale.findByPk(sale.id, {
                include: [{ model: SaleProduct, as: 'saleProducts' }]
            })

            res.status(201).json(completedSale)
        } catch (error) {
            res.status(400).json({ message: 'Error creating sale', error })
        }
    }

    static async deleteSale(req, res) {
        try {
            const { id } = req.params
            const sale = await Sale.findByPk(id)
            if (!sale) return res.status(404).json({ message: 'Sale not found' })
            
            await sale.destroy()
            res.json({ message: 'Sale deleted successfully' })
        } catch (error) {
            res.status(500).json({ message: 'Error deleting sale', error })
        }
    }
}

module.exports = SaleController