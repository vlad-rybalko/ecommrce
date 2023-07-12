export default defineEventHandler((event) => {
    const slug = event.context.params.slug;

    const mockData = {
        'gorilla-fem': {
            name: 'Gorilla',
            img: 'https://cdn.poryadok.ru/upload/iblock/02b/02b3e287a31730854cd18fa653a4361c.jpg',
        },
        'astral-fem': {
            name: 'Семена сорта Purple (Seeds)',
            img: 'https://cdn.poryadok.ru/upload/iblock/02b/02b3e287a31730854cd18fa653a4361c.jpg',
        },
    };

    return mockData[slug];
});
