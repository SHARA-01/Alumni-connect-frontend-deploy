import React, { useState, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import {BiSolidDashboard, IoMdPerson, IoPeopleSharp} from '../Components/ReactIconsIndex'

export default function Sidebar() {
    const { id } = useParams();
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState('')

    useEffect(() => {
        const currentPath = location.pathname;
        setActiveMenu(currentPath.substring(7));
      }, [location]);

    return (
        <div className='w-full h-[500px] bg-white rounded-lg text-md text-red-50  '>
            <div className=' text-blue-500 text-center p-3 flex space-x-1 justify-center pt-10'>
                <h1 className='text-purple-900 text-lg font-bold '>Alumni🔗Connect</h1>
            </div>
            <hr className='w-3/5 m-auto border-t-2' />
            <ul className='w-4/5 m-auto flex flex-col text-center text-lg space-y-4  p-3 '>
                <li className=' flex group'>
                    <Link to='/admin' className={`flex py-2 px-2 rounded-md w-full border-none ${ activeMenu === '' ? "bg-sky-400 text-white" : "text-[#344767]" } focus:text-white hover:bg-gray-200 focus:shadow-md focus:bg-sky-400`}>
                        <BiSolidDashboard size={22} className={`my-auto mx-2 ${activeMenu === '' ? "text-white" : "text-[#40679E]"}`} />
                        Dashboard
                    </Link>
                </li>
                <li >
                    <Link to='profile'  className={`py-2 flex  px-2 rounded-md w-full ${ activeMenu === "profile" ? "bg-sky-400 text-white" : "text-[#344767]"}  border-none focus:text-white focus:shadow-md focus:bg-sky-400  hover:bg-gray-200`}>
                        <IoMdPerson size={22} className={`my-auto mx-2 ${activeMenu === 'profile' ? "text-white" : "text-[#40679E]"}`} />
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to='users'  className={`py-2 flex  px-2 rounded-md w-full ${ activeMenu === 'users'  || activeMenu === `users/${id}` ? "bg-sky-400 text-white" : "text-[#344767]"}  border-none focus:text-white focus:shadow-md focus:bg-sky-400  hover:bg-gray-200`}>
                        <IoPeopleSharp size={22} className={`my-auto mx-2 ${activeMenu === 'users' || activeMenu === `users/${id}` ? "text-white" : "text-[#40679E]"}`} />
                        User
                    </Link>
                </li>
                <li className=''>
                    <Link to='user/register'  className={`py-2 flex  px-2 rounded-md w-full ${ activeMenu === 'user/register' ? "bg-sky-400 text-white" : "text-[#344767]"}  border-none focus:text-white focus:shadow-md focus:bg-sky-400  hover:bg-gray-200`}>
                        <BiSolidDashboard size={22} className={`my-auto mx-2 ${activeMenu === 'user/register' ? "text-white" : "text-[#40679E]"}`} />
                        Register
                    </Link>
                </li>
                <li className=''>
                    <Link to='posts' className={`py-2 flex  px-2 rounded-md w-full ${ activeMenu === 'posts' || activeMenu === `posts/${id}` ? "bg-sky-400 text-white" : "text-[#344767]"}  border-none focus:text-white focus:shadow-md focus:bg-sky-400  hover:bg-gray-200`}>
                        <BiSolidDashboard size={22} className={`my-auto mx-2 ${activeMenu === 'posts' || activeMenu === `posts/${id}` ? "text-white" : "text-[#40679E]"}`} />
                        Create Post
                    </Link>
                </li>
            </ul>
        </div>
    )
}