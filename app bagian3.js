const products = [
 {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
        { user: "A", rating: 5, comment: "Good product" },
        { user: "B", rating: 4, comment: "Worth it" }
    ]
 },
 {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
        { user: "C", rating: 4, comment: "Nice camera" },
        { user: "D", rating: 5, comment: "Fast" },
        { user: "E", rating: 3, comment: "Battery so-so" }
    ]
 }
];

const allTags = products.map(p => p.tags);
// console.log(allTags);

function findProductsByTag(products, tag){
    return products.filter(p => p.tags)
                    .map(p => ({
        title: p.title,
        tags: p.tags
    }));
}

// console.log (findProductsByTag(products, "electronics"));

const jumlahReview = products.map(p => ({
    id: p.id,
    title: p.title,
    jumlahReview: p.reviews.length
}));

// console.log(jumlahReview);

const ratinggg = products.map(p => p.reviews.filter(p => p.rating === 5));
// console.log(ratinggg);

const rataRata = products.map(products => {
    const total = products.reviews.reduce((a, b)=>a+b.rating,0);
    const rumus = products.reviews.length > 0 ? total / products.reviews.length : 0  ;
    return rumus;
});
//  console.log(rataRata);

const theMost = products.reduce((a,b)=>{
    if (b.reviews.length > a.reviews.length){
        return b;
    } else {
       return a;
    }
});
// console.log(theMost);

const allRatings = products.flatMap(p => p.reviews.map(r => r.rating));
console.log(allRatings);