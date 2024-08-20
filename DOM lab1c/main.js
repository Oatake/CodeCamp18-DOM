let comments = [];
let tagNames = [];
let challenge = [];
const mainDOM = document.querySelector("main");
console.log(mainDOM.childNodes);
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
