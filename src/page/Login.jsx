import google from "../assets/google.png"
import logo from "../assets/logo-meuble.png"
import group1 from "../assets/group1.png"
import "../css/page/login.css"
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { menu } from "../helpers/data";


import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/slice/themeSlice';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [iserror, setIserror] = useState("");
    const [error, setError] = useState("");
    const [showAlert, setShowAlert] = useState(false);

      const handleRegister = () => {
          navigate('/register');
      };
    const handleChangeUserName = (e) => {
        setEmail(e.target.value);
      };
    
      const handleChangePassword = (e) => {
        setPassword(e.target.value);
      };

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

    const handleLogin = () => {
        const payload = {
            email: email,
            password: password,
        };
    
        axios
          .post("https://reqres.in/api/login", payload)
          .then((res) => {
            console.log(res?.data?.token);
            // setSuccess(res?.data?.message);
            localStorage.setItem("access_token", res?.data?.token);
            setError("Email dan Password Benar");
            setTimeout(() => {
              navigate("/list-user");
            }, 2000);
          })
          .catch((err) => {
            setShowAlert(true);
            
            setError(err.response.data.error);
          });
      };

      const darkMode = useSelector((state) => state.theme.darkMode);
      
       const dispatch = useDispatch(); 

       const themeMode = (darkMode) => {
        return darkMode ? 'bg-gray-600 w-full text-white' : 'bg-white text-black';
        };
       
    return (
        <div className={themeMode(darkMode)}>

        <div className="p-4">
        
          {showAlert && (
            <Alert message={error}onClose={handleCloseAlert} />
          )}
        </div>
        <div className={`logo flex m-10 items-center`}>
             <img className="" src={logo} alt="" srcset="" />
             <p className="font-bold p-2 h-10 text-3xl py-2">Userss</p>
        </div>
        <div className="flex justify-around">
        <div className="tag-input">
        <div className="login">
            <p className="font-bold text-2xl mt-5">Login</p>
            <div className={themeMode(darkMode)}>
            <button onClick={() => dispatch(toggleTheme())}>
                Switch to {darkMode ? 'Light' : 'Dark'} Mode
              </button>
            </div>
            <p className="mt-4 text-base text-customGreyFont">Login to access your user account</p>
        </div>
            <div className="flex flex-col">
                <label className="font-thin" htmlFor="" >Email</label>
                <input  onChange={handleChangeUserName} className="h-6 p-4 border border-solid border-customGrey" type="text" />
                <label className="font-thin" htmlFor="">Password</label>
                <input  onChange={handleChangePassword}className="h-6 p-4 border border-solid border-customGrey" type="text" />
            </div>
            <div className="flex justify-between mt-2 font-thin text-xs	">
                <div className="flex">
                    {/* <div className="border-2 border-solid border-customGrey"></div> */}
                    <p>Remember me</p>
                </div>
                <p className="text-customRed">Forget password</p>
            </div>
            <button onClick={handleLogin} className="h-10 bg-primary w-full text-white rounded-md mt-5">Login</button>
            <p className="mt-5 text-customGreyFont text-center	 ">Don’t have an account? <span className="text-customRed hover:underline" onClick={handleRegister}>Sign up</span></p>
        </div>
        <div className="img-login">
            <img className="img2 rounded  h-[200px] w-full" src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt="" />  
        </div>
        </div>

      </div>
    )
}

export default Login