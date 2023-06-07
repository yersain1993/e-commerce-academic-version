import deafultAxios from 'axios';

const axios = () => deafultAxios.create({
    //https://e-commerce-api-v2.academlo.tech/api/v1
    baseURL: 'https://ecommerce-crud-ijfe.onrender.com',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export default axios;