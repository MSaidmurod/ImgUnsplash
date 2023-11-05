import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {FcLike, FcDislike} from 'react-icons/fc'
import { addLikePhotos } from '../redux/feature/unsplashSlice';




function LikePage() {
  const {likePhotos:data} = useSelector((store) => store.unsplash)
  const dispatch = useDispatch()
  const likeAdd = (id) => {
    const filterImg = data.filter((img) => {
      return img.id !== id
    })
    // dispatch(addLikePhotos(filterImg()))
    console.log(filterImg());
  }
  
  return (
    <div className='max-w-7xl mx-auto'>
      <ul className="grid lg:grid-cols-3 max-w-7xl md:grid-cols-2 mt-10 gap-3">
      {data &&
        data.map((img) => {
          return (
            <li className='relative' key={img.id}>
              <NavLink to={`/modal/${img.id}`}><img 
                className="object-cover  cursor-pointer rounded-lg w-[300px] h-[300px] sm:w-full max-sm:w-full"
                src={img.urls.regular}
                alt={img.alt_description}
              /></NavLink>
              <button onClick={() => likeAdd(img.id)} className="btn mt-3 absolute -top-3 right-0 btn-outline border-0"><FcDislike className="text-2xl "/></button>
            </li>
          );
        })}
    </ul>
     
    </div>
  )
}

export default LikePage