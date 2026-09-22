const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Name can not be empty'
            },
            len: {
                args: [1, 100],
                msg: 'Name must be between 1 and 100 characters'
            }
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: {
                msg: 'Price must be a number'
            },
            min: {
                args: [0.01],
                msg: 'Price must be greater than 0'
            }
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: {
                msg: 'Stock must be an integer'
            },
            min: {
                args: [0],
                msg: 'Stock cannot be negative'
            }
        }
    },
    providerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Products',
    timestamps: true,
    paranoid: true
})

module.exports = Product