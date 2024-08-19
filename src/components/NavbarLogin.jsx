import logo from "../assets/logo-meuble.png"
import { useNavigate } from 'react-router-dom';

const NavbarLogin = (props) => {
    const {menu, data} = props
    console.log(data, "Data");
    
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

            <div className="flex mt-5 items-center">
                <img className="h-9 rounded"src={data.avatar} alt="image" srcset="" />
                <div className="flex flex-row ">
                  <p className="ml-2">{data.first_name} {data.last_name}</p>
                  <p  className="ml-2 md:hidden lg:block">||</p>
                  <p className="italic ml-2 md:hidden lg:block">{data.email}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavbarLogin