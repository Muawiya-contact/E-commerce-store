const cart = [];
const totalElement = document.getElementById('total');
const cartElement = document.getElementById('cart');

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    cartElement.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        cartElement.appendChild(li);
        total += item.price;
    });

    totalElement.textContent = total.toFixed(2);
}
