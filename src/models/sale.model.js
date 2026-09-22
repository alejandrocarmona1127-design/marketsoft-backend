const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Sale = sequelize.define('Sale', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        validate: {
            isDate: {
                msg: 'Date must be a valid date'
            }
        }
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: {
                args: [0],
                msg: 'Total cannot be negative'
            }
        }
    }
}, {
    tableName: 'Sales',
    timestamps: true,
    paranoid: true
})

module.exports = Sale