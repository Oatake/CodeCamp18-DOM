let comments = [];
let tagNames = [];
let challenge = [];
let challenge1 = [];
const mainDOM = document.querySelector("main");
console.log(mainDOM.childNodes);
// function childSearch(element) {
//     element.childNodes.forEach(element => {
//     if (element.nodeType!=1)
//     {
//         return
//     }
//     if (element.childNodes.length<1)
//     {
//         challenge1.push(element);
//     }
//     else element.childNodes.forEach(element2=>{
//         childSearch(element2)
//     })   
//     })
// }
mainDOM.childNodes.forEach(element => {
    console.log(element.nodeType)
    if(element.nodeType === 8)
    {
        comments.push(element.textContent);
        
    }
    if(element.nodeType === 1)
    {
        console.log(element.tagName);
        tagNames.push(element.tagName);
        /*challenge session */
        challenge.push(element.tagName);
        console.log(element.childNodes);
        element.childNodes.forEach(element1 => {
            if(element1.nodeType === 1)
                challenge.push(element1.tagName);
        })
    }
    
});
console.log(comments)
console.log(tagNames)
console.log(challenge)
// childSearch(mainDOM);
// console.log(challenge1)
