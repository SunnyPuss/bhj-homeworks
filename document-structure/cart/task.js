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

productAddArr.forEach((el) => {el.addEventListener(`click`, function() {
    const productID = el.closest(`.product`).dataset.id;
    const cartProduct = document.querySelectorAll(`.cart__product`);
    const cartProductArr = Array.from(cartProduct);
    const productImageSRC = el.closest(`.product`).querySelector(`img`).src;
    const productValue = el.closest(`.product`).querySelector(`.product__quantity-value`);

    cartProductArr.find(elem => productID == elem.dataset.id);
    if (cartProductArr.find(elem => productID == elem.dataset.id) == undefined) {

        cartProducts.insertAdjacentHTML("beforeend" ,`
        <div class="cart__product" data-id="${productID}">
            <img class="cart__product-image" src ="${productImageSRC}">
            <div class="cart__product-count">${productValue.innerHTML}</div>
        </div>
        `)
    } else {
        addedElement = cartProductArr.find(elem => productID == elem.dataset.id);
        addedValue = addedElement.lastElementChild;
        addedValue.innerHTML = +addedValue.innerHTML + +productValue.innerHTML;
    }
    
})})

