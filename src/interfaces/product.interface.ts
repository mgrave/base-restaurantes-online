export interface Product {
    //TODO: Id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[];
    slug: string;
    tags: string[];
    title: string;
    type: Type;
    gender: Category;
}

export type Category = 'specialities'|'kid'|'ceviche'|'cocktail'|'soup'|'sides'|'botanas';
export type Size = 'S'|'M'|'L';
export type Type = 'fish'|'shrimp'|'octopus'|'oysters'|'side'|'appetizers'|'crab'|'seafood';