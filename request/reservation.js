import axios from 'axios';

const token = localStorage.getItem('jwt')
const form = document.querySelector('form');
const div = document.querySelector('div');

const reservation = () => {

    const headers = {
        headers: {
            'Authorization': `bearer ${token}`
        }
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nom = document.getElementById('nom').value;
        const secteurGeographique = document.getElementById('secteurGeographique').value;

        const { data } = await axios.get(`http://localhost:1337/api/catalogues?filters[nom][$containsi]=${nom}&filters[secteur][$containsi]=${secteurGeographique}`, headers);

            const results = data.data

            results.forEach(e => {

                const li = document.createElement('li');
                div.appendChild(li);

                li.innerHTML= `
                ${JSON.stringify(e.attributes.nom)}<br>
                ${JSON.stringify(e.attributes.secteur)}<br>
                ${JSON.stringify(e.attributes.description)}<br>
                Prix basse saison : ${JSON.stringify(e.attributes.basse_saison)} €<br>
                Prix moyenne saison : ${JSON.stringify(e.attributes.moyenne_saison)} €<br>
                Prix haute saison : ${JSON.stringify(e.attributes.haute_saison)} €<br>
                Chef cuisine: ${JSON.stringify(e.attributes.chef_cuisine)}<br>
                Equipements :<br>
                ${JSON.stringify(e.attributes.equipement)}<br>
                ID : ${JSON.stringify(e.id)}
                <button type="submit" id="btn" value="test">Réserver</button>`

                const btn = document.getElementById('btn');

                const id = JSON.stringify(e.id);
                

            btn.addEventListener('click', async (e) => {
                e.preventDefault();
                console.log(id);
                let one = 'http://localhost:1337/api/users/me'
                
                const requestOne = await axios.get(one, {
                    headers: {
                        'Authorization': `bearer ${token}`
                    }
                })

                let two = `http://localhost:1337/api/catalogues?filters[nom][$containsi]=${nom}&filters[secteur][$containsi]=${secteurGeographique}`

                const requestTwo = await axios.get(two, headers);

                await axios
                .all([requestOne, requestTwo])
                .then(

                    axios.spread((...responses) => {
                    const responseOne = responses;
                    const responseTwo = responses;
                
                    // use/access the results
                      console.log(responseOne, responseTwo);
                    })
                  )
            })
            });
    })
}

reservation();