import { Router } from 'express';
import ProductManager from "../class/ProductManager.js";

const path = 'src/data/file.json'

const manager = new ProductManager(path);

const router = Router();

router.post('/', async (req, res)=>{
    try {
      const newProduct = await manager.addProduct(req.body)   
      console.log(newProduct)
      res.status(201).json( newProduct );

    } catch (error) {
      console.log(error)
    }
});

router.get('/', async (req, res)=>{
    //res.status(200).json({messsage:'Devuelve todos los productos'});
    const limit = req.query.limit;
    let products = await manager.getProducts();
    if (limit && !isNaN(limit)) {
      products =  products.slice(0, parseInt(limit));
    }
    res.json(products);
});

router.get('/:pid', async (req, res)=>{
    //res.status(200).json({messsage:'Devuelve un prodcto por su PID'});
    const pid = req.params.pid
    try {
      const product = await  manager.getProductByid(pid)
      res.json(product)
    } catch (error) {
      res.status(404).json({message:'No existe el producto buscado'})
    }
});


router.delete('/:pid', async (req, res) =>{
  const pid = req.params.pid
    try {
      await  manager.deleteById(pid)
      res.json({message : 'Producto eliminado'})
    } catch (error) {
      res.status(404).json({message:'No existe el producto buscado'})
    }

 
})


router.put('/:pid', async (req, res)=>{
  try {
    const updatedProduct = await manager.updateProduct(req.body)
    res.json(updatedProduct)

  } catch (error) {
    console.log(error)
  }
})




export default router;
