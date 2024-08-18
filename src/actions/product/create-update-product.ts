'use server';

import prisma from '@/lib/prisma';
import { Gender, Product } from '@prisma/client';
import { z } from 'zod';

const productSchema = z.object({
    id: z.string().uuid().optional().nullable(),
    title: z.string().min(3).max(255),
    slug: z.string().min(3).max(255),
    description: z.string(),
    price: z.coerce
    .number()
    .min(0)
    .transform(val => Number(val.toFixed(2))),
    inStock: z.coerce
    .number()
    .min(0)
    .transform(val => Number(val.toFixed(0))),
    categoryId: z.string().uuid(),
    tags: z.string(),
    gender: z.nativeEnum(Gender),

})

export const createUpdateProduct = async(formData: FormData ) => {
    const data = Object.fromEntries(formData);
    const productParsed = productSchema.safeParse(data);

    if (!productParsed.success) {
        console.log(productParsed.error);
        return { ok: false}
    } 

    const product = productParsed.data;
    product.slug = product.slug.toLowerCase().replace(/ /g, '-' ).trim();

    const {id, ...rest} = product;

    const prismaTx = await prisma.$transaction(async (tx) => {
        let product : Product;
        const tagsArray = rest.tags.split(',').map( tag => tag.trim().toLowerCase());

        if (id) {
            //actualizar
            product = await prisma.product.update({
                where: {id},
                data: {
                    ...rest,
                    tags: {
                        set: tagsArray
                    }
                }
            });
          //  console.log({updatedProduct: product});
        } else {
             //creando el producto
             product = await prisma.product.create({
                data: {
                    ...rest,
                    tags: {
                        set: tagsArray
                    }
                }
            })
        }
        console.log({product});
        return {
            product
        }
    })
return {
    ok: true
}
}