'use client';
import { QuantitySelector } from "@/components"

import { useState } from "react";



export const AddToCart = () => {
    const [quantity, setQuantity] = useState<number>(1);

    const addToCart = ( ) => {
        console.log({ quantity})
    }
  return (
    <>
     {/* selector de cantidad */}
     <QuantitySelector 
     quantity={quantity}
     onQuantityChanged={setQuantity}
     ></QuantitySelector>
            {/* button */}
                <button onClick={addToCart} className="btn-primary my-5">
                    Agregar al carrito
                </button>
    </>
  )
}
