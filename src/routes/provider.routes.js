const express = require('express')
const router = express.Router()
const ProviderController = require('../controllers/provider.controller')

/**
 * @swagger
 * components:
 *   schemas:
 *     Provider:
 *       type: object
 *       required:
 *         - name
 *         - phone
 *         - email
 *         - city
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado del proveedor
 *         name:
 *           type: string
 *           description: Nombre
 *         phone:
 *           type: string
 *           description: Teléfono de contacto
 *         email:
 *           type: string
 *           description: Correo electrónico
 *         city:
 *           type: string
 *           description: Ciudad
 *       example:
 *         name: arroces Diana
 *         phone: "3001234567"
 *         email: ventas@arroz_diana.com
 *         city: Medellín
 */

/**
 * @swagger
 * /api/providers:
 *   get:
 *     summary: Obtiene la lista de todos los proveedores
 *     tags: [Providers]
 *     responses:
 *       200:
 *         description: Lista de proveedores obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Provider'
 */
router.get('/', ProviderController.getAllProviders)

/**
 * @swagger
 * /api/providers:
 *   post:
 *     summary: Crea un nuevo proveedor
 *     tags: [Providers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Provider'
 *     responses:
 *       201:
 *         description: Proveedor creado exitosamente
 *       400:
 *         description: Error en la validación de datos
 */
router.post('/', ProviderController.createProvider)

/**
 * @swagger
 * /api/providers/{id}:
 *   get:
 *     summary: Obtiene un proveedor por su ID
 *     tags: [Providers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del proveedor
 *     responses:
 *       200:
 *         description: Proveedor encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Provider'
 *       404:
 *         description: Proveedor no encontrado
 */
router.get('/:id', ProviderController.getProviderById)

/**
 * @swagger
 * /api/providers/{id}:
 *   put:
 *     summary: Actualiza los datos de un proveedor
 *     tags: [Providers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del proveedor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Provider'
 *     responses:
 *       200:
 *         description: Proveedor actualizado exitosamente
 *       404:
 *         description: Proveedor no encontrado
 */
router.put('/:id', ProviderController.updateProvider)

/**
 * @swagger
 * /api/providers/{id}:
 *   delete:
 *     summary: Elimina un proveedor
 *     tags: [Providers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del proveedor
 *     responses:
 *       200:
 *         description: Proveedor eliminado exitosamente
 *       404:
 *         description: Proveedor no encontrado
 */
router.delete('/:id', ProviderController.deleteProvider)

module.exports = router