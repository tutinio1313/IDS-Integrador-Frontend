import './App.css';
import localStorageHandler from './Data/localStorageHandler';

export default function App() {
  let user;

  if(user === undefined){
    const tempUser = localStorageHandler("User");

    if(tempUser != null){
      user = tempUser;
    }
  }

  if(user !== undefined)
  {
    return (
      window.location.href = "http://localhost:5173/home"
    );
  }
  else{
    return (
      window.location.href = "http://localhost:5173/login"
    );
  }
}

