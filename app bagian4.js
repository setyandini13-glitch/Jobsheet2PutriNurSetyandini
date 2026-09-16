const tags = [
    ["computer", "office"],
    ["electronics"],
    ["gaming", "computer"]
];

//Latihan 4.1
const allTags = products.flatMap(product => product.tags);
console.log(allTags);

const products = [
  {
    title: "Laptop",
    reviews: [
      { comment: "Bagus dan awet" },
      { comment: "Performanya cepat" }
    ]
  },
  {
    title: "Phone",
    reviews: [
      { comment: "Kameranya oke" }
    ]
  },
  {
    title: "Headset",
    reviews: [
      { comment: "Suaranya jernih" },
      { comment: "Nyaman dipakai lama" },
      { comment: "Harga sesuai kualitas" }
    ]
  }
];

//Latihan 4.2
const allComments = products.flatMap(p => p.reviews.map(r => r.comment));
console.log(allComments);