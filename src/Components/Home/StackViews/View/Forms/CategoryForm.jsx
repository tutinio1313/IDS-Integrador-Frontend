import React from 'react';
import '/src/Styles/Home/Form.css';
import Post from '/src/Logic/Home/PostCategory.js';

export default function CategoryForm() {
  const PostCategory = async () => {
    const text = document.getElementById('category').value;
    console.log("Ab");
    const response = await CallApi(text);
    console.log(response);
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
    <div className = "container flex flex-col">
      <div>
          <label>Categoria</label>
          <input type = 'text' id = "category" onChange = {() => SetButtonState()} name = "category"/>  
        </div>

        <button className = "mt-6 mx-auto text-xs" onClick = {() => {PostCategory()}} id = "submitForm">Agregar</button>
    </div>
  )
}

async function CallApi(param) { return (await Post(param));}

