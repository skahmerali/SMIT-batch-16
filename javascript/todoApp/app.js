function addTodo() {
    let todoText = document.getElementById('text').value;
    let result = document.getElementById('result');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let text = document.createTextNode(todoText);
    let button = document.createElement('button');
    let buttonText = document.createTextNode('Edit');
    button.addEventListener('click', (event) => {
        console.log('hello world', event);
        let updateText = prompt("update your text");


    })
    li.appendChild(text);
    button.appendChild(buttonText);
    ul.append(li, button);
    result.appendChild(ul);

}