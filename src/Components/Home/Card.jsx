import React from "react";
import PropTypes from "prop-types";
import "/src/Styles/Home/Card.css";

export default function Card({ Title, onClickFunction, URLLogo }) {
  return (
    <button
      id="card"
      className="container mx-auto w-full h-max duration-1000 ease-linear transition hover:saturate-200 flex-row md:w-max md:h-max md:flex-col md:text-center"
      onClick={() => {onClickFunction(true, Title)}}
    >
      <img
        src={URLLogo}
        className="ml-2  my-2 h-6 w-6 md:mx-auto md:w-20 md:h-20"
        alt="card logo"
      />
      <hr className="my-2 hidden ml-2 md:mx-auto md:flex" />
      <h3 className="ml-2 md:ml-0 text-base">{Title}</h3>
    </button>
  );
}
