import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {FcLike} from 'react-icons/fc'
import { addLikePhotos } from "../redux/feature/unsplashSlice";
import { useDispatch } from "react-redux";

function ImgCarusel({ data }) {
  const dispetch = useDispatch()
  
  return (
    <div>
      <ul className="grid lg:grid-cols-3 max-w-7xl md:grid-cols-2 mt-10 gap-3">
      {data &&
        data.results.map((img) => {
          return (
            <li key={img.id} className="relative">
              <NavLink to={`/modal/${img.id}`}><img 
                className="object-cover rounded-lg  cursor-pointer w-[300px] h-[300px] sm:w-full max-sm:w-full"
                src={img.urls.regular}
                alt={img.alt_description}
              /></NavLink>
              <button onClick={() => dispetch(addLikePhotos(img))} className="btn mt-3 absolute border-0   -top-3 right-0 btn-outline"><FcLike className="text-2xl "/></button>
            </li>
          );
        })}
    </ul>
    </div>
  );
}

export default ImgCarusel;
