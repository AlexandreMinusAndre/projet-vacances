import axios from 'axios';

const updateForm = document.getElementById('update');

const token = localStorage.getItem('jwt');

const getUserId = async () => {
    const { data } = await axios.get('http://localhost:1337/api/users/me', {
        headers: {
            'Authorization': `bearer ${token}`
        }
    })
    const id = data.id;

    updateForm.addEventListener('submit', async (e)=> {
        e.preventDefault();

        const headers = {
            headers: {
                'Authorization': `bearer ${token}`
            }
        };

        const request = {
            'username': document.getElementById('updateUsername').value,
            'email': document.getElementById('updateEmail').value,
            'password': document.getElementById('updatePassword').value
        };
        
        const { data } = await axios.put(`http://localhost:1337/api/users/${id}`, request, headers);
        console.log(data);
    })

}
getUserId();