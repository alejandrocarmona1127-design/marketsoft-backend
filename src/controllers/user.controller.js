const { User } = require('../models/index')

class UserController {
    static async getAllUsers(req, res) {
        try {
            const users = await User.findAll()
            res.json(users)
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving users', error })
        }
    }

    static async getUserById(req, res) {
        try {
            const { id } = req.params
            const user = await User.findByPk(id)
            if (!user) return res.status(404).json({ message: 'User not found' })
            res.json(user)
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving user', error })
        }
    }

    static async createUser(req, res) {
        try {
            const user = await User.create(req.body)
            res.status(201).json(user)
        } catch (error) {
            res.status(400).json({ message: 'Error creating user', error })
        }
    }

    static async updateUser(req, res) {
        try {
            const { id } = req.params
            const user = await User.findByPk(id)
            if (!user) return res.status(404).json({ message: 'User not found' })
            await user.update(req.body)
            res.json(user)
        } catch (error) {
            res.status(400).json({ message: 'Error updating user', error })
        }
    }

    static async deleteUser(req, res) {
        try {
            const { id } = req.params
            const user = await User.findByPk(id)
            if (!user) return res.status(404).json({ message: 'User not found' })
            await user.destroy()
            res.json({ message: 'User deleted successfully' })
        } catch (error) {
            res.status(500).json({ message: 'Error deleting user', error })
        }
    }
}

module.exports = UserController