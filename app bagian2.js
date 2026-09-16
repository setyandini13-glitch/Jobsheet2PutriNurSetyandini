const products = [
    { id: 1, title: "Laptop", price: 1500, category: "laptops", stock: 6 },
    { id: 2, title: "Headphones", price: 100, category: "audio", stock: 7 },
    { id: 3, title: "Smartphone", price: 800, category: "phones", stock: 10 },
    { id: 4, title: "Wireless Mouse", price: 50, category: "accessories", stock: 45 },
    { id: 5, title: "Mechanical Keyboard", price: 75, category: "accessories", stock: 25 },
    { id: 6, title: "Gaming Monitor", price: 400, category: "monitors", stock: 6 },
    { id: 7, title: "Smartwatch", price: 350, category: "wearables", stock: 15 },
    { id: 8, title: "Bluetooth Speaker", price: 90, category: "audio", stock: 25 },
    { id: 9, title: "RAM 16GB DDR4", price: 55, category: "gaming", stock: 35 },
    { id: 10, title: "Power Supply 650W", price: 80, category: "gaming", stock: 14 },
    { id: 11, title: "PC Case ATX", price: 90, category: "gaming", stock: 16 },
    { id: 12, title: "Ultrawide Monitor 34", price: 450, category: "monitors", stock: 6 },
    { id: 13, title: "Fitness Band", price: 40, category: "wearables", stock: 25 },
    { id: 14, title: "Noise Cancelling Earbuds", price: 130, category: "audio", stock: 15 },
    { id: 15, title: "Action Camera", price: 350, category: "accessories", stock: 7 },
    { id: 16, title: "External SSD 1TB", price: 110, category: "accessories", stock: 25 },
    { id: 17, title: "Tablet", price: 500, category: "phones", stock: 10 },
    { id: 18, title: "Webcam 1080p", price: 45, category: "accessories", stock: 18 },
    { id: 19, title: "USB-C Hub", price: 35, category: "accessories", stock: 40 },
    { id: 20, title: "Gaming Chair", price: 220, category: "gaming", stock: 7 },
    { id: 21, title: "Graphics Card RTX 4070", price: 650, category: "gaming", stock: 4 },
    { id: 22, title: "CPU Ryzen 7", price: 300, category: "gaming", stock: 9 },
    { id: 23, title: "Motherboard B550", price: 140, category: "gaming", stock: 11 },
    { id: 24, title: "Drone 4K", price: 799, category: "accessories", stock: 3 },
    { id: 25, title: "Portable Charger 20000mAh", price: 50, category: "accessories", stock: 60 },
    { id: 26, title: "Stylus Pen", price: 65, category: "accessories", stock: 22 },
    { id: 27, title: "E-Reader", price: 140, category: "phones", stock: 12 },
    { id: 28, title: "Desk Lamp LED", price: 30, category: "accessories", stock: 45 },
    { id: 29, title: "Microphone Condenser", price: 120, category: "audio", stock: 10 },
    { id: 30, title: "Gaming Chair", price: 300, category: "furniture", stock: 6 },
];

//Latihan 2.1
function findProductById(products, id){
    return products.find(product => product.id === id);
}
    console.log(findProductById(products, 5));

//Latihan 2.2
const stokbarangkurangdari10 = products.filter(product => product.stock < 10);

console.log("Produk dengan stok kurang dari 10: ");
console.log(stokbarangkurangdari10);

//Latihan 2.3
function updateStock(products, id, newStock) 
{ 
    return products.map(p => p.id === id ? { ...p, stock: newStock } : p ); 

}
console.log(updateStock(products, 21, 21))
