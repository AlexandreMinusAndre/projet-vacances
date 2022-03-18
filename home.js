const user = document.querySelector('.user');
const menu = document.querySelector('.menu');

user.addEventListener('click', () => {
    console.log('ok')
    if (!menu.classList.contains('active')){
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
})


// const reserverOverlay = document.querySelector('reservation-overlay');
//   document.onclick = function(e) {
//     const a = document.querySelector('.box');
//     if (!a.contains(e.target) && !menuBtn[1].contains(e.target)){
//         reserverOverlay.classList.remove('activef');
//         a.classList.remove('active-reserver');
//     } else {
//         return;
//     }
// }