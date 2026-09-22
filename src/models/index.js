const sequelize = require('../config/database')
const User = require('./user.model')
const Provider = require('./provider.model')
const Product = require('./product.model')
const Sale = require('./sale.model')
const SaleProduct = require('./saleproduct.model')

Provider.hasMany(Product, {
    foreignKey: 'providerId',
    as: 'products',
    onDelete: 'restrict',
    onUpdate: 'cascade'
})

Product.belongsTo(Provider, {
    foreignKey: 'providerId',
    as: 'provider'
})

User.hasMany(Sale, { 
    foreignKey: 'userId',
    as: 'sales',
    onDelete: 'restrict',
    onUpdate: 'cascade'
})

Sale.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
})

Sale.hasMany(SaleProduct, {
    foreignKey: 'saleId',
    as: 'saleProducts',
    onDelete: 'restrict',
    onUpdate: 'cascade'
})

SaleProduct.belongsTo(Sale, {
    foreignKey: 'saleId',
    as: 'sale'
})

Product.hasMany(SaleProduct, {
    foreignKey: 'productId',
    as: 'saleProducts',
    onDelete: 'restrict',
    onUpdate: 'cascade'
})

SaleProduct.belongsTo(Product, {
    foreignKey: 'productId',
    as: 'product'
})

module.exports = {
    sequelize,
    User,
    Provider,
    Product,
    Sale,
    SaleProduct
}