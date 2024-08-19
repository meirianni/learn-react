import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";


const Home = (props) => {
    const {menu} = props
    return (
        <> 
        <Navbar menu = {menu}/>
        <LandingPage />
        </>
    )
}

export default Home;