import "/src/Styles/Home/HomePage.css";
import { React, useState, useEffect } from "react";
//import PropTypes from "prop-types";

import Card from "/src/Components/Home/Card.jsx";
import Overlay from "/src/Components/Home/Overlay.jsx";

import GetCategory from "/src/Logic/Home/GetCategory.js";
import ButtonObject from "/src/Router/Paths/HomeCardPaths.json";
export default function HomeView() {
  const [categories, setCategories] = useState(undefined);
  const [renderOverlay, setRenderOverlay] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [stackOption, setStackOption] = useState(null);
  const [user,setUser] = useState(localStorage.getItem("cookie"));

  
  useEffect(() => {
    if (categories === undefined) {
      LoadCategories();
    }
  }, [categories]);

  const SetOverlay = (status, text) => {
    setRenderOverlay(status);
    setStackOption(text);
  };

  const LogOut = (signout) => {
    if(signout){
      localStorage.removeItem("cookie");
      setUser(null);
    }
  }
  
  
  if (user !== null) {
    return (
      <div>
        {renderOverlay ? (
          <Overlay
            name={stackOption}
            onClickFunction={SetOverlay}
            category={selectedCategory}/>
        ) : (
          ""
        )}

        <div className="z-0">
          <div className="flex flex-row">
            <div className="ml-3 w-14 h-14" />
            <header className="container mx-auto my-auto w-fit p-5 md:p-10 text-center">
              {user !== undefined ? (
                <h1 className="text-xl text-center my-auto md:text-2xl ">
                  Bienvenido {user.name} {user.lastname} al sistema de
                  arbitraje.
                </h1>
              ) : (
                <h1 className="text-xl text-center my-auto md:text-2xl ">
                  Bienvenido al sistema de arbitraje.
                </h1>
              )}
            </header>
            <div id="SignOut" onClick = {() => LogOut(true)} className="my-auto mr-3 w-14 h-14 flex">
              <img
                className="mx-auto my-auto h-10 w-10"
                src="/assets/Images/Logout.png"
              />
            </div>
          </div>

          <div className="container my-3 mx-auto text-center">
            <hr className="mx-auto w-1/12" />
            <div>
              <select
                className="mx-auto w-1/4 min-w-fit md:w-1/6 text-center"
                id="CategorySelect"
                onChange={(e) =>
                  setSelectedCategory(e.target.options.selectedIndex.toString())
                }
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
              <button
                style={{ background: "rgb(16, 113, 14)" }}
                className=" border-white ml-3 hover:text-green-500 hover:border-green-500 text-sm"
                onClick={() => {
                  SetOverlay(true, "Categorias");
                }}
              >
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
  } else {
    return (window.location.href = window.location.origin + "/login");
  }

  async function LoadCategories() {
    const categoryResult = await GetCategory();
    setCategories(categoryResult);
  }
}
