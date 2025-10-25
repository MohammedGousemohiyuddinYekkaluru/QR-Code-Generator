const input = document.querySelector('.input');
const button = document.querySelector('.generateBtn');
const img = document.querySelector('#qr-img');

function generate(){
    const inputValue = input.value.trim();

    if( !inputValue ){
        alert('Please Enter a valid URL');
        return;
    }else{
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    }
    input.value = '';
}

button.addEventListener('click', generate);

input.addEventListener('keypress',(e) =>{
    if(e.key === 'Enter') generate();
})