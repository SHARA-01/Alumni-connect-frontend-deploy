import React, { useState,useEffect } from 'react'
import { GoHome } from '../Components/ReactIconsIndex'
import {useNavigate, Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import { logOut } from '../hooks/useFetch'


function AdminNavbar({User}) {

    const [menuvisible, setMenuvisible] = useState(false)
    const navigate = useNavigate()

    const basePath = '/admin'; // Change this to your base path

    const subRoute = location.pathname.split(basePath)[1].substring(0);
    const subRoutes = location.pathname.split(basePath)[1].substring(1);


    const RightMenuVisible = () => {
        setMenuvisible(true);
    }
    const RightMenuHide = () => {
        setMenuvisible(false);
    }

    const logout = async() => {
        let response = await logOut();
        if(response?.statusCode === 200){
          toast.success(response?.message,{
            position: "top-center",
            autoClose:2000,
          })
          localStorage.clear();
          navigate('/')
        }
        else{
          toast.error(response?.response?.message)
        }
      }

    return (
        <div>
            <div id='Navbar' className='flex  w-[97%] mt-4 text-[#344767]'>
                <div className='w-full m-1'>
                    <div className='w-full flex '>
                        <div className='p-1'><GoHome /></div>
                        <div className='capitalize'>{subRoute ? subRoute : "/ dashboard"}</div>
                    </div>
                    <div className='capitalize mx-1 font-bold'>
                        <h1>{subRoutes ? subRoutes : "Dashboard"}</h1>
                    </div>
                </div>

                <div className='py-[6px] mx-4 justify-end cursor-pointer  '>
                    <img
                        onClick={()=> setMenuvisible(!menuvisible)}
                        // onMouseLeave={RightMenuHide}
                        alt=""
                        className={`h-11 w-11 rounded-full absolute  z-[10] `}
                        src={User && User?.avatar || "!"} />
                    {
                        menuvisible ? <div onMouseLeave={RightMenuHide} className='-mt-2  bg-white-blur rounded-md w-[7%] absolute p-3 border-b-2  border-r-2 border-gray-200 -mx-[31px] bg-blur '>
                            <ul className='space-y-2 pt-[3rem]'>
                                <li className=' mx-auto space-y-3 w-[90%]'>
                                    <span className=' w-full text-[#344767] text-md font-semibold px-auto active:text-gray-500 hover:text-blue-500'><Link to='profile'>Profile</Link></span>
                                </li>
                                <li onClick={logout} className=' mx-auto space-y-3 w-[90%] '>
                                    <span className=' w-full text-[#344767] text-md font-semibold px-auto active:text-gray-500 hover:text-blue-500'>Logout</span>
                                </li>
                            </ul>
                        </div>
                            :
                            <div className='bg-white'>
                                <div>
                                    <img />
                                    <div className='bg-red-500'></div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar