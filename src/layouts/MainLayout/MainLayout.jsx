import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import { Outlet } from 'react-router-dom'


const MainLayout = () => {
  return (
    <div>
        <NavBar/>
        <div className='min-h-[calc(100vh-116px)]'>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default MainLayout