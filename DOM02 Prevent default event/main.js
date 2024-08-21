const a = document.querySelector('.container a')
function hdlClick(evt) {
    evt.preventDefault()
    console.log(evt.target.outerHTML)
    alert(999)
    location.assign(evt.target.href)
}

a.addEventListener('click', hdlClick)

const form = document.querySelector('form')
form.addEventListener('submit', hdlSubmit)

function hdlSubmit(e) {
  e.preventDefault()
  alert('check your input')
}
