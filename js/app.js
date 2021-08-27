// memory btn 
const memory8 = document.getElementById('memory8gb');
const memory16 = document.getElementById('memory16gb');
// storage btn
const ssd256 = document.getElementById('ssd256gb');
const ssd512 = document.getElementById('ssd512gb');
const ssd1tb = document.getElementById('ssd1000gb');
// delivery 
const freeDelivery = document.getElementById('dvoption1');
const deliveryWithCost = document.getElementById('dvoption2');


const memoryExtraCost = document.getElementById('extramemorycost');
const storageExtraCost = document.getElementById('extrastoragecost');

const deliveryCost = document.getElementById('delivery');

const totalPrice = document.getElementById('total-price');

const applyBtn = document.getElementById('apply');

const totalUsingCoupon = document.getElementById('discount-price');

const bestPrice = document.getElementById('priceBest');

const keys = document.getElementById('cupon');





function cartAmount(product, amount) {
    product.innerText = amount;
    sumAmout();
}



function sumAmout() {
    const price = parseFloat(bestPrice.innerText);
    const extraMemory = parseFloat(memoryExtraCost.innerText);
    const extraStorage = parseFloat(storageExtraCost.innerText);
    const extraDelivery = parseFloat(deliveryCost.innerText);

    const sum = price + extraMemory + extraStorage + extraDelivery;
    totalPrice.innerText = sum;
    totalUsingCoupon.innerText = sum;



}


applyBtn.addEventListener('click', function () {
    if (keys.value == "stevekaku") {
        const discount = parseInt(totalUsingCoupon.innerText) / 100 * 20;
        const discountTotal = parseInt(totalUsingCoupon.innerText) - discount;
        totalUsingCoupon.innerText = discountTotal;
        keys.value = '';
        ;
    }
    else (
        totalUsingCoupon.innerText = "Not valid coupon"
    )
});




// memory btn click 
memory8.addEventListener('click', function () {
    cartAmount(memoryExtraCost, 0);
});
memory16.addEventListener('click', function () {
    cartAmount(memoryExtraCost, 100);

});
// storage btn click 
ssd256.addEventListener('click', function () {
    cartAmount(storageExtraCost, 0);
});
ssd512.addEventListener('click', function () {
    cartAmount(storageExtraCost, 100);
});
ssd1tb.addEventListener('click', function () {
    cartAmount(storageExtraCost, 180);
});
// Delivery btn click 

freeDelivery.addEventListener('click', function () {
    cartAmount(deliveryCost, 0)
});

deliveryWithCost.addEventListener('click', function () {
    cartAmount(deliveryCost, 20);
});
