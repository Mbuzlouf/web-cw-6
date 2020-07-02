// logger
function logger(array1) {
  for (let friend of array1) {
    console.log(friend);
  }
}
let friends = ["Abdulla", "Ebraheem", "Mazyad"];
logger(friends);
//
// hottestDays
function hottestDays(array2, number) {
  for (let array2 of TEMPs) {
    if (array2 > number) {
      console.log(array2);
    }
  }
}
let TEMPs = [55, 60, 34, 20, 100, -14, 14];

hottestDays(TEMPs, 30);
//

function getBookById(books, bookId) {
  for (let A3rf of books) {
    0;
    if (A3rf.Id == bookId) {
      console.log(A3rf.boook);
      break;
    } else {
      console.log("undefined");
    }
  }
}

let boooks = [
  { boook: "Arabic", Id: 1 },
  { boook: "English", Id: 2 },
  { boook: "MA A3rf", Id: 3 },
];

getBookById(boooks, 3);

// 2
let iteam = prompt("ما هي السلعة؟ - اكتب انتهيت عندما تنتهي");
let cart = [];

while (iteam != "انتهيت") {
  let quantity = prompt("ما هي الكمية التي تريدها؟");
  let price = prompt("كم سعر المنتج؟");
  cart.push({ iteam: iteam, price: price, quantity: quantity });
  iteam = prompt("ما هي السلعة؟ - اكتب انتهيت عندما تنتهي");
}
console.log("------------");
console.log("الفاتورة");
console.log("------------");
let total = 0;
for (let fatoora of cart) {
  console.log(
    fatoora.quantity + " " + fatoora.iteam + " " + fatoora.price + " KD"
  );
  total = total + fatoora.price * fatoora.quantity;
}

console.log("------------");
console.log("السعر الكلي : ", total);
//
