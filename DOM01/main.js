// const p1 = document.getElementById("param1");
// p1.style.color = "red";
// const p1 = document.querySelector(".container #param1");
// p1.style.color='red';
// const p1 = document.querySelector(".container > p:nth-child(3)");
// p1.style.color='red';

// const ctn = document.getElementsByClassName("container");        /*return as array*/
// console.log(ctn); 
// ctn[0].style.border = "4px solid blue"
// const ctn = document.querySelector(".container");                /*return as Dom*/
// console.log(ctn); 
// ctn.style.border = "4px solid blue";
// const ctn = document.querySelectorAll(".container")                 /*return as array*/
// console.log(ctn); 
// ctn[0].style.border = "4px solid blue";

// const allPara = document.getElementsByTagName('p');
// console.log(allPara)
// allPara[1].style.color = "deeppink";
// allPara[0].style.color = 'red';

// const allPara = document.querySelectorAll('p');
// console.log(allPara)
// allPara[0].style.color = 'violet';
// allPara[1].style.color = 'lime' ;

// const allP = document.querySelectorAll('.container p');
// console.log(allP)
// allP.forEach(el => {
//     el.style.color = 'red'
// })

// const list = document.getElementById("list");
// console.log(list.parentNode);
// console.log(list.previousElementSibling);
// console.log(list.nextElementSibling);
// console.log(list.firstChild.nextSibling);
// console.log(list.lastChild);
// console.log(list.childNodes[1])

const p1 = document.querySelector('#param1')
// p1.innerHTML ='DOM'
// p1.onclick = () => {
//     p1.innerHTML = 'DOM = Document Object <em>Model</em>';
//     let newText = prompt('New text : ') || p1.innerHTML;
//     p1.innerHTML += newText;
// }
// console.log(p1.innerHTML)
// console.log(p1.outerHTML)

/* Attribute session*/
// console.log(p1.attributes);
// p1.setAttribute('class', 'active');
// console.log(p1.outerHTML);
// console.log(p1.attributes);
// console.log(p1.getAttribute('id'));
// console.log(p1.getAttribute('class'));
// p1.removeAttribute('class');
// console.log(p1.getAttribute('class'));

const list = document.querySelector('#list');
const item = document.createElement('li');
console.log(item);
item.textContent = 'BYD';
item.setAttribute('class','active');
console.log(item.outerHTML);

// list.before(item);
// list.after(item);
// list.prepend(item);
list.append(item);

// list.lastElementChild.replaceWith(item);

// list.lastElementChild.remove();

const list2 = list.cloneNode(true)
document.body.append(list2)
console.log(list);