import { useParams } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
import NavbarLogin from "../components/NavbarLogin";


const DetailUser = (props) => {
    
    const {menu, product} = props
    
    const {id} = useParams()
    
    const [data, setData] = useState({})

    const getUserDetail = () => {
        axios
        .get(`https://reqres.in/api/users/${id}`)
        .then((res) => {            
            setData(res?.data?.data)
        }).catch((err) => {
            console.log(err.response);
        })
    }
    
    useEffect(() => {
        getUserDetail()
    }, [])
    
    return (
        <>
        <NavbarLogin menu = {menu} data = {data} />
        <div className="h-10 bg-primarySecond mt-2"></div>
        <p className="font-montserrat flex justify-around font-bold text-lg mt-5	 tracking-wide">Shoping List</p>
        <div className="grid lg:grid-cols-4 gap-6 m-10 md:grid-cols-2">
            {product.map((item, index) => (
                    <div className="card grid gap-4 bg-customGrey rounded hover:drop-shadow-2xl" >
                        <img className="img h-[400px] w-full rounded" src={item.image} alt="img" />
                        <div className="m-2">
                            <p className= "font-bold"key = {index}>{item.name}</p>
                            <p className="text-customGreyFont text-sm mt-3" key = {index}>{item.detailName}</p>
                            <p className= "font-bold mt-3" key = {index}>Rp. {item.price}</p>
                        </div>
                    </div>
            ))}
            </div>
        
        </>
    )
}


export default DetailUser