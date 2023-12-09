import { Router } from 'express';

const router = Router();

router.post('/', (req, res)=>{
    res.status(201).json({messsage:'Crea un producto'});
});

router.get('/', (req, res)=>{
    res.status(200).json({messsage:'Devuelve todos los productos'});
});

router.get('/:pid', (req, res)=>{
    res.status(200).json({messsage:'Devuelve un prodcto por su PID'});
});


export default router;
