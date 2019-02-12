// -------------------------- Home work - 6--------------------------
// -------------------------- Попов Евгений --------------------------


// task 1
// show alert  with button data message

let msgBtn = document.getElementById('btn-msg');
msgBtn.addEventListener('click', function (e) {
    alert(e.target.dataset.text);
});

//task 2
msgBtn.addEventListener('mouseover', function (e) {
    e.target.classList.add('redMsgBtn');
});

msgBtn.addEventListener('mouseleave', function (e) {
    e.target.classList.remove('redMsgBtn');
});

// task 3
let body = document.body;
body.addEventListener('click', function (e) {
    let tagElement = document.getElementById('tag');
    tagElement.insertAdjacentHTML('beforeend', "<br>Clicked: " + e.target.tagName);
});

// task 4
let btnGenerate = document.getElementById('btn-generate');
btnGenerate.addEventListener('click', function (e) {
    let ulElement = document.getElementsByTagName('ul')[0];
    let newLi = document.createElement('li');
    newLi.innerHTML = "Item " + (parseInt(ulElement.children.length) + 1);
    ulElement.appendChild(newLi);
});

