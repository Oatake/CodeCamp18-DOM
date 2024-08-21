const main = document.querySelector('main')
const ctn = document.querySelector('.container')
const h1 = document.querySelector('h1')
const btn1 = document.querySelector('#btn1')

btn1.addEventListener('click',e=> {
    e.stopPropagation();
    console.log(e.target.outerHTML)
})
ctn.addEventListener('click',e=>{
    console.log('container click')
    console.log(e.target.outerHTML)
    alert('888')
})




