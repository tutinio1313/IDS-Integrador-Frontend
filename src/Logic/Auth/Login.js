import Router from "/src/Router/Router";
import axios from 'axios';

export default async function Login(canLogin, UserName,Password) 
  {    
    var url = Router("UserLogin");
    var data = {"Username" : UserName, "Password" : Password};
    var test =JSON.stringify(data);

    console.log(await axios('api/Team', []));


    if (canLogin) {
      var result = await fetch(url, {
        method: "POST",
        headers: {
          'accept' : 'application/json',
            'Content-Type' : 'application/json; charset=utf-8',
        },
        body: JSON.stringify(data)
      })
        .then((response) => {
          console.log(response);
        })
        .catch( error =>
          {
            console.error(error);
          });
    }
  };