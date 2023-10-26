import "/src/Styles/Home/HomePage.css";
import { React, useState, useEffect } from "react";
//import PropTypes from "prop-types";

import Card from "/src/Components/Home/Card.jsx";
import Overlay from "/src/Components/Home/Overlay.jsx";

import GetCategory from "/src/Logic/Home/GetCategory.js";
import ButtonObject from "/src/Router/Paths/HomeCardPaths.json";

import localStorageHandler from "/src/Data/localStorageHandler";

export default function HomeView() {
  const [categories, setCategories] = useState(undefined);
  const [renderOverlay, setRenderOverlay] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [stackOption, setStackOption] = useState(null);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (categories === undefined) {
      LoadCategories();
    }
  }, [categories]);

  useEffect(() => {
    if (user === undefined) {
      LoadUser();
    }
  }, [user]);

  const SetOverlay = (status, text) => {
    setRenderOverlay(status);
    setStackOption(text);
  };

    const onChangeSelect = (e) => {
    console.log(e);
    setSelectedCategory(e.target.options.selectedIndex.toString());
    }

    if(user !== undefined)
    {
      
      return (
    
        <div>
          {renderOverlay ? (
            <Overlay
              name={stackOption}
              onClickFunction={SetOverlay}
              category={selectedCategory}
            />
          ) : (
            ""
          )}
    
          <div className="z-0">
            <header className="container mx-auto my-auto md:w-fit md:p-10 align-middle text-center">
              {user !== undefined ? (
                <h1 className="text-xl text-center my-auto md:text-2xl ">
                  Bienvenido {user.name} {user.lastname} al sistema de arbitraje.
                </h1>
              ) : (
                <h1 className="text-xl text-center my-auto md:text-2xl ">
                  Bienvenido al sistema de arbitraje.
                </h1>
              )}
            </header>
    
            <div className="container my-3 mx-auto text-center">
              <hr className="mx-auto w-1/12" />
              <div>
              <select
                className="mx-auto w-1/4 min-w-fit md:w-1/6 text-center"
                id="CategorySelect"
                onChange={() => {onChangeSelect}}
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
              <button style = {{background : "rgb(16, 113, 14)"}} className = " border-white ml-3 hover:text-green-500 hover:border-green-500 text-sm" onClick ={() => {SetOverlay(true, "Categorias")}}>
              +
              </button>
              </div>
              
              <hr className="mx-auto w-1/12" />
            </div>
    
            <main className="flex flex-col md:flex-row">
              {ButtonObject.map((body, key) => {
                return (
                  <Card
                    key={key}
                    Title={body.Title}
                    URLLogo={body.URLLogo}
                    onClickFunction={SetOverlay}
                  />
                );
              })}
            </main>
          </div>
        </div>
      );
    }

    else{
      return(window.location.href = "http://localhost:5173/login")
    }

  async function LoadCategories() {
    const categoryResult = await GetCategory();
    setCategories(categoryResult);
  }

  async function LoadUser() {
    const userResult = await localStorageHandler();
    setUser(userResult);
  }
}