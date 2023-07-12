type product = {
    name: string;
    description: string;
    rating: number;
    comments: number;
    price: number;
    params: Array<string>;
    url: string;
    img: string;
};

export default defineEventHandler((event): Array<product> => {
    return [
        {
            name: 'Gorilla fem (Семена)',
            description: 'Страны Европы, Феминизированные, Фотопериодные, 31',
            rating: 5,
            comments: 3,
            price: 1421,
            params: ['Аутдор: 2600 г/куст'],
            url: '/sort/gorilla-fem',
            img: 'https://cdn.poryadok.ru/upload/iblock/02b/02b3e287a31730854cd18fa653a4361c.jpg',
        },
        {
            name: 'Grandmommy Purple fem (Семена)',
            description: 'Крым, Феминизированные, Фотопериодные, 29',
            rating: 5,
            comments: 3,
            price: 1421,
            params: ['Индор: 750 г/м', 'Аутдор: 2600 г/куст'],
            url: '/sort/astral-fem',
            img: 'https://cdn.poryadok.ru/upload/iblock/02b/02b3e287a31730854cd18fa653a4361c.jpg',
        },

        {
            name: 'Astral fem (Семена)',
            description: 'Страны Европы, Фотопериодные, Феминизированные, 20',
            rating: 5,
            comments: 3,
            price: 1421,
            params: ['Индор: 750 г/м', 'Аутдор: 2600 г/куст'],
            url: '/sort/gorilla-fem',
            img: 'https://cdn.poryadok.ru/upload/iblock/02b/02b3e287a31730854cd18fa653a4361c.jpg',
        },
        {
            name: 'Gorilla fem (Семена)',
            description: 'Страны Европы, Феминизированные, Фотопериодные, 31',
            rating: 5,
            comments: 3,
            price: 1421,
            params: ['Индор: 750 г/м'],
            url: '/sort/astral-fem',
            img: 'https://cdn.poryadok.ru/upload/iblock/02b/02b3e287a31730854cd18fa653a4361c.jpg',
        },
        {
            name: 'Gorilla fem (Семена)',
            description: 'Феминизированные, Фотопериодные, 31',
            rating: 5,
            comments: 3,
            price: 1421,
            params: ['Индор: 750 г/м', 'Аутдор: 2600 г/куст'],
            url: '/sort/gorilla-fem',
            img: 'https://cdn.poryadok.ru/upload/iblock/02b/02b3e287a31730854cd18fa653a4361c.jpg',
        },
        {
            name: 'Astral fem (Семена)',
            description: 'Страны Европы, Фотопериодные, Феминизированные, 20',
            rating: 5,
            comments: 3,
            price: 1421,
            params: ['Индор: 750 г/м', 'Аутдор: 2600 г/куст'],
            url: '/sort/astral-fem',
            img: 'https://cdn.poryadok.ru/upload/iblock/02b/02b3e287a31730854cd18fa653a4361c.jpg',
        },
        {
            name: 'Семена сорта Grandmommy Purple fem (Семена)',
            description: 'Крым, Феминизированные, Фотопериодные, 29',
            rating: 5,
            comments: 3,
            price: 1421,
            params: ['Индор: 750 г/м', 'Аутдор: 2600 г/куст'],
            url: '/sort/gorilla-fem',
            img: 'https://cdn.poryadok.ru/upload/iblock/02b/02b3e287a31730854cd18fa653a4361c.jpg',
        },
        {
            name: 'Gorilla fem (Семена)',
            description: 'Феминизированные, Фотопериодные, 31',
            rating: 5,
            comments: 3,
            price: 1421,
            params: ['Индор: 750 г/м', 'Аутдор: 2600 г/куст'],
            url: '/sort/astral-fem',
            img: 'https://cdn.poryadok.ru/upload/iblock/02b/02b3e287a31730854cd18fa653a4361c.jpg',
        },
    ];
});
