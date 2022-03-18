import axios from 'axios';

const form = document.querySelector('form');

const ticketRequest = () => {

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const request = {
            data: {
                customer_email: document.getElementById('email').value
            }

        }

        const { data } = axios.post('http://localhost:1337/api/tickets', request);

        alert('Ticket envoyé !');
    })
}

ticketRequest();