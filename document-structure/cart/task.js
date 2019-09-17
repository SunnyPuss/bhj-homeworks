const productDec = document.querySelectorAll(`.product__quantity-control_dec`);
const productInc = document.querySelectorAll(`.product__quantity-control_inc`);
const productCuantityValue = document.querySelectorAll(`.product__quantity-value`);
const productCuantityValueArr = Array.from(productCuantityValue);
const productDecArr = Array.from(productDec);
const productIncArr = Array.from(productInc);

productDecArr.forEach((el) => {el.addEventListener(`click`, () => {
    el.nextElementSibling.innerHTML--;
    if( el.nextElementSibling.innerHTML < 1) {
        el.nextElementSibling.innerHTML = 1;
    }
})})

productIncArr.forEach((el) => {el.addEventListener(`click`, () => {
    el.previousElementSibling.innerHTML++;
})})

