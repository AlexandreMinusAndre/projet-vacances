import axios from 'axios';

const loginRequest = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', async (e)=> {

        e.preventDefault()

        const { data } = await axios.post('http://localhost:1337/api/auth/local', {
            identifier: document.getElementById('email').value,
            password: document.getElementById('password').value,
            });
        

        localStorage.setItem('jwt', data.jwt);

        const token = localStorage.getItem('jwt');

        if(token) {
            window.location.href = 'home.html';
        }
    })

};

loginRequest();