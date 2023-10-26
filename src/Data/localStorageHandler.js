export default async function localStorageHandler(prop) {
  let response;

  if (prop !== null) {
    switch (prop) {
        case "Home":
                response.cookie = localStorage.getItem("cookie");
                response.name = localStorage.getItem("name");
                response.lastname = localStorage.getItem("lastname");
                response.role = localStorage.getItem("role");
            break;
    
        default:
            break;
    }
  }

  return response;
}
