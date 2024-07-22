'use client';
import { QuantitySelector } from "@/components"
import { CartProduct, Product } from "@/interfaces";
import { useCartStore } from "@/store";
import { useState } from "react";


interface Props {
  product: Product;
}

export const AddToCart = ({product}:Props) => {
 
  const addProductToCart = useCartStore(state => state.addProductTocart);
  const [quantity, setQuantity] = useState<number>(1);
  
  const addToCart = () => {
      console.log({quantity, product})
      const cartProduct: CartProduct = {
        id: product.id,
        slug: product.slug,
        title: product.title,
        price: product.price,
        quantity: quantity,
        image: product.images[0]
      }
     // agregar al carrito
    addProductToCart(cartProduct);
      setQuantity(1);
      console.log('aqui ya esta en el carrito' ,cartProduct);
    }
    
  return (
    <>
     {/* selector de cantidad */}
     <QuantitySelector 
     onQuantityChanged={setQuantity}
     quantity={quantity}
     ></QuantitySelector>
            {/* button */}
               
                <button 
                onClick={addToCart} 
                className="btn-primary my-5">
                    Agregar al carrito
                </button>
    </>
  )
}
