import './App.css';
export default function App() {
  let user = localStorage.getItem("cookie");

  if(user !== null)
  {
    return (
      window.location.href = window.location.origin + "/home"
    );
  }
  else{
    return (
      window.location.href = window.location.origin + "/login"
    );
  }
}

