import { signInWithPopup } from 'firebase/auth'
import {singUpLoginWithGoogle} from '../firebase/firebaseConfig'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/feature/unsplashSlice'
import {FcGoogle} from 'react-icons/fc'
import { NavLink } from 'react-router-dom'
import {MdOutlineMenuOpen} from 'react-icons/md'


function Loging() {
  const {user} = useSelector((store) => store.unsplash)
  const dispatch = useDispatch()


  const loginSign = () => {
    singUpLoginWithGoogle()
      .then((user) => {
        dispatch(addUser(user.user))
      })
      .catch((error) => {
        console.log('error');
      })
  }
  return (
    <div className='max-w-7xl flex items-center justify-center flex-col mx-auto'>
      <div className="card w-96 bg-base-100 mt-28 shadow-xl">
          <div className="card-body items-center text-center">
            {!user && <h1 className='font-bold'>Login With Google</h1>}
            {user && <>
            <h1 className='font-bold text-xl'>Good Job 👍</h1>
              <div className="avatar">
              <div className="w-24 rounded">
                <img src={user && user.photoURL} />
              </div>
            </div>
            <h1 className='font-bold'>{user && user.displayName}</h1>
            </>
            }
            {!user && <button onClick={loginSign} className='btn btn-normal'><FcGoogle className='text-xl'/>Google</button>}
            {user && <NavLink to='/'><button className='btn btn-outline'><MdOutlineMenuOpen className='text-xl'/>open</button></NavLink>}
          </div>
        </div>
    </div>
  )
}

export default Loging