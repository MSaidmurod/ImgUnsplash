import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function ImgCarusel({ data }) {
  
  return (
    <div>
      <ul className="grid lg:grid-cols-3 max-w-7xl md:grid-cols-2 mt-10 gap-3">
      {data &&
        data.results.map((img) => {
          return (
            <li key={img.id}>
              <NavLink to={`/modal/${img.id}`}><img 
                className="object-cover hover:scale-110 cursor-pointer w-[300px] h-[300px] sm:w-full max-sm:w-full"
                src={img.urls.regular}
                alt={img.alt_description}
              /></NavLink>
            </li>
          );
        })}
    </ul>
    </div>
  );
}

export default ImgCarusel;
