
import { useRoutes } from 'react-router-dom'
import './index.css'
import ListUser from './page/ListUser'
import Login from './page/Login'
import ModalUser from './page/ModalUser'
import Register from './page/Register'
import { routeList } from './routes/routeList'
import Home from './page/Home'

function App() {


  const element = useRoutes(routeList)
  return element
  // return (
  //   <>
  //     {/* <Login/> */}
  //     {/* <Register /> */}
  //     {/* <ListUser /> */}
  //     {/* <ModalUser/> */}

  //     {/* <Home /> */}
      
  //   </>
  // )
}

export default App
