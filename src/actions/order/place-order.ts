'use server';

import { auth } from "@/auth.config";
import type { Address } from "@/interfaces";

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

    console.log({producIds, address, userId});


}