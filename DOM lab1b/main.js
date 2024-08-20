const ul = document.querySelector("ul")
console.log(ul.children);
// console.log(ul.children.outerHTML);
console.log(ul.firstElementChild.outerHTML)
console.log(ul.lastElementChild.outerHTML)
console.log(ul.previousElementSibling.outerHTML)
console.log(ul.parentElement.outerHTML)
console.log(ul.parentElement.previousElementSibling.outerHTML)
console.log(ul.parentElement.previousElementSibling.children)
console.log(ul.parentElement.parentElement.outerHTML)