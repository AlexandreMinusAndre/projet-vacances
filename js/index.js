document.onclick = function(e) {
    const r = document.querySelector('.connection-overlay .box');
    if (!r.contains(e.target) && !menuBtn[1].contains(e.target)){
        connectionOverlay.classList.remove('activef');
    } else {
        return;
    }
}