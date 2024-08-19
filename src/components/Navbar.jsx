import logo from "../assets/logo-meuble.png"
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const {menu} = props
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };
    const token = localStorage.getItem("access_token")
    return (
        <> 
        <div className="font-montserrat flex justify-around	">
            <div className="lg:flex lg:items-center mt-5">
                <img src={logo} alt="logo-meuble.png" />
                <p className="ml-2 lg:text-2xl font-semibold md:text-lg">Furpro.</p>
            </div>
            <div className="flex mt-5">
                {menu.map((item) => (
                    <p className="p-3 drop-shadow-2xl font-medium">{item}</p>
                ))}
            </div>

            {/*{token ?
               <div className="flex mt-5 ">
               {/* <p className="p-3 font-medium">User</p>
               <p className="p-3 font-medium">List User</p> */}
              {/* <p className="p-2 h-10 w-28 bg-white text-fontColor rounded text-center hover:bg-primary hover:text-white"
               >List Customer</p>
                </div>
                : */}
                 <div className="flex mt-5 ">
                {/* <p className="p-3 font-medium">User</p>
                <p className="p-3 font-medium">List User</p> */}
                <p className="p-2 h-10 w-28 bg-white text-fontColor rounded text-center hover:bg-primary hover:text-white"
                onClick={handleLogin}
                >Login</p>
                 </div>
           {/* }*/}
        </div>
        </>
    )
}

export default Navbar