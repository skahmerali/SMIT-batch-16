var textPara = document.getElementById('container').childNodes[1];


let para1 = document.createElement("p");
// "<p>bye bye world </p>"
let textNode = document.createTextNode('bye bye world');
para1.appendChild(textNode);
// // var textPara = document.childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[0];

console.log(textPara);
console.log(para1);
textPara.appendChild(para1);

// let container = document.getElementById('container');
// container.innerText = para1;
