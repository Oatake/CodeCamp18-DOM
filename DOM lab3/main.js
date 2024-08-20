let allItems = document.querySelector('#all-items')
let site = [ "Wikipedia", "Youtube", "Facebook"]
let newlist = document.createElement('li');

function sortList()
{
    let sortSite = [];
    console.log(allItems.childNodes)
    allItems.childNodes.forEach((Element)=>{
        
        if(Element.nodeType===1){
            console.log(Element.textContent);
            sortSite.push(Element.textContent);
            setTimeout(() => {
                Element.remove()
            }, 1000);
            
        }
        
    })
    console.log(sortSite);
    sortSite.sort();
    console.log(sortSite);
    /*loop for add new list */
    for(let i=0 ; i<sortSite.length; i=i+1)
        {
            let list = newlist.cloneNode(true);
            list.textContent=sortSite[i];
            allItems.append(list);
            console.log(sortSite[i]);
        }
}
for(let i=0 ; i<site.length; i=i+1)
{
    let list = newlist.cloneNode(true);
    list.textContent=site[i];
    allItems.append(list);
    console.log(site[i]);
}
let btn = document.createElement('button')
btn.id = 'btn1';
btn.onclick = sortList;
allItems.after(btn);