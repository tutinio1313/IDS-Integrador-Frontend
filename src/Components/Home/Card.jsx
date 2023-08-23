import React from 'react';
import from "./Card.css";
import HomeCardRouter from "/Router/HomeCardRouter.js";


export default function Card(param) {
  const body = HomeCardRouter(param);

  return 
  (
    <div id="card" className="container mx-auto w-5/6 h-1/6">
      <img src={body.URLLogo} className ="my-auto ml-4 max-h-6 max-w-6" alt="card logo"/>
      <h3 className ="my-auto ml-4 text-sm">{body.Title}</h3>
    </div>
  )
}
