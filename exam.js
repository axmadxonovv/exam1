// 1-mashq
// Car sinfi
// class Car {
//   constructor(brand, model, speed = 0) {
//     this.brand = brand;
//     this.model = model;
//     this.speed = speed;
//   }
//   accelerate(value) {
//     this.speed += value;
//   }
//   brake(value) {
//     this.speed -= value;
//     if (this.speed < 0) {
//       this.speed = 0;
//     }
//   }
//   getInfo() {
//     return `${this.brand} ${this.model}, Tezlik: ${this.speed} km/soat.`;
//   }
// }
// const car1 = new Car("BMW", "X5", 80);
// const car2 = new Car("Tesla", "Model 3", 50);
// car1.accelerate(20);
// console.log(car1.getInfo());
// car2.brake(30);
// console.log(car2.getInfo());
// car2.brake(50);
// console.log(car2.getInfo());

// 2-mashq
// try {
//   let son = "son emas";
//   let number = Number(son);
//   if (isNaN(number)) {
//     throw new Error("Invalid input: Faqat son kiriting!");
//   }
//   console.log(`Siz kiritgan son: ${number}`);
// } catch (error) {
//   console.error(error.message);
// }

// 3-mashq
// let promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(console.log("Ma'lumot kelib tushdi."));
//   }, 2000);
// });

// const func = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Ma'lumot kelib tushdi"));
//     }, 2000);
//   });
// };
// func();

// 4-mashq
// document.querySelector("button").addEventListener("click", () => {
//   let func = async () => {
//     await fetch("https://jsonplaceholder.typicode.com/users")
//       .then((data) => {
//         return data.json();
//       })
//       .then((dat) => {
//         dat.forEach((val) => {
//           document.querySelector("#data1").innerHTML = val.name;
//           document.querySelector("#data2").innerHTML = val.phone;
//           document.querySelector("#data3").innerHTML = val.email;
//         });
//       });
//   };
//   func();
// });

//5-masala

// document.querySelector("#btn").addEventListener("click", () => {
//   console.log("Ism:", document.getElementById("nm").value);
//   console.log("Email:", document.getElementById("em").value);
//   console.log("Parol:", "Parol kitildi!");
//   event.preventDefault();
// });
