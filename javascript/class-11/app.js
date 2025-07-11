// var copmanies = [
//   {
//     name: "samsung",
//     companyType: [
//       {
//         name: "Sm motors",
//         // varrients: ["", ""],
//         colors: ["blue", "black"],
//         Modals: [
//           {
//             varrient: "",
//             modal: "",
//           },
//         ],
//       },
//       {},
//     ],
//   },
// ];

// // console.log(copmanies[0].companyType[0].name);
// copmanies[0].companyType[0].name = ["Ahmer motors", "Saylani motors"]
// console.log(copmanies[0].companyType[0].name);
// console.log(copmanies[0].companyType[0]);
// console.log("name" in copmanies[0])
// console.log(fname, 26);
// hoisting
// var fname ;
// let fname ;

// var userName ;

var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  transfer: 1000,
  pages: 10,
  discountMonths: [8, 7],
};

function calcAnnual() {
  var bestPrice = plan1.price;
  // 3.99
  var currDate = new Date();
  // 7-09-2025 Wed 11:20 AM
  var thisMo = currDate.getMonth();
  // 6 == 'july'
  for (var i = 0; i < plan1.discountMonths.length; i++) {
    if (plan1.discountMonths[i] === thisMo) {
      bestPrice = plan1.price * 0.8;
      break;
    }
  }
  //   const bestValue = bestPrice * 12;
  return bestPrice * 12;
}

console.log(calcAnnual())
// console.log(bestValue);
// var currentDate = new Date();
// console.log(currentDate.getMonth());
