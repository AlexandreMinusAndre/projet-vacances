const menuBtn = document.querySelectorAll('nav button');
const connectionOverlay = document.querySelector('.connection-overlay');
const form = document.querySelector('.box form');
const mobileBtn = document.querySelector('.mobile-btn');
const mobileBtnClose = document.querySelector('.close-btn');
const accueilBtn = Array.from(document.getElementsByClassName('default'));

mobileBtn.addEventListener('click', toggle);

function toggle(){
    const ov = document.querySelector('.ov-mob');
    const boxOv = document.querySelector('.mobile-menu');
    ov.classList.toggle('active');
    boxOv.classList.toggle('mobilenav-active');
}

mobileBtnClose.addEventListener('click', toggle);

accueilBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = 'index.html';
    })
})

const input = document.querySelector('input')

form.onsubmit = (e) => {
  e.preventDefault()
  if (!input.value) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Vous ne pouvez pas vous connecter !'
      })
  }
}



        function openTicket(){
            document.getElementById("hide").style.display = "flex";
        }
        function closeTicket(){
            document.getElementById("hide").style.display = "none";
            // Swal.fire(
            //     'Demande de parrainage envoyée !',
            //     'Vous allez recevoir un mail de confirmation de votre parrainage.',
            //     'success'
            // )
        }
