import axios from 'axios';

const form = document.querySelector('form');
const token = localStorage.getItem('jwt');
const ticketRequest = () => {

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            const request = {
                data: {
                    customer_email: document.getElementById('email').value
                }
    
            }
    
            const headers = {
                headers: {
                    'Authorization': `bearer ${token}`
                }
            };
    
            await axios.post('http://localhost:1337/api/tickets', request, headers);
            alert('Ticket envoyé !')
        } catch (err) {
            alert(err.message)
        }
        
  
    })
}

ticketRequest();