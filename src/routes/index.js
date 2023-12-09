import { Router } from 'express';
import healtCheck from './health-check-routes.js'
import productRoutes from './products-router.js'
import cartsRoutes from './carts-routes.js'

const router = Router();

// rutas de productos y carritos
router.use('/health', healtCheck);
router.use('/carts', cartsRoutes)
router.use ('/products', productRoutes);

export default router;
