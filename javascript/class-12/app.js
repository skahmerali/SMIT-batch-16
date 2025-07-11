// var plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
//   discountMonths: [8, 7],
// };

// function calcAnnual(e) {
//   console.log(e, "<=== value");
//   var bestPrice = plan1.price;
//   // 3.99
//   var currDate = new Date();
//   // 7-09-2025 Wed 11:20 AM
//   var thisMo = currDate.getMonth();
//   // 6 == 'july'
//   for (var i = 0; i < plan1.discountMonths.length; i++) {
//     if (plan1.discountMonths[i] === thisMo) {
//       bestPrice = plan1.price * e;
//       break;
//     }
//   }
//   //   const bestValue = bestPrice * 12;
//   return bestPrice * 12;
// }
// // console.log(e)

// console.log(calcAnnual(0.8));
// console.log(bestValue);
// var currentDate = new Date();
// console.log(currentDate.getMonth());

// var plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
//   discountMonths: [6, 7],
//   calcAnnual: function (percentIfDisc) {
//     var bestPrice = plan1.price;
//     var currDate = new Date();
//     var thisMo = currDate.getMonth();
//     for (var i = 0; i < plan1.discountMonths.length; i++) {
//       if (plan1.discountMonths[i] === thisMo) {
//         bestPrice = plan1.price * percentIfDisc;
//         break;
//       }
//     }
//     return bestPrice * 12;
//   },

// };
// // plan1.calcAnnual(0.8)

// console.log(plan1.calcAnnual(0.8))

// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7],
//     calcAnnual: function (percentIfDisc) {
//         var bestPrice = this.price;
//         var currDate = new Date();
//         var thisMo = currDate.getMonth();
//         for (var i = 0; i < this.discountMonths.length; i++) {
//             if (this.discountMonths[i] === thisMo) {
//                 bestPrice = this.price * percentIfDisc;
//                 break;
//             }
//         }
//         return bestPrice * 12;
//     },

// };
// console.log(plan1.calcAnnual(0.8))

function Plan(name, price, space, transfer, pages) {
  this.name = name;
  this.price = price;
  this.space = space;
  this.transfer = transfer;
  this.pages = pages;

  this.calcAnnual = function (percentIfDisc) {
    var bestPrice = this.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < this.discountMonths.length; i++) {
      if (this.discountMonths[i] === thisMo) {
        bestPrice = this.price * percentIfDisc;
        break;
      }
    }
    return bestPrice * 12;
  };
}

// var plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
//   discountMonths: [8, 7],
// };

var Plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
var Plan2 = new Plan("Professional", 3.99, 100, 2000, 20);
