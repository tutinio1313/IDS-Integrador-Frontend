import Router from "/src/Router/Router";

export default async function Login(canLogin, UserName,Password) 
  {    

    if (canLogin) {
      const url = Router("UserLogin");
      var result = await fetch(url, {
        method: "POST",
        headers: {
          'accept' : 'application/json',
            'Content-Type' : 'application/json; charset=utf-8',
        },
        body: JSON.stringify({"Username" : UserName, "Password" : Password})
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