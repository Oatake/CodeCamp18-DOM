// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0

const counter = document.querySelector(".counter");
const btnInc = document.querySelector('.btn-inc'); 
const btnDec = document.querySelector('.btn-dec'); 
const btnClr = document.querySelector('.btn-clr');
const number = document.querySelector('.number');
function setZero()
{
  number.innerHTML = "0";
}
function adder()
{
  value = parseInt(number.innerHTML);
  console.log(value)
  number.innerHTML = value+1;
}
function subtrac()
{
  value = parseInt(number.innerHTML);
  console.log(value)
  if(value<=0){
    number.innerHTML=0;
    return
  }
  number.innerHTML = value - 1;
}
btnClr.addEventListener('click',setZero);
btnInc.addEventListener('click',adder);
btnDec.addEventListener('click', subtrac)