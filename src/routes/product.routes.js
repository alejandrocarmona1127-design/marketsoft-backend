const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/product.controller')

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - stock
 *         - providerId
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado del producto
 *         name:
 *           type: string
 *           description: Nombre del producto
 *         description:
 *           type: string
 *           description: Descripción del producto
 *         price:
 *           type: number
 *           format: float
 *           description: Precio del producto (debe ser mayor a 0)
 *         stock:
 *           type: integer
 *           description: Cantidad (no negativo)
 *         providerId:
 *           type: integer
 *           description: ID del proveedor
 *       example:
 *         name: Arroz
 *         description: Arroz diana premium
 *         price: 4500
 *         stock: 10
 *         providerId: 1
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtiene la lista de todos los productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/', ProductController.getAllProducts)

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *       400:
 *         description: Error de validación (ej. precio negativo o stock inválido)
 */
router.post('/', ProductController.createProduct)

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Obtiene un producto por su ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Producto no encontrado
 */
router.get('/:id', ProductController.getProductById)

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Actualizar datos del producto
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 *       400:
 *         description: Error en la validación de datos
 *       404:
 *         description: Producto no encontrado
 */
router.put('/:id', ProductController.updateProduct)

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *       404:
 *         description: Producto no encontrado
 */
router.delete('/:id', ProductController.deleteProduct)

module.exports = router