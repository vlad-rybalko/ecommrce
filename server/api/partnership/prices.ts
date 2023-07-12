export default defineEventHandler((event) => {
    return [
        {
            from: 0,
            to: 29,
            price: 5,
        },
        {
            from: 30,
            to: 99,
            price: 6,
        },
        {
            from: 100,
            to: 179,
            price: 7,
        },
        {
            from: 180,
            to: 249,
            price: 8,
        },
        {
            from: 250,
            to: 999999,
            price: 10,
        },
    ];
});
