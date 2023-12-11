import { promises as fs } from 'fs';
import setPathData from "../helpers/setPathData.js";
let carts= [];

export default class CartManager {
    constructor(path){
        this.carts = carts;
        this.path = path;
    }

    //addCart
    async addCart(newCart) {        
        try {
            const directory = await setPathData(this.path);
           // this.path = directory
        if (directory !== '') {
            const data = await fs.readFile(directory);
            const carts = JSON.parse(data);
            newCart.id = this.#idGenerate(carts);
            carts.push(newCart);
            const json_carts = JSON.stringify(carts);
            await fs.writeFile(directory, json_carts, 'utf-8');
        }
        
        return newCart;

        } catch (error) {
            console.log(error)
        }

}
    //getCarts
    async getCarts(){
        try {
        const data = await fs.readFile(this.path, 'utf-8');
        const carts = JSON.parse(data);
        return carts;
        } catch (error) {
            throw new Error('Not Found')
        }
    }

    //getCartById
    async getCartByid(id){
        const data = await fs.readFile(this.path, 'utf-8');
        const carts = JSON.parse(data);
        const cart = carts.filter(cart => cart.id == id);
        if(cart != ''){
            return cart[0];
        }else{
            throw new Error("Not found");
        }
    }
    
    // agrega productos : 

    updateCart = async (cartToUpdated) =>{
       // console.log(cartToUpdated)
        const data = await fs.readFile(this.path, 'utf-8');
        const carts = JSON.parse(data);

        const update = carts.map((cart) => {
            if (cart.id === cartToUpdated.id) {
              return cartToUpdated;
            } else {
              return cart;
            }
          });


        const json_carts=JSON.stringify(update)
          await fs.writeFile(this.path,json_carts,'utf-8')  
        
          //console.log(update)

          return cartToUpdated;
    }



   // async addProducts()





    // Metodo privado que genera un id incremental desde el largo de un array
    #idGenerate = (array)=>{
        return array.length + 1;
    }

}
 