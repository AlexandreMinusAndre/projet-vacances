import axios from 'axios';

const form = document.querySelector('form');
const token = localStorage.getItem('jwt');




const reservation = () => {

    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const centreEquestre = document.getElementById('centreEquestre').checked
        const golf = document.getElementById('golf').checked
        const jardin = document.getElementById('jardin').checked
        const piscine = document.getElementById('piscine').checked
        const tennis = document.getElementById('tennis').checked
        const equipementDeSportHiver = document.getElementById('equipementDeSportHiver').checked
        const jacuzzi = document.getElementById('jacuzzi').checked
        const parcDeJeux = document.getElementById('parcDeJeux').checked
        const spa = document.getElementById('spa').checked
        const bateauAMoteur = document.getElementById('bateauAMoteur').checked
        const bateauAVoile = document.getElementById('bateauAVoile').checked
        const equipementDePlongee = document.getElementById('equipementDePlongee').checked
        const pisteDeBobsleigh = document.getElementById('pisteDeBobsleigh').checked
        const patinoire = document.getElementById('patinoire').checked

        const headers = {
            headers: {
                'Authorization': `bearer ${token}`
            }
        };

        
        const {data}= await axios.get(`http://localhost:1337/api/catalogues?filters[centre_equestre][$eq]=${centreEquestre}&filters[golf][$eq]=${golf}&filters[jardin][$eq]=${jardin}&filters[piscine][$eq]=${piscine}&filters[tennis][$eq]=${tennis}&filters[equipement_de_sport_dhiver][$eq]=${equipementDeSportHiver}&filters[jacuzzi][$eq]=${jacuzzi}&filters[parc_de_jeux][$eq]=${parcDeJeux}&filters[spa][$eq]=${spa}&filters[bateau_a_moteur][$eq]=${bateauAMoteur}&filters[bateau_a_voile][$eq]=${bateauAVoile}&filters[equipement_de_plongee][$eq]=${equipementDePlongee}&filters[piste_de_bobsleigh][$eq]=${pisteDeBobsleigh}&filters[patinoire][$eq]=${patinoire}`,headers);

        console.log(data);
    })
}

reservation();