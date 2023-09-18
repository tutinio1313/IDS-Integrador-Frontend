import GetCategory from "/src/Logic/Home/GetCategory.js";
import GetTeam from "/src/Logic/Home/GetTeam.js";

export default async function ApiCall(param){
    var response;    
    switch (param) {
        case 'Team':
            response = GetTeam;
            break;

        case 'Category':
            response = GetCategory;
            break;

        case 'User':
            //response =  
            break;
    
        default:
            break;
    }
    return response;    
}