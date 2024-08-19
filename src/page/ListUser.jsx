

import "../css/page/listuser.css"
import heart from "../assets/heart.png"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const ListUser = () => {
    const [users, setUsers] = useState([])
    const [pagination, setPagination] = useState({
        currentPage : 1,
        totalPage : 0,
        // nextPage : 0,
        // previousPage : 0
    })
    const [maxPage, setMaxPage] = useState(false)
    const navigate = useNavigate();

    const getUser = () => {
        axios
        .get(`https://reqres.in/api/users?page=${pagination.currentPage}`)
        .then((res) => {            
            setUsers(res?.data?.data)
            setPagination({
                currentPage : res.data.page,
                totalPage : res.data.total_pages,
                // nextPage : res.data.total_pages,
                // previousPage : res.data.total_pages,  
            })
        }).catch((err) => {
            console.log(err.response);
        })
    }
    
    const handleNext = () => {
        setPagination({
            ...pagination,
            currentPage : pagination.currentPage + 1,
            
        })
        if (pagination.currentPage + 1 == pagination.totalPage){
            console.log(pagination.currentPage + 1 , pagination.totalPage);
            
            setMaxPage(true)
        }
    }
    const handlePrevious = () => {
       
        setPagination({
            ...pagination,
            currentPage : pagination.currentPage - 1
        })
    }
    
    useEffect(() => {
        getUser()
    },[pagination.currentPage])
    
      
      
    return (
        <>
        <div className="m-4">
            <div className="p-2 h-dvh rounded-lg">
            <table className="">
                 <thead className="">
                    <tr className="text-white">
                        <th className="w-[10px] bg-primary">No</th>
                        <th className="bg-primary">Name</th>
                        <th className="bg-primary">Phone Number</th>
                        <th className="bg-primary">Company</th>
                        <th className="bg-primary">Role</th>
                        <th className="bg-primary">Status</th>
                        <th className="bg-primary">Action</th>
                    </tr>
               </thead>
                {users.map((item, key) => (
                <tbody className="">
                        <tr className="">
                        <td key={item.id}>{item.id}</td>
                        <td>
                        <div className="flex flex-col">
                        <p>{item.first_name} {item.last_name}</p>
                        <p className="italic">{item.email}</p>
                        </div>
                        </td>
                        <td>28</td>
                        <td>Developer</td>
                        <td>John Doe</td>
                        <td>28</td>
                        <td> 
                            <Link to = {`/detail-user/${item.id}`}>
                            <button className="hover:underline">view</button>
                            </Link>
                        </td>
                    </tr>
               </tbody>
                ))}
            </table>

            <div className="pagination">
                <div className="flex justify-center ">
                    <p onClick={handlePrevious} className="p-2 hover:bg-primary rounded hover:text-white">Previous</p>
                    <p className="p-2  font-bold">{pagination.currentPage}</p>
                    {maxPage ? <p onClick={handleNext} className="p-2 disabled hover:bg-primary rounded hover:text-white">Next</p> :<p onClick={handleNext} className="p-2 hover:bg-primary rounded hover:text-white">Next</p>}
                </div>
                <div className="flex justify-end">
                    <p className="p-2">Total Page</p>
                    <p className="p-2">{pagination.totalPage}</p>
                </div>
                 </div>
            </div>
            
          
        </div>
        </>
    )
}

export default ListUser