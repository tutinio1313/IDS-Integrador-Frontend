import { useState } from 'react';
import './App.css';
import AuthPage from './Routes/Auth/AuthPage';
import IsLogged from './Logic/Auth/IsLogged.js';
import localStorageHandler from './Data/localStorageHandler';

//localStorageHandler("Category");

export default function App() {

  localStorageHandler(Category);
  
  return (
    window.location.href = "http://localhost:5173/login"
  );
}

