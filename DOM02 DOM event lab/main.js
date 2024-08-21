const h1 = document.querySelector('#title');
const btn1 = document.querySelector('#btn1');
const main  = document.querySelector('#main')
/*Add onclick @ html*/
// function hdlclick(){
//     alert('999');
// }

// btn1.onclick = () =>{alert(222)}
// setTimeout(() => { btn1.onclick = null;},2000);

// const hdlclick = ()=>{
//     h1.style.color = 'red'
// }
// // btn1.addEventListener('click', ()=>{alert("666")})  //ผูก handler ได้มากกว่า 1 อัน
// btn1.addEventListener('click', hdlclick)
// setTimeout(()=>{btn1.removeEventListener('click',hdlclick)}, 3000)
// console.log(hdlclick);


const hdlclick = (evt,color)=>{
    console.log(evt.target)
    evt.target.style.background = 'skyblue'
    h1.style.color = color
}
// btn1.addEventListener('click', ()=>{alert("666")})  //ผูก handler ได้มากกว่า 1 อัน
main.addEventListener('click',(evt)=> hdlclick(evt,'green'))
