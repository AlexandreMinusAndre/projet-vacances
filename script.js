const menuBtn = document.querySelectorAll('nav button');
const connectionOverlay = document.querySelector('.connection-overlay');
const form = document.querySelector('.box form');

menuBtn.forEach(el => {
    const r = document.querySelector('.box');
    el.addEventListener('click', () => {
        if (el === menuBtn[0]){
            window.location.href='index.html'; 
        } else if (el === menuBtn[1]){
            r.classList.toggle('active-connection');
            if (!connectionOverlay.classList.contains('activef')){
                connectionOverlay.classList.add('activef');
            } else {
                connectionOverlay.classList.remove('activef');
            }
        }
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
