const user = document.querySelector('.user');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelectorAll('nav button');

menuBtn.forEach(el => {
    el.addEventListener('click', () => {
        if (el === menuBtn[0]){
            window.location.href='index.html';
        } else if (el === menuBtn[1]){
            
        }
    })
})