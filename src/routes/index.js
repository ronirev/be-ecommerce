import { Router } from 'express';
import healtCheck from './health-check-routes.js'
import productRoutes from './products-router.js'
import cartsRoutes from './carts-routes.js'


const router = Router();

// Usar las rutas de productos y carritos
router.use('/health', healtCheck);
router.use ('/products', productRoutes);
router.use('/carts', cartsRoutes)

export default router;

