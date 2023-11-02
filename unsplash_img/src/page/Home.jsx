import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import ImgCarusel from "../components/ImgCarusel";
import Pages from "../components/Pages";
import Modal from "../components/Modal";

function Home() {

  const [url, setUrl] = useState(
    "https://api.unsplash.com/search/photos?client_id=wBM2MOiRxgqFd6y7sdC57jX5yH2m4NT0u1T7YpI4zG4&page=1&query=car"
  );
  const [search, setSearch] = useState("car");

  const { data, isPending, error } = useFetch(url);
  const hendelSubmit = (e) => {
    e.preventDefault();
    setUrl(
      `https://api.unsplash.com/search/photos?client_id=wBM2MOiRxgqFd6y7sdC57jX5yH2m4NT0u1T7YpI4zG4&page=1&query=${search}`
    );
  };

  return (
    <div className="max-w-7xl max-lg:px-10 h-full mx-auto">
      <form onSubmit={hendelSubmit} className="flex max-md:px-4 flex-col gap-5">
        <span className="font-bold max-sm:text-xl text-3xl">
          Search Any Image:
        </span>
        <div className="flex gap-4">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary  max-w-xs"
          />
          <button className="btn max-sm:hidden btn-outline btn-primary">
            Search
          </button>
        </div>
      </form>
      
      <ImgCarusel data={data} />
      <Pages data={data} />
      <div className='text-center pb-10'>
        <div className="join">
            <button onClick={() => {setUrl(`https://api.unsplash.com/search/photos?client_id=wBM2MOiRxgqFd6y7sdC57jX5yH2m4NT0u1T7YpI4zG4&page=1&query=${search}`)}} className="join-item btn">1</button>
            <button onClick={() => {setUrl(`https://api.unsplash.com/search/photos?client_id=wBM2MOiRxgqFd6y7sdC57jX5yH2m4NT0u1T7YpI4zG4&page=2&query=${search}`)}} className="join-item btn">2</button>
            <button onClick={() => {setUrl(`https://api.unsplash.com/search/photos?client_id=wBM2MOiRxgqFd6y7sdC57jX5yH2m4NT0u1T7YpI4zG4&page=3&query=${search}`)}} className="join-item btn">3</button>
            <button onClick={() => {setUrl(`https://api.unsplash.com/search/photos?client_id=wBM2MOiRxgqFd6y7sdC57jX5yH2m4NT0u1T7YpI4zG4&page=4&query=${search}`)}} className="join-item btn">4</button>
      </div>
      </div>
    </div>
  );
}

export default Home;
