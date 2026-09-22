const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Provider = sequelize.define('Provider', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Name can not be empty'
            },
            len: {
                args: [1, 60],
                msg: 'Name must be between 1 and 60 characters'
            }
        }
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        validate: {
            len: {
                args: [7, 20],
                msg: 'Phone must be between 7 and 20 characters'
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isEmail: {
                msg: 'Email format is invalid'
            }
        }
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            notEmpty: {
                msg: 'City can not be empty'
            }
        }
    }
}, {
    tableName: 'Providers',
    timestamps: true,
    paranoid: true
})

module.exports = Provider