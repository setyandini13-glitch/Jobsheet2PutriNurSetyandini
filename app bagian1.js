//Latihan 1.1 (Menghitung Harga Setelah Diskon)
function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}
 
const hargaAkhir = calculateDiscountedPrice(1000000, 5);
console.log(hargaAkhir);


//Latihan 1.2
const cart = [
 { title: "Laptop", price: 1000, discountPercent: 10 },
 { title: "Mouse", price: 20, discountPercent: 5 },
 { title: "Keyboard", price: 50, discountPercent: 0 }
];

const result = [];
    for (const item of cartItems) {
        const discountedPrice = item.price - (item.price * item.discountPercent) / 100;
        result.push({ title: item.title, discountedPrice });
    }
    return result;

const discountedCart = calculateCartDiscounts(cart);
console.log(discountedCart);
