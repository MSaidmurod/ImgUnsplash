import {RxDropdownMenu} from 'react-icons/rx'
import { NavLink } from 'react-router-dom'

function DropDown() {
  return (
    <div>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className=""><RxDropdownMenu className='w-[100px] h-[30px]'/></label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </div>
    </div>
  )
}

export default DropDown