import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './page/Home'
import Cotect from './page/Contect'
import Aboute from './page/About'
import Modal from './components/Modal'
import LikePage from './page/LikePage'
import Loging from './page/Loging'
import ProtectedRoute from './components/ProtectedRoute'

// firev=base
import { useEffect } from 'react' 
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from './firebase/firebaseConfig'
import { addUser } from './redux/feature/unsplashSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
const {user} = useSelector((store) => store.unsplash)
  
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        
        <Route element={
        <ProtectedRoute user={user}>
          <MainLayout/>
         </ProtectedRoute>
      
      }>
        <Route path='/' index element={<Home/>} />
        <Route path='/about'  element={<Aboute/>} />
        <Route path='/contact'  element={<Cotect/>} />
        <Route path='/likepage'  element={<LikePage/>} />
        
        <Route path='/modal/:id'  element={<Modal/>} />
      </Route>
      <Route path='/loging'  element={<Loging/>} />
      </Route>
      
    )
  )

  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        console.log('yes');
        dispatch(addUser(user))
      } else {
        console.log('no');
      }
    })
  })

  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App