const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const SaleProduct = sequelize.define('SaleProduct', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    saleId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: {
                msg: 'Quantity must be an integer'
            },
            min: {
                args: [1],
                msg: 'Quantity must be at least 1'
            }
        }
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: {
                msg: 'Price must be a number'
            },
            min: {
                args: [0],
                msg: 'Price cannot be negative'
            }
        }
    }
}, {
    tableName: 'SaleProducts',
    timestamps: true,
    paranoid: true
})

module.exports = SaleProduct