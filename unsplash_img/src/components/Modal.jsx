import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import {GrCloudDownload, GrLike, GrView} from 'react-icons/gr'
import {IoArrowBack} from 'react-icons/io5'

function Modal() {
  const {id} = useParams()
  const {data} = useFetch(`https://api.unsplash.com/photos/${id}?client_id=wBM2MOiRxgqFd6y7sdC57jX5yH2m4NT0u1T7YpI4zG4`)
  console.log(data);
  return (
    <div className=' w-full max-w-8xl mx-auto  flex justify-center items-center'>
        <div className="max-w-full max-sm:w-[350px]   rounded overflow-hidden shadow-lg">
          <img className="w-[800px] object-cover max-sm:h-[400px] h-[600px]" src={data && data.urls.regular} alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            <div className="font-bold  text-xl mb-2">{data && data.slug}</div>
            
          </div>
          <div className='flex relative '>
          <div className="px-6 pt-4 pb-2">
            <span className=" items-center w-[150px] bg-gray-200 flex  rounded-full px-3 py-1 text-xl gap-3 font-semibold text-gray-700 mr-2 mb-2"><GrCloudDownload/>{data && data.downloads}</span>
            <span className=" items-center w-[150px] bg-gray-200 flex  rounded-full px-3 py-1 text-xl gap-3 font-semibold text-gray-700 mr-2 mb-2"><GrLike/>{data && data.likes}</span>
            <span className=" items-center w-[150px] bg-gray-200 flex  rounded-full px-3 py-1 text-xl gap-3 font-semibold text-gray-700 mr-2 mb-2"><GrView/>{data && data.views}</span>
          </div>
          <div className='flex gap-3 flex-col absolute right-6 bottom-7'>
            <NavLink to='/'><button className='btn  font-bold'><IoArrowBack/> Back</button></NavLink>
          <a href={data && data.links.download}>
          <button className="bg-gray-300  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Download</span>
          </button>
          </a>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Modal