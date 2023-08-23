import Router from "/src/Router/Router";

export default function Login(canLogin, UserName,Password) 
  {    
    var url = Router("UserLogin");
    var data = [UserName, Password];

    if (canLogin) {
      const result = fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        referrer: "no-referrer",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            SetLoginWasSuccesful(true);
          }
          return Promise.reject(new Error(response.statusText));
        })
        .then((response) => response.json())
        .then((result) => {
          // custom error
        })
        .catch((error) => {
          // common error
          return null;
        });
    }
  };