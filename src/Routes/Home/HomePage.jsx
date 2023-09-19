import "/src/Styles/Home/HomePage.css";
import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";

import Card from "/src/Components/Home/Card.jsx";
import Overlay from "/src/Components/Home/Overlay.jsx";

import GetCategory from "/src/Logic/Home/GetCategory.js";
import ButtonObject from "/src/Router/Paths/HomeCardPaths.json";

export default function HomeView({user}) {
  //if (param.User != null) {
  var buttons = [];
  const [categories, setCategories] = useState(undefined);
  const [renderOverlay, setRenderOverlay] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [stackOption, setStackOption] = useState(null);
  
  useEffect(() => {
    if (categories === undefined) {
      LoadCategories();
    }
  }, [categories]);

  const SetOverlay = (status, text) => {
        setRenderOverlay(status);
        setStackOption(text);

  }

  return (
    <div>

      {renderOverlay ? <Overlay 
                        name = {stackOption}
                        onClickFunction = {SetOverlay}
                        category = {selectedCategory}
                        /> : ""
      }
      

      <div className = "z-0">
        <header className="container mx-auto my-auto md:w-fit md:p-10 align-middle text-center">
          <h1 className="text-xl text-center my-auto md:text-2xl ">
            Bienvenido Andrés Rossini al sistema de arbitraje.
          </h1>
        </header>

        <div className="container my-3 mx-auto text-center">
          <hr className="mx-auto w-1/6" />
          <select
            className="mx-auto w-1/4 min-w-fit md:w-1/6 text-center"
            id="CategorySelect"
            onChange = {() => {} }
          >
            {categories &&
              categories.map((category) => { 
                if (category !== undefined) {
                  return (
                    <option
                      key={category?.idCategory}
                      value={category?.idCategory}
                    >
                      {category?.name}
                    </option>
                  );
                }
              })}
          </select>
          <hr className="mx-auto w-1/6" />
        </div>

        <main className="flex flex-col md:flex-row">
          {ButtonObject.map((body, key) => {
              return(<Card 
              key={key}
              Title={body.Title}
              URLLogo={body.URLLogo}
              onClickFunction = {SetOverlay}
            />)            
          })}
        </main>
      </div>
    </div>
  );

  async function LoadCategories() {
    const kts = await GetCategory();
    setCategories(kts);
  }
}