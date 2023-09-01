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
    var url = Router("UserRegister");
    var data = {
      Username: UserName,
      Name: Name,
      Lastname: LastName,
      Email: Email,
      Password: Password
    };

    var result = await fetch(url, {
      method: "POST", 
      mode : 'cors',
      headers: {
        'accept' : 'application/json',
            'Content-Type' : 'application/json; charset=utf-8',
      },
      body: JSON.stringify(data)
    }).then((response) => {
      console.log(response);
    });
  }
}
