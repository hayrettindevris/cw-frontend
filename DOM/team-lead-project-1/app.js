let validateBtn = document.querySelector('.btn');
let inputText = document.querySelector('.input');
let mesaj = document.querySelector('.msj');
 

validateBtn.addEventListener('click', ()=>{
    textValue = inputText.value;
    if(textValue.length === 11 &&
        textValue[3] === '-' &&
        textValue[6] === '-' &&
        !isNaN(textValue.slice(0, 2)) &&
        !isNaN(textValue.slice(4, 5)) &&
        !isNaN(textValue.slice(7, 10))){
        mesaj.textContent= `Entered SSN (${textValue}) is Valid`;
        }
    else if(
        isNaN(textValue)){
            mesaj.textContent='Please Enter Number'
        }    
    else{
        mesaj.textContent='SSN must be 11 character (9 number and two hypens)'
    }
});





