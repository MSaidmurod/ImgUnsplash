import {useState, useEffect} from 'react'
import { NavLink, Link } from 'react-router-dom'
import DropDown from './DropDown'
import {BsFillCloudMoonFill} from 'react-icons/bs'
import {PiCloudSunBold} from 'react-icons/pi'
import {FcDislike, FcLike} from 'react-icons/fc'
import { useSelector } from 'react-redux'
import { removeUser } from '../redux/feature/unsplashSlice'
import { useDispatch } from 'react-redux'
import { logout } from '../firebase/firebaseConfig'

 
function getLocalStoreg () {
  return localStorage.getItem('theme') || 'light'
}

function Header() {
  const [dark, setDark] = useState(getLocalStoreg())


  useEffect(() => {
    document.documentElement.dataset.theme = dark
    localStorage.setItem('theme', dark)
  }, [dark])
const setMode = () => {

  setDark((prev) => {
    return prev == "light" ? "coffee" : "light" 
  })
}

/// redux info 
const dispatch = useDispatch()
const {likePhotos, user} = useSelector((store) => store.unsplash)

const logoutUser = () => {
  logout();
  dispatch(removeUser())
}
  return (
    <div className='max-w-7xl max-lg:px-10 mx-auto flex  items-center my-6 justify-between'>
        <div className='flex  items-center gap-4'>
        <h1 className='font-bold max-md:text-2xl text-4xl select-none'>Unsplash</h1>
        <button className='select-none font-bold text-2xl' onClick={setMode}>{dark === "light" ? <BsFillCloudMoonFill/>: <PiCloudSunBold/>  }</button>
        </div>
        <div>
          <div className='hidden max-md:block'><DropDown logoutUser={logoutUser}/></div>
            <div className='max-md:hidden flex items-center gap-4'>
            <div className='flex'>
            <NavLink to='/likepage' className='font-bold text-2xl'>{likePhotos.length == 0 ? <FcDislike/> : <FcLike/>}</NavLink>
            <span className="badge badge-secondary  badge-sm">{likePhotos.length}</span>
            </div>
            <NavLink to='/' className='font-bold text-md '>Home</NavLink>
            <NavLink to='/about' className='font-bold text-md '>About</NavLink>
            <NavLink to='/contact' className='font-bold text-md '>Contact</NavLink>
            <NavLink to='/loging' className='font-bold text-md '>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-3 py-1 transition-all ease-in duration-75 bg-white font-bold text-black rounded-md group-hover:bg-opacity-0">
                  Login
              </span>
            </button>
            </NavLink>
            {user && <button onClick={logoutUser} className="relative inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-3 py-1 transition-all ease-in duration-75 bg-white font-bold text-black rounded-md group-hover:bg-opacity-0">
                  Logout
              </span>
            </button>}
              {user && <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                   <img src={user && user.photoURL} alt="" />
                </div>
              </div>}
            </div>
        </div>
    </div>
  )
}

export default Header