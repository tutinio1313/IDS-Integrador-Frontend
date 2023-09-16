import axios from 'axios';

export default async function GetCategory(){
    const response = await axios.get('api/Category');
    
    //console.log("TUTI", JSON.stringify(response.data.categories));
    
    return response.data.categories;
}