import { Router } from 'express';

const router = Router();

router.post('/', (req, res)=>{
    res.status(200).json({messsage:'Crea un cart'});
});

router.get('/', (req, res)=>{
    res.status(200).json({messsage:'Devuelve todos los carts'});
});

router.get('/:id', (req, res)=>{
    res.status(200).json({messsage:'Devuelve un cart por su id'});
});

export default router;