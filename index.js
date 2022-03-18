document.onclick = function(e) {
    const r = document.querySelector('.box');
    if (!r.contains(e.target) && !menuBtn[1].contains(e.target)){
        connectionOverlay.classList.remove('activef');
        r.classList.remove('active-connection');
    } else {
        return;
        
    }
}


