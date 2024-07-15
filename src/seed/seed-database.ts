import prisma from '../lib/prisma';
import { initialData } from './seed';

async function main() {

    await Promise.all([
        await prisma.product.deleteMany(),
        await prisma.productImage.deleteMany(),
        await prisma.category.deleteMany()

    ]);

     //insertar categoria individualmente
    // await prisma.category.create({
    //     data: {
    //         name: 'Fish',
    //     }
    // })

    const {categories, products} = initialData;

    const categoriesData = categories.map(category => ({
        //vamos a regresar un objeto directamente
        name: category
    }));
    // ahora vamos a tomar categoriesData para impcatar la base de datos
    await prisma.category.createMany({
        data: categoriesData
    });

     // PASO 2: Conseguir los Id de las categorias
     const categoriesDB = await prisma.category.findMany();
     //ahora vamos a crear un mapa
     const categoriesMap = categoriesDB.reduce((map, category) => {
         //aqui construimos el cuerpo
         map[category.name.toLowerCase()] = category.id;
         return map;
     }, {} as Record<string, string>) //<string=shirt, string=categoryID> 
     console.log(categoriesMap);

     //productos

    products.forEach(async(product) => {
        const {type, images, ...rest} = product;

        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categoriesMap[type]
            }
        })
        
          //Images
          const imagesData = images.map(image => ({
            url: image,
            productId: dbProduct.id
        }));

        //aqui lo insertamos
        await prisma.productImage.createMany({
            data: imagesData
        });
       
       
    });
    

    console.log('Seed se ejecuto correctamente');
}



//creando funcion anonima autoinvocada
(()=> {
    if (process.env.NODE_ENV === 'production') return;
    main();
})();