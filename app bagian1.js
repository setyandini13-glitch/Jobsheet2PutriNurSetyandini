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

function applyDiscounts(cart) {
 const result = [];
 for (const item of cart) {
    const discountedPrice = calculateDiscountedPrice(
        item.price,
        item.discountPercent
    );
    
    result.push({
        title: item.title,
        price: item.price,
        discountPercent: item.discountPercent,
        discountedPrice: discountedPrice
        });
    }

    return result;
}

console.log(applyDiscounts(cart));

