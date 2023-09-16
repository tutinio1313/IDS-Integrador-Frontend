import "/src/Styles/Home/HomePage.css";
import { React, useState, useEffect } from "react";
import ButtonObject from "/src/Router/Paths/HomeCardPaths.json";
import Card from "/src/Components/Home/Card.jsx";
import PropTypes from "prop-types";
import GetCategory from "/src/Logic/Home/GetCategory.js";

//await LoadCategories();

export default function HomeView(param) {
  //if (param.User != null) {
  var buttons = LoadButtons();
  const [categories, setCategories] = useState(undefined);

  async function LoadCategories() {
    const kts = await GetCategory();
    console.log(kts);
    setCategories(kts);
  }

  useEffect(() => {
    if (categories === undefined) {
      LoadCategories();
    }
  }, [categories]);

  return (
    <>
      <header className="container mx-auto my-auto md:w-fit md:p-10 align-middle text-center">
        <h1 className="text-xl text-center my-auto md:text-2xl ">
          Bienvenido Andrés Rossini al sistema de arbitraje.
        </h1>
      </header>

      <div className="container my-3 mx-auto text-center">
        <hr className="mx-auto w-1/6" />
        <select className="mx-auto w-1/6 text-center" id="CategorySelect">
          {categories &&
            categories.map((category) => {
              if (category !== undefined) {
                return (  
                  <option value={category?.idCategory}>{category?.name}</option>
                );
              }
            })}
        </select>
        <hr className="mx-auto w-1/6" />
      </div>

      <main className="flex flex-col md:flex-row">
        {buttons.map((button) => button)}
      </main>
    </>
  );
}

function LoadButtons() {
  var buttons = [];

  for (const [key, body] of Object.entries(ButtonObject)) {
    buttons.push(<Card key={key} Title={body.Title} URLLogo={body.URLLogo} />);
  }

  return buttons;
}
