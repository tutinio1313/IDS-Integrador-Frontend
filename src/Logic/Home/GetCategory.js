import axios from 'axios';

export default async function GetCategory(){
    const response = await axios.get('api/Category');    
    return response.data.categories;
}