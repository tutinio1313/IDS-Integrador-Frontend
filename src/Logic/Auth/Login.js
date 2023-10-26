import Router from "/src/Router/Router";

export default async function Login(canLogin, UserName,Password) 
  {    
    if (canLogin) {
      const data = {"Username" : UserName, "Password" : Password};
      const url = Router("UserLogin");
      var result = await fetch(url, {
        method: "POST",
        headers: {
          'accept' : 'application/json',
          'Content-Type' : 'application/json;'
        },
        body: JSON.stringify(data)
      });

      console.log(result);
    }
  }