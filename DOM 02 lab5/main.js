const btn = document.querySelector('button')
const h1 = document.querySelector('h1')

function toggleText(title)
{
    //toggle function
    if(title.innerHTML)
    { title.innerHTML="";
        btn.innerHTML="Show";
    }
    else
       
    {
        title.innerHTML="Codecamp Thailand";
        btn.innerHTML="Hide";
    }
    
}

btn.addEventListener('click',()=>toggleText(h1));