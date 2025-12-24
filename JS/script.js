let thumbnails = 19
let products = []

generateProducts(thumbnails + 1)

function generateProducts(number) {
    for (let i = 1; i < number ; i++) {
        let price = getRandomArbitrary(10, 100) /* функция для
        получения рандомного числа в диапозоне */
        let oldPrice = getRandomArbitrary(price + 10, price + 100)
        let discount = getRandomArbitrary(0, 1) /* 0 = false, 
        1 = true */
        let rating = getRandomArbitrary(1, 5, 1) /* 3 число - 
        сколько знаков после запятой */
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
        return "Сегодня" /* так как весь код в функции,
        а имя функции говорит, что  вызыватель что-то получит (get),
        то мы и возвращаем (return) ответ */
    }
    else if (random == 1) {
        return "Завтра"
    }
    else if (random == 2) {
        return "Послезавтра"
    }
    else {
        let date = new Date() /* получение текущего времени*/

        date.setDate(date.getDate() + random) /* добавление
        рандомного количество дней в переменную времени*/

        let day = date.getDate() 
        let month = date.toLocaleString("ru", { month: "long" }) /*
        получаем длинное имя месяца в формате "Декабрь", "Январь",
        'Май' вместо "Дек", "Янв", "Май" */

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
    buyButton.className = "color-button general"
    buyButton.textContent = getRandomDay()


    for (let item of appendList) {
        productDiv.append(item)
    }

    buyDiv.append(buyButton)
    document.getElementById("feed").append(productDiv);
}






function showOrHideLogin(){
    let element = document.querySelector(".login-fullscreen")
    element.style.visibility = element.style.visibility === 'visible' ? 'hidden' : 'visible'
}

function loginAlert(){
    alert("You must be logged in!")
}

document.querySelector(".close").addEventListener("click", showOrHideLogin)
document.querySelector(".login-footer").addEventListener("click", showOrHideLogin)
document.querySelector(".cart").addEventListener("click", loginAlert)
document.querySelector(".favourite").addEventListener("click", loginAlert)
document.querySelector(".orders").addEventListener("click", loginAlert)