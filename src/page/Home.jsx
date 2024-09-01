import BrowseProduct from "../components/BrowseProduct";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import Product from "../components/Product";


const Home = (props) => {
    const {menu, product, browseProduct} = props
    return (
        <> 
        <Navbar menu = {menu}/>
        <LandingPage />
        <BrowseProduct browseProduct = {browseProduct} />
        <Product product = {product} />
        </>
    )
}

export default Home;