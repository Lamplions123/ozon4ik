let products = [
    {
        name: "Ёлка",
        price: 27,
        oldPrice: 38, /* не обязательно */
        sale: true, /* true, false */
        rating: 43,
        reviews: 84527,
        thumbnail: "/imgs/thumbnails/1.webp",
        description: "фыр ква фар йцу явлшф"
    }
]

for (let product of products){
    console.log(product.name)
}