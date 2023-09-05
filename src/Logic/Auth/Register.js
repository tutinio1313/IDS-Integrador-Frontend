import Router from "/src/Router/Router";

export default async function Register(
  canRegister,
  UserName,
  Password,
  Email,
  Name,
  LastName
) {
  if (canRegister) {
      var result = await fetch(Router("UserRegister"), {
      method: "POST", 
      mode : 'cors',
      headers: {
        'accept' : 'application/json',
            'Content-Type' : 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        Username: UserName,
        Name: Name,
        Lastname: LastName,
        Email: Email,
        Password: Password
      })
    }).then((response) => {
      if(response.stateExecution){

      } 
      else{
        
      }
    }).catch((error) => {
      console.log(error);
    });
  }
}
