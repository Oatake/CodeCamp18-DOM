const inp1 = document.querySelector('input')
const checkBtn = document.querySelector('button')
function getValue(e){
    e.preventDefault();
    let phoneNumber = inp1.value;
    let errMsg;
    console.log(!Number(phoneNumber))
    if(!phoneNumber)
    {
        console.log("Phone number is required")
        errMsg = "Phone number is required"
        
    }
    else if (!Number(phoneNumber))
    {
        console.log('Phone number is invalid')
        errMsg = 'Phone number is invalid'
    }
    else if (phoneNumber.length != 10)
    {
        console.log("invalid length")
        errMsg = "invalid length"
    }
    else{
        alert("your number is valid")
        errMsg = "your number is valid"
    }
    showErrMsg(errMsg);
}   
    
function showErrMsg(errMsg)
{
    document.querySelector('p').innerHTML=errMsg;
    document.querySelector('p').style.color='red';
    document.querySelector('p').style.opacity='1';
    setTimeout(()=>{document.querySelector('p').style.opacity='0'},2000);
}
checkBtn.addEventListener('click', getValue);
// or

// const form = document.querySelector('form')

// console.log(form[0].outerHTML)