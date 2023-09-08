import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';

import ErrorPage from '/src/Routes/Error/ErrorPage.jsx';
import AuthPage from '/src/Routes/Auth/AuthPage.jsx'
import HomePage from '/src/Routes/Home/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    errorElement : <ErrorPage/>
  },
  {
    path: "/Login",
    element : <AuthPage/>
  },
  {
    path : "/Home",
    element : <HomePage/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
