import { useState, useEffect } from 'react';
import './App.css';
import localStorageHandler from './Data/localStorageHandler';

//localStorageHandler("Category");

export default function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if(user === undefined){
      const tempUser = localStorageHandler("User");

      if(tempUser != null){
        setUser(tempUser);
      }
    }
  }, [user])

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

