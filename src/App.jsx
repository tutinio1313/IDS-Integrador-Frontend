import './App.css';
export default function App() {
  let user = localStorage.getItem("cookie");

  if(user !== null)
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

