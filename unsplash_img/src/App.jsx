import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './page/Home'
import Cotect from './page/Contect'
import Aboute from './page/About'
import Modal from './components/Modal'


function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route path='/' index element={<Home/>} />
        <Route path='/about'  element={<Aboute/>} />
        <Route path='/contact'  element={<Cotect/>} />
        <Route path='/modal/:id'  element={<Modal/>} />
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App