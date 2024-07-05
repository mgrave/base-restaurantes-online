import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";

const seedProducts = initialData.products;

interface Props {
    params: {
        id: Category;
    }
}


export default function({params}: Props) {

    const {id} = params;

    const products = seedProducts.filter(product => product.gender === id );

    const labels: Record<Category, string> = {
        'specialities': 'Specialities',
        'kid': 'kids',
        'ceviche': 'Ceviches',
        'cocktail': 'Cocktails',
        'soup': 'Soup',
        'sides': 'Sides',
        'botanas': 'Botanas',
    }

    // if (id === 'kids') {
    //     notFound();
    // }

    return (
        <>
        <Title 
        title={`${labels [id]} `}
        subtitle="Todos los Platillos" 
        className="mb-2">
     
        </Title>
     
        <ProductGrid products={products}></ProductGrid>
        </>
    )
}