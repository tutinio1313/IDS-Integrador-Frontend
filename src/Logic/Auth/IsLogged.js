import Router from "/src/Router/Router";
import LoginThroughJWT from './LoginThroughJWT';

export default async function IsLogged() 
{    
let cookie = document.cookie;

if(cookie != '')
{
    if(IsCookieOk(cookie))
    {
        let response = await LoginThroughJWT();
        if(response.StateExecution)
        {
                        
        }

        else
        {

        }
    }
}
else
{
    return false;
}
};

async function IsCookieOK(cookie)
{
    let counter = 0;
    for (let index = 0, length = cookie.length; index < length; index += 1) {
        if(cookie[0] == '.')
        {
            counter++;
        }        
    }   
    return counter == 3;
}

async function IsCookieOnValidRange()
{

}