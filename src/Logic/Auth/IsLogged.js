import LoginThroughJWT from "./LoginThroughJWT";

export default async function IsLogged() {
  let cookie = document.cookie;

  if (cookie != "") {
    if (IsCookieOK(cookie)) {
      let response = await LoginThroughJWT(cookie);
      if (response.stateExecution) {
        return true;
      }
    }
  } else {
    return false;
  }
}

async function IsCookieOK(cookie) {
  let counter = 0;
  for (let index = 0, length = cookie.length; index < length; index += 1) {
    if (cookie[0] == ".") {
      counter++;
    }
  }
  return counter == 3;
}
