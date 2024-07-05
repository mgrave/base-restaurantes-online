interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: 'specialities'|'kid'|'ceviche'|'cocktail'|'soup'|'sides'|'botanas'
}

type ValidSizes = 'S'|'M'|'L';
type ValidTypes = 'fish'|'shrimp'|'octopus'|'oysters'|'side'|'appetizers'|'crab'|'seafood';

interface SeedData {
    products: SeedProduct[],
}




export const initialData: SeedData = {
    products: [
        {
            description: "Minim deserunt labore velit labore voluptate elit enim do excepteur magna tempor labore ea incididunt. Do in voluptate qui excepteur nisi reprehenderit laboris ex. Sint irure cillum eiusmod anim ut irure ipsum cillum nisi voluptate enim aliqua. In commodo aute enim reprehenderit aliquip veniam est minim. Ullamco sunt non ut et incididunt. Cupidatat eiusmod pariatur commodo consectetur nulla Lorem ullamco veniam irure consequat. Amet mollit labore cillum consectetur quis.",
            images: [
                'camarones-2.jpg',
                'camarones-chipotle.jpg',
            ],
            inStock: 7,
            price: 19,
            sizes: ['S','M','L',],
            slug: "tostada",
            type: 'fish',
            tags: ['sweatshirt'],
            title: "jarocho",
            gender: 'specialities'
        },
        {
            description: "Ipsum qui dolore non elit ad proident incididunt ad commodo. Nisi amet tempor esse in mollit consequat quis sit. Cupidatat do Lorem qui voluptate exercitation ad dolor duis ex adipisicing. Nulla nostrud aliquip nisi anim. Veniam ea ipsum eiusmod deserunt nulla est irure reprehenderit ea. Consectetur enim aliquip ea consectetur.",
            images: [
                'camarones-2.jpg',
                'camarones-chipotle.jpg',
            ],
            inStock: 7,
            price: 25,
            sizes: ['S','M','L',],
            slug: "ceviche_2",
            type: 'octopus',
            tags: ['sweatshirt'],
            title: "cocktail",
            gender: 'cocktail'
        },
        {
            description: "Quis consequat aute duis reprehenderit et Lorem cupidatat ut dolore do irure esse. Do consectetur sunt eu labore dolore. Magna ea proident do qui et nostrud elit aliquip.",
            images: [
                'camarones-2.jpg',
                'camarones-chipotle.jpg',
            ],
            inStock: 7,
            price: 15,
            sizes: ['S','M','L',],
            slug: "ceviche_1",
            type: 'shrimp',
            tags: ['sweatshirt'],
            title: "ceviche de camaron",
            gender: 'ceviche'
        },
        {
            description: "Quis consequat aute duis reprehenderit et Lorem cupidatat ut dolore do irure esse. Do consectetur sunt eu labore dolore. Magna ea proident do qui et nostrud elit aliquip.",
            images: [
                'camarones-2.jpg',
                'camarones-chipotle.jpg',
            ],
            inStock: 24,
            price: 11,
            sizes: ['S','M','L',],
            slug: "kid_quesadilla",
            type: 'appetizers',
            tags: ['sweatshirt'],
            title: "quesadilla",
            gender: 'kid'
        },
        {
            description: "Quis consequat aute duis reprehenderit et Lorem cupidatat ut dolore do irure esse. Do consectetur sunt eu labore dolore. Magna ea proident do qui et nostrud elit aliquip.",
            images: [
                'camarones-2.jpg',
                'camarones-chipotle.jpg',
            ],
            inStock: 24,
            price: 18,
            sizes: ['S','M','L',],
            slug: "soup_shrimp",
            type: 'seafood',
            tags: ['sweatshirt'],
            title: "caldo",
            gender: 'soup'
        },
        {
            description: "Quis consequat aute duis reprehenderit et Lorem cupidatat ut dolore do irure esse. Do consectetur sunt eu labore dolore. Magna ea proident do qui et nostrud elit aliquip.",
            images: [
                'camarones-2.jpg',
                'camarones-chipotle.jpg',
            ],
            inStock: 24,
            price: 8,
            sizes: ['S','M','L',],
            slug: "flan",
            type: 'side',
            tags: ['sweatshirt'],
            title: "flan",
            gender: 'sides'
        },
        {
            description: "Quis consequat aute duis reprehenderit et Lorem cupidatat ut dolore do irure esse. Do consectetur sunt eu labore dolore. Magna ea proident do qui et nostrud elit aliquip.",
            images: [
                'camarones-2.jpg',
                'camarones-chipotle.jpg',
            ],
            inStock: 24,
            price: 9,
            sizes: ['S','M','L',],
            slug: "guacamole",
            type: 'appetizers',
            tags: ['sweatshirt'],
            title: "guacamole",
            gender: 'botanas'
        },
       
     
        
    ]
}