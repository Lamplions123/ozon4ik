let thumbnails = 19
let products = []

generateProducts(thumbnails + 1)

function generateProducts(number) {
    for (let i = 1; i < number ; i++) {
        console.log(i)
        let price = getRandomArbitrary(10, 100)
        let oldPrice = getRandomArbitrary(price + 10, price + 100)
        let discount = getRandomArbitrary(0, 1)
        let rating = getRandomArbitrary(1, 5, 1)
        let reviews = getRandomArbitrary(1, 4000)
        let left = getRandomArbitrary(1, 999)

        products.push({
            price: price,
            oldPrice: oldPrice,
            discount: discount,
            rating: rating,
            reviews: reviews,
            left: left,
            thumbnail: `imgs/thumbnails/${i}.webp`
        })
    }
}

function getPercentDiff(newNumber, oldNumber) {
    return Number(((newNumber - oldNumber) / oldNumber * 100).toFixed())
}

function getRandomDay() {
    let random = getRandomArbitrary(0, 15)

    if (random == 0) {
        return "Сегодня"
    }
    else if (random == 1) {
        return "Завтра"
    }
    else if (random == 2) {
        return "Послезавтра"
    }
    else {
        let date = new Date()

        date.setDate(date.getDate() + random)

        let day = date.getDate()
        let month = date.toLocaleString("ru", { month: "long" })

        return `${day} ${month}`
    }
}

function getRandomArbitrary(min, max, numbersAfterDot) {
    return Number((Math.random() * (max - min) + min).toFixed(numbersAfterDot))
}

for (let product of products) {
    let appendList = []

    let productDiv = document.createElement("div")
    productDiv.className = "product"

    let thumbnailDiv = document.createElement("div")
    thumbnailDiv.className = "thumbnail"
    thumbnailDiv.style.backgroundImage = `url(${product.thumbnail})`
    appendList.push(thumbnailDiv)

    let priceSpan = document.createElement("span")
    priceSpan.className = "price"
    priceSpan.textContent = `$${product.price}`
    appendList.push(priceSpan)

    if (product.discount) {
        let oldPriceSpan = document.createElement("span")
        oldPriceSpan.className = "old-price"
        oldPriceSpan.textContent = `$${product.oldPrice}`
        appendList.push(oldPriceSpan)

        let discount = getPercentDiff(product.price, product.oldPrice)

        let discountSpan = document.createElement("span")
        discountSpan.className = "discount"
        discountSpan.textContent = discount + "%"
        appendList.push(discountSpan)

        if (discount <= -50) {
            priceSpan.style.color = "mediumvioletred"
        }
    }

    let leftP = document.createElement("p");
    leftP.className = "left"
    leftP.textContent = `${product.left}шт осталось`
    appendList.push(leftP)

    let ratingSpan = document.createElement("span")
    ratingSpan.className = "rating"
    ratingSpan.textContent = product.rating
    appendList.push(ratingSpan)

    let reviewsSpan = document.createElement("span")
    reviewsSpan.className = "reviews"
    reviewsSpan.textContent = `${product.reviews} отзывов`
    appendList.push(reviewsSpan)

    let buyDiv = document.createElement("div")
    buyDiv.className = "buy-div"
    appendList.push(buyDiv)

    let buyButton = document.createElement("button")
    buyButton.className = "general-color-button"
    buyButton.textContent = getRandomDay()


    for (let item of appendList) {
        productDiv.append(item)
    }

    buyDiv.append(buyButton)
    document.getElementById("feed").append(productDiv);
}