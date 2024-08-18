
export interface Product {
    id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[];
    slug: string;
    tags: string[];
    title: string;
    //type: Type;
    gender: Category;
}

export interface CartProduct {
    id: string;
    slug: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
    size?: Size;
}

export interface ProductImage {
    id: number;
    url: string;
    productId?: string;
}


type Category = 'specialities'|'kid'|'ceviche'|'cocktail'|'soup'|'sides'|'botanas';
export type Size = 'S'|'M'|'L';
export type Type = 'fish'|'shrimp'|'octopus'|'oysters'|'side'|'appetizers'|'crab'|'seafood';