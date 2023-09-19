import ApiCall from './ApiCall.js';

export default async function localStorageHandler(prop) {
    var data = await import(`./JSONs/${prop}.json`);
   
    if(data == null)
    {
        data = await ApiCall(prop);
    }

    return data;
}
