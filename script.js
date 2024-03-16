let gio = document.getElementById('name')
let age = document.getElementsByClassName('input_age')[0]
let email = document.getElementsByClassName('input_email')[0]
 
let save = document.getElementById('save')
let clear = document.getElementsByClassName('btn_clear')[0]
let div = document.getElementsByClassName('result')
console.log(gio.value)

save.addEventListener('click', () => {
document.getElementById('result').innerText = gio.value    + age.value + email.value
}
)

localStorage.setItem('name', gio.value)
localStorage.setItem('input_age', age.value )
localStorage.setItem('input_email', email.value)