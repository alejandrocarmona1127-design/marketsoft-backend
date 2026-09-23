const express = require('express')
const router = express.Router()
const SaleController = require('../controllers/sale.controller')

/**
 * @swagger
 * components:
 *   schemas:
 *     Sale:
 *       type: object
 *       required:
 *         - userId
 *         - products
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado de la venta
 *         userId:
 *           type: integer
 *           description: ID Vendedor
 *         total:
 *           type: number
 *           format: float
 *           description: Total a pagar
 *         date:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora
 *       example:
 *         userId: 1
 *         products:
 *           - productId: 1
 *             quantity: 2
 *           - productId: 2
 *             quantity: 1
 */

/**
 * @swagger
 * /api/sales:
 *   get:
 *     summary: Obtiene el registro de todas las ventas
 *     tags: [Sales]
 *     responses:
 *       200:
 *         description: Lista de ventas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sale'
 */
router.get('/', SaleController.getAllSales)

/**
 * @swagger
 * /api/sales:
 *   post:
 *     summary: Registra una nueva venta
 *     tags: [Sales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sale'
 *     responses:
 *       201:
 *         description: Venta registrada y total calculado exitosamente
 *       400:
 *         description: Error al procesar la venta (ej. falta de stock)
 */
router.post('/', SaleController.createSale)

/**
 * @swagger
 * /api/sales/{id}:
 *   get:
 *     summary: Obtiene los detalles de una venta por su ID
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la venta
 *     responses:
 *       200:
 *         description: Venta encontrada
 *       404:
 *         description: Venta no encontrada
 */
router.get('/:id', SaleController.getSaleById)

/**
 * @swagger
 * /api/sales/{id}:
 *   put:
 *     summary: Actualiza una venta existente
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la venta a modificar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sale'
 *     responses:
 *       200:
 *         description: Venta actualizada exitosamente
 *       404:
 *         description: Venta no encontrada
 */
router.put('/:id', SaleController.updateSale)

/**
 * @swagger
 * /api/sales/{id}:
 *   delete:
 *     summary: Anula o elimina una venta del registro
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la venta a anular
 *     responses:
 *       200:
 *         description: Venta eliminada exitosamente
 *       404:
 *         description: Venta no encontrada
 */
router.delete('/:id', SaleController.deleteSale)

module.exports = router