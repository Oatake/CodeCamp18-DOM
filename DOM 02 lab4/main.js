const btn = document.querySelector('.btn')

// function dynamicBG1() {
//   // style property
//     setTimeout(()=>btn.style.backgroundColor="red", 3000);
//     setTimeout(()=>btn.style.removeProperty('background-color'), 6000);
// }

function dynamicBG2() {
  // classList
    setTimeout(()=>btn.classList.add('redBG'), 3000);
    setTimeout(()=>btn.classList.remove('redBG'), 6000);
}
// btn.onclick = dynamicBG1;
btn.onclick = dynamicBG2;
