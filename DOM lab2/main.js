const root = document.querySelector('#root')
let unOrderList = document.createElement("ul")
root.append(unOrderList)
let list = document.createElement('li')
let newlist;
while(true)
{
    newlist = prompt("Enter new list");
    console.log(newlist)
    if(newlist=="" || newlist==0)
        {break;}
    let templist = list.cloneNode(true);
    templist.textContent = newlist;
    unOrderList.prepend(templist);
    
}
console.log(root);
// console.log(document.getElementsByTagName('body'));