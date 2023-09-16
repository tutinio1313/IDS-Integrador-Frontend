import ApiCall from './ApiCall.js';

export default async function localStorageHandler(prop) {
    var data = import("/JSONs/" + prop);
    
    if(data == null)
    {
        data = await ApiCall(prop);
    }

    return data;
}
