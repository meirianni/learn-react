import google from "../assets/google.png"
import logo from "../assets/logo.png"
import group1 from "../assets/group1.png"
import "../css/page/register.css"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/slice/themeSlice';
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [iserror, setIserror] = useState("");
    const [error, setError] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleCloseAlert = () => {
        setShowAlert(false);
    };
    const Alert = ({ message, onClose }) => {        
        return (
          <div className="fixed top-0 left-0 w-full p-4 bg-red-100 border border-red-400 text-red-700 z-50">
            <div className="flex justify-between items-center">
              <span>{message}</span>
              <button
                className="text-red-700 font-bold"
                onClick={onClose}
              >
                &times;
              </button>
            </div>
          </div>
        );
      };

    const handleChangeUserName = (e) => {
        setEmail(e.target.value);
      };
    
      const handleChangePassword = (e) => {
        setPassword(e.target.value);
      };
        const handleRegister = () => {
        const payload = {
            email: email,
            password: password,
        };
        console.log(payload, "payload");
        
    
        axios
          .post("https://reqres.in/api/register", payload)
          .then((res) => {
            // console.log(res?.data?.token);
            // setSuccess(res?.data?.message);
            localStorage.setItem("access_token", res?.data?.token);
            setError("Email dan Password Benar");
            setTimeout(() => {
              navigate("/list-user");
            }, 2000);
          })
          .catch((err) => {
            // console.log(err.response, "resss");
            setShowAlert(true);
            setError(err.response.data.error);
          });
          };
          const darkMode = useSelector((state) => state.theme.darkMode);
      
       const dispatch = useDispatch(); 

       const themeMode = (darkMode) => {
        return darkMode ? 'bg-gray-600 w-full text-white ' : 'bg-white text-black';
        };
    return (
        <div className={themeMode(darkMode)}>
         <div className="p-4">
    
            {showAlert && (
            <Alert message={error}onClose={handleCloseAlert} />
            )}
        </div>
        <div className="logo flex m-10 items-center">
             <img className="w-8 h-10" src={logo} alt="" srcset="" />
             <p className="font-bold p-2 h-10 text-3xl py-2">Userss</p>
        </div>
        <div className="flex justify-around items-center	 ">
        <div className="img-login">
            <img className="imgregis" src={group1} alt="" srcset="" />  
        </div>
        <div className="tag-input">
        <div className="login">
            <p className="font-bold text-2xl">Sign Up</p>
            <div className={themeMode(darkMode)}>
            <button onClick={() => dispatch(toggleTheme())}>
                Switch to {darkMode ? 'Light' : 'Dark'} Mode
              </button>
            </div>
            <p className="mt-4 text-base text-customGreyFont">Let’s get you all st up so you can access your personal account.</p>
        </div>
            <div className="mt-5 grid gap-4">
                <input onChange={handleChangeUserName} className="h-6 p-4 border border-solid border-customGrey" type="email" placeholder="Email"/>
                <input onChange={handleChangePassword} className="h-6 p-4 border border-solid border-customGrey" type="text" placeholder="Password" />
            </div>
                <div className="flex mt-2 font-thin text-xs">
                    {/* <div className="border-2 border-solid border-customGrey"></div> */}
                    <p>I agree to all the <span>Terms</span> and <span>Privacy Policies</span></p>
                </div>
            <button onClick={handleRegister} className="h-10 bg-primaryBlue w-full text-white rounded-md mt-5">Sign Up</button>
            {/* <p className="mt-5 text-customGreyFont text-center">Don’t have an account? <span className="text-customRed">Sign up</span></p> */}
        </div>
        </div>
      </div>
    )
}

export default Register