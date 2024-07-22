import type { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
    cart: CartProduct[];
    //metodos para modificar el carrito de compras
    getTotalItems: () => number;
    //addProductToCart
    addProductTocart: (product: CartProduct) => void;
    //updateProductQuantity
    updateProductQuantity: (product: CartProduct, quantity: number) => void;
    //removeProduct
}

export const useCartStore = create<State>()(
   persist(
    //la definicion como primer argumento
    (set,get) => ({

        cart: [],
        //methods
        getTotalItems: () => {
            const {cart} = get();
            //tenemos que barrer todos nuestros elementos
            return cart.reduce((total, item) => total + item.quantity, 0);
        },
        addProductTocart: (product: CartProduct) => {
    
            const {cart} = get();
                console.log({product})
    
             
             const productInCart = cart.some(
                
                (item) => item.id === product.id
            );
            console.log('el producto va en camino al carrito', productInCart);
            
            if (!productInCart){
               
                set({cart: [...cart, product]});
                return;
            }
            
            
            const updateCartProducts = cart.map((item)=> {
                //este es el articulo que yo quiero actualizar
                if (item.id === product.id){
                    //aqui regresamos el articulo actualizado
                    return {...item, quantity: item.quantity + product.quantity}
                }
             
                return item;
            });
            set({cart: updateCartProducts});
          
        },
        updateProductQuantity: (product: CartProduct, quantity: number) => {
            const {cart} = get();

                const updateCartProducts = cart.map( item => {
                    if(item.id === product.id){
                        return {...item, quantity: quantity};
                    }
                     //si ese no es el articulo, entonces que lo regrese para no hacerle modificaciones
                     return item;
                });
                set({cart: updateCartProducts});
        }
    
       
    })
    
    , {
        //segundo argumento va el nombre de nuestro store, el nombre de la llave que le queremos dar en el local storage
        name: 'shopping-cart'
    }
   )
)