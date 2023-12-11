import { Router } from 'express';
import CartManager from "../class/CartManager.js";

const path = 'src/data/carts.json'

const manager = new CartManager(path);


const router = Router();

router.post('/', async (req, res)=>{
    try {

        
       const newCart = await manager.addCart(req.body)     
        res.status(201).json(newCart)

    } catch (error) {
        console.log(error)
    }
});


router.post('/:cid/products/:pid', async (req, res)=>{
    try {
        const cid = req.params.cid;
        const pid = req.params.pid;
        const cart = await manager.getCartByid(cid);

        const existeElPid = cart.products.find(item => item.product == pid);

        if(existeElPid){
            cart.products.map(async (product)=>{
                console.log(product.product == existeElPid.product)
                if (product.product == existeElPid.product) {
                    product.quantity++
                    await manager.updateCart(cart)
                }
            })
        } else {
            cart.products.push(req.body)
            await manager.updateCart(cart)
        }
        
        res.json(cart)

    } catch (error) {
        console.log(error)
    }
});


router.get('/', async (req, res)=>{
    try {
        const carts  = await manager.getCarts();
        res.json(carts);
    
    } catch (error) {
        console.log(error);
    }
});

router.get('/:cid', async (req, res)=>{
    try {
        const cid = req.params.cid
        const cart = await manager.getCartByid(cid)
        res.json(cart)
    } catch (error) {
        res.status(404).json({message:'No existe el cart buscado'})
    }
});

export default router;