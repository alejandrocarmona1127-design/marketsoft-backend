const express = require('express')
const dotenv = require('dotenv')
const DatabaseSync = require('./src/config/sync')
const setupSwagger = require('./src/config/swagger')

const providerRoutes = require('./src/routes/provider.routes')
const userRoutes = require('./src/routes/user.routes')
const productRoutes = require('./src/routes/product.routes')
const saleRoutes = require('./src/routes/sale.routes')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

setupSwagger(app)


app.use('/api/providers', providerRoutes)
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/sales', saleRoutes)

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