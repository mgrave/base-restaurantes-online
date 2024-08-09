'use server';

import { auth } from "@/auth.config";
import type { Address } from "@/interfaces";
import prisma from "@/lib/prisma";

interface ProductToOrder {
    productId: string;
    quantity: number;
    
}

export const  placeOrder = async(producIds: ProductToOrder[], address: Address) => {

    const session = await auth();
    const userId = session?.user.id;

    if (!userId) {
        return {
            ok: false,
            message: 'No hay sesión de usuario'
        }
    }

    //Obtener la informacion de los productos
    //nota: podemos llevar mas de 2 productos  con el mismo ID
    const products = await prisma.product.findMany({
        where: {
            id: {
                in: producIds.map(p => p.productId)
            }
        }
    });
    console.log(products);
     //calcular los montos
     const itemsInOrder = producIds.reduce((count, p) =>count + p.quantity , 0);
     console.log(itemsInOrder);

         //calcular los totales
    const {subTotal, tax, total} = producIds.reduce( (totals, item) => {

        const productQuantity = item.quantity;
        const product = products.find(product => product.id === item.productId);

        if(!product) throw new Error(`${item.productId} no existe Error - 500`);

        const subTotal = product.price * productQuantity;

        totals.subTotal += subTotal;
        totals.tax += subTotal * 0.12;
        totals.total += subTotal * 1.12;

        return totals;
    }, {subTotal: 0, tax: 0, total: 0})
    console.log({subTotal, tax, total})

}