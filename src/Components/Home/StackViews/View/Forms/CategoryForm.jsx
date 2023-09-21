import React from 'react';
import '/src/Styles/Home/Form.css';
import Post from '/src/Logic/Home/PostCategory.js';

export default function CategoryForm() {
  const PostCategory = () => {
    const text = document.getElementById('category').value;
    response = Post(text);
    do{

    }while(response === undefined);
  };

  const SetButtonState = () => {
    const button = document.getElementById('submitForm');
    const text = document.getElementById('category').value;

    if(text != ""){
      button.getAttribute("disabled") != null
        ? button.removeAttribute("disabled")
        : "";
    }
    
    else{
      button.getAttribute("disabled") == null
      ? button.setAttribute("disabled", "disabled")
      : "";
    }
  };
  
  return (
    <form className = "container flex flex-col">
      <div>
          <label>Categoria</label>
          <input type = 'text' id = "category" onChange = {() => SetButtonState()} name = "category"/>  
        </div>

        <button className = "mt-6 mx-auto text-xs" onClick = {() => {}} id = "submitForm" disabled>Agregar</button>
    </form>
  )
}
