import { useState } from 'react';
import './App.css';
import AuthPage from './Routes/Auth/AuthPage';
import IsLogged from './Logic/Auth/IsLogged.js'

export default function App() {

  
  return (
    window.location.href = "http://localhost:5173/login"
  );
}

