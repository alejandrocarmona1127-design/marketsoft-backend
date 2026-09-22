const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const User = sequelize.define('User', {
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: 'Email already exists'
        },
        validate: {
            isEmail: {
                msg: 'Email format is invalid'
            },
            notEmpty: {
                msg: 'Email can not be empty'
            },
            len: {
                args: [5, 100],
                msg: 'Email must be between 5 and 100 characters'
            }
        }
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user',
        validate: {
            notEmpty: {
                msg: 'Role can not be empty'
            },
            isIn: {
                args: [['admin', 'user']],
                msg: 'Role must be admin or user'
            }
        }
    }
}, {
    tableName: 'Users',
    timestamps: true,
    paranoid: true
})

module.exports = User