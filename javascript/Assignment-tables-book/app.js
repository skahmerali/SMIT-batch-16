// let max = +prompt("Enter your desire number for max lentgh of table!");
// for (let i = 1; max <= ; i++) {
//     document.write("Multiplication table of" + max + "<br />");
//     for (let j = 1; j <= 10; j++) {
//         document.write(i + " x " + j + " = " + i*j+ "<br />");
//     }
// }

let max = +prompt("Enter your desire number for max lentgh of table!");
for (let i = max; i >= 1; i--) {
    document.write("Multiplication table of " + i + "<br />");
    for (let j = 1; j <= 10; j++) {
        document.write(i + " x " + j + " = " + i*j+ "<br />");
    }
};

