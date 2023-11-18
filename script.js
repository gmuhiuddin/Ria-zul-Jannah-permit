let barcode = document.getElementById('barcode');
let permitContainer = document.getElementsByClassName('permit-container');
let formContainer = document.getElementsByClassName('form-container');
let permitForm = document.getElementById('permit-form');
let userGender = document.getElementsByClassName('user-gender');
let usertimings = document.getElementsByClassName('user-timings');
let menTimingContainer = document.getElementById('men-timing-container');
let womenTimingContainer = document.getElementById('women-timing-container');
let userName = document.getElementById('user-name');
let userDate = document.getElementById('user-date');
let names = document.getElementsByClassName('name');
let enDate = document.getElementById('en-date');
let islamicDate = document.getElementById('islamic-date-txt');
let time = document.getElementById('time');


setInterval(() => {
    barcode.style.border = '5px solid transparent';
}, 700)

setInterval(() => {
    barcode.style.border = '5px solid rgb(203, 151, 77)';
}, 1400)

menTimingContainer.style.display = 'block';
womenTimingContainer.style.display = 'none';
permitContainer[0].style.display = 'none';


for(let i = 0; i < userGender.length; i++){
userGender[i].addEventListener('click' , function () {
    if(this.value == 'men'){
        menTimingContainer.style.display = 'block'
        womenTimingContainer.style.display = 'none'
    }else{
        menTimingContainer.style.display = 'none'
        womenTimingContainer.style.display = 'block'
    }
})
}


permitForm.addEventListener('submit', function (a) {
    a.preventDefault()
    formContainer[0].style.display = 'none';
    permitContainer[0].style.display = 'block';

    for (let index = 0; index < names.length; index++) {
        names[index].innerText = userName.value;
    }

    let date = new Date(userDate.value)
    console.log(date) 

for(let i =0;i < usertimings.length;i++){
    usertimings[i].addEventListener('change',function () {
        
    this.value
    })
} 

})




    //         fetch(
    //   `https://api.aladhan.com/v1/gToH/${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}?`
    // )
    //   .then(response => response.json())
    //   .then(data => console.log(data)).catch(error => alert(error))

