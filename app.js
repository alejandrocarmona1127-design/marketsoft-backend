const express = require('express')
const dotenv = require('dotenv')
const DatabaseSync = require('./src/config/sync')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('server is running successfully')
})

async function startServer() {
    try {
        await DatabaseSync.sync()

        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`)
        })

    } catch (error) {
        console.log('Error starting server:', error)
    }
}

startServer()