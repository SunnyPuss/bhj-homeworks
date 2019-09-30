const productDec = document.querySelectorAll(`.product__quantity-control_dec`);
const productInc = document.querySelectorAll(`.product__quantity-control_inc`);
const productQuantityValue = document.querySelectorAll(`.product__quantity-value`);
const productAdd = document.querySelectorAll(`.product__add`);
const cartProducts = document.querySelector(`.cart__products`);

const productDecArr = Array.from(productDec);
const productIncArr = Array.from(productInc);
const productQuantityValueArr = Array.from(productQuantityValue);
const productAddArr = Array.from(productAdd);

productDecArr.forEach((el) => {el.addEventListener(`click`, () => {
    el.nextElementSibling.innerHTML--;
    if( el.nextElementSibling.innerHTML < 1) {
        el.nextElementSibling.innerHTML = 1;
    }
})})

productIncArr.forEach((el) => {el.addEventListener(`click`, () => {
    el.previousElementSibling.innerHTML++;
})})

function addMintai() {
    cartProducts.insertAdjacentHTML("afterbegin" ,`
            <div class="cart__product" data-id="1">
                <img class="cart__product-image" src="https://cdn.pizket.com/images/photo/256x256/0d6b7f6630234586d3e8c7d43859b74f.jpg?1554367129">
                <div class="cart__product-count">${productQuantityValueArr[0].innerHTML}</div>
            </div>
            `
            )
} 

function addAdultCook () {
    cartProducts.insertAdjacentHTML("beforeend" ,`
            <div class="cart__product" data-id="2">
                <img class="cart__product-image" src="https://cs8.pikabu.ru/post_img/2017/09/21/6/150598626812465714.jpg">
                <div class="cart__product-count">${productQuantityValueArr[1].innerHTML}</div>
            </div>
            `
            )
}

productAddArr.forEach((el) => {el.addEventListener(`click`, function() {
    const cartProduct = document.querySelectorAll(`.cart__product`);
    const cartCount = document.querySelectorAll(`.cart__product-count`);


    if (cartProduct.length == 0) {
        if (el.closest(`.product`).dataset.id == 1) {
            addMintai();
        } else if (el.closest(`.product`).dataset.id == 2) {
            addAdultCook();
        }
    } else if (cartProduct.length > 0) {
        if (el.closest(`.product`).dataset.id == 1 && el.closest(`.product`).dataset.id == cartProduct.item(0).dataset.id) {
            console.log(cartCount.item(0).innerHTML);
            console.log(productQuantityValueArr[0].innerHTML);
            cartCount.item(0).innerHTML += productQuantityValueArr[0].innerHTML;
        }
    }
    

    



})})

