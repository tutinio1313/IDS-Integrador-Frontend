export default async function localStorageHandler(prop) {
  let response;

  if (prop !== null) {
    switch (prop) {
        case "Home":
                response.cookie = localStorage.getItem("cookie");
            break;
    
        default:
            break;
    }
  }

  return response;
}
