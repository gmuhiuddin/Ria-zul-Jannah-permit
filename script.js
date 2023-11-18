let barcode = document.getElementById('barcode');
let permitContainer = document.getElementsByClassName('permit-container');
let formContainer = document.getElementsByClassName('form-container');
let permitForm = document.getElementById('permit-form');
let userGender = document.getElementsByClassName('user-gender');

setInterval(() => {
    barcode.style.border = '5px solid transparent';
}, 700)

setInterval(() => {
    barcode.style.border = '5px solid rgb(203, 151, 77)';
}, 1400)


permitContainer[0].style.display = 'none';

for(let i = 0; i < userGender.length; i++){
userGender[i].addEventListener('click' , function () {
    console.log(this.value)
})
}
 
    //         fetch(
    //   `https://api.aladhan.com/v1/gToH/${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}?`
    // )
    //   .then(response => response.json())
    //   .then(data => console.log(data)).catch(error => alert(error))