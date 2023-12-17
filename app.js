// const 
// let 

// const a = 'Noi dung A';
let b = 'Noi dung B';
b = "Noi dung B2"
console.log(b);

// ================ TOÁN TỬ ================= 
// +
// =
// -
// *
// /
// console.log("Tổng cua 2 so a va b = ", 2 + 3);
// console.log("Hiệu cua 2 so a va b = ", 2 - 3);
// console.log("Tích cua 2 so a va b = ", 2 * 3);
// console.log("Thương cua 2 so a va b = ", 2 / 3);

// Object = {
//     key : value,
//     ...
// }
const person = {
    firstName:"John",
    lastName:"Doe"
    };
console.log('Object ', person)
console.log('Object name: ', person.firstName)
console.log('Object name: ', person.lastName)

// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log("🚀 ~ file: app.js:34 ~ cars:", cars[1])
let products = [
    {
        title: "lofi",
        price: 999,
        // key: value 
    },
    {
        title: "lofi2",
        price: 888,
        // key: value 
    },
    {
        title: "lofi3",
        price: 777,
        // key: value 
    },
]
console.log("🚀 ~ file: app.js:52 ~ products:", products.length)
console.log("🚀 ~ file: app.js:52 ~ products:", products[0])
console.log("🚀 ~ file: app.js:52 ~ products:", products[1])
console.log("🚀 ~ file: app.js:52 ~ products:", products[2])

for(let x = 0; x < products.length ; x = x + 1) {
    console.log(x) // là chỉ số index
    console.log("item ", products[x]); 
}

// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
//   }
