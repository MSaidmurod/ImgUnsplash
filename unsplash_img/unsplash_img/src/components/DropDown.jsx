import {RxDropdownMenu} from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {BiLogOut} from 'react-icons/bi'


function DropDown({logoutUser}) {
  const {user} = useSelector((store) => store.unsplash)
  return (
    <div className='flex items-center'>

        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="flex"><RxDropdownMenu className='w-[100px] h-[30px]'/>
         
              </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            
            <li>{user && <button onClick={logoutUser} className='mr-2'><BiLogOut className='text-3xl'/></button>}</li>
          <li>
            <NavLink to='/likepage' className='font-bold text-xl'>
            <span className="badge badge-secondary badge-sm">0</span>
              <h1>Like</h1>
            </NavLink>
            </li>
            <li><NavLink to='/loging'>Login</NavLink></li>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </div>
    </div>
  )
}

export default DropDown