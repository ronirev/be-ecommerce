import express from 'express';
import healtCheck from './health-check-routes.js'
import productRoutes from './products-router.js'

const router = express.Router();

// Usar las rutas de productos y carritos
router.use('/health', healtCheck);
router.use ('/products', productRoutes);

export default router;

