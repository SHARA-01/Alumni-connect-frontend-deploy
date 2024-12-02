import React, { useState, useEffect } from 'react'
import { PiStudent, RxCrossCircled } from '../Components/ReactIconsIndex'
import { useNavigate, Link, useLocation } from "react-router-dom";
import { WhoAmI, logOut } from '../hooks/useFetch';
import { toast } from 'react-toastify';

function Navbar({ logourl}) {
  const navigate = useNavigate()
  const [profileMenu, setProfileMenu] = useState(false)
  const [userinfo, setUserInfo] = useState('')
  const path =useLocation();

  useEffect(()=> {
    const fetch = async()=>{
    let response =  await WhoAmI()
    setUserInfo(response.data)
    } 
    if(userinfo ===''){
     fetch();
    }
 },[])
  
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

  const HandleProfile = () => {
    navigate('/user/profile')
  }


  return (
    <div className='shadow-md bg-white h-auto px-10 py-2 '>
      <nav className='flex justify-between '>
        <div className='my-auto'>{logourl ? logourl : <span className='text-xl  font-extrabold align-middle my-auto text-gradient-to-tr from-blue-500 to-blue-500'><Link to=''>{`Alumni🔗Connect`}</Link></span>}</div>
       {
        path?.pathname ==='/' ? <span className='text-white px-3 py-1 align-middle rounded-2xl border bg-blue-500 hover:bg-white hover:text-blue-400 hover:border hover:border-blue-500'><Link to='/login'>Login</Link></span> : 
        <ul className='flex '>
        {
          userinfo &&  userinfo?.role === "Alumni" ?
            <div className='my-auto space-x-10'>  
              <span className='text-[1rem] my-auto text-gray-600 font-semibold cursor-pointer hover:border hover:rounded-md px-3 py-1 '><Link to='job-posted'>Posted You</Link></span>
              <span className='text-[1rem] my-auto text-gray-600 font-semibold cursor-pointer hover:border hover:rounded-md px-3 py-1 '><Link to='new-post'>Create Post</Link></span>
            </div>
            : ""
        }
       <li className='my-auto'> 
       <span className='text-[1rem] my-auto text-gray-600 font-semibold cursor-pointer hover:border hover:rounded-md px-3 py-1 mx-10'><Link to='jobs'>Open Jobs</Link></span>
        </li> 
        <li className='w-[40px] h-[40px] rounded-full'>
        {
          userinfo && userinfo?.avatar ?
            <img onClick={()=> setProfileMenu(!profileMenu)}  src={userinfo.avatar} className='w-[40px] h-[40px] mx-auto my-auto rounded-full  object-contain align-middle cursor-pointer' alt="" draggable={false} />
            :
            <ul onMouseEnter={() => setProfileMenu(true)} onMouseLeave={() => setProfileMenu(false)} className={`mx-3 bg-blue-400 rounded-full p-1 z-10 `}>
              {
                profileMenu ?
                  <li>
                    <RxCrossCircled size={26} />
                  </li>
                  :
                  <li>
                    <PiStudent size={26} />
                  </li>
              }
            </ul>
        }
        {
          profileMenu ? <div onMouseEnter={() => setProfileMenu(true)} onMouseLeave={() => setProfileMenu(false)} id='profile-menu' className=' text-sm bg-red-400 cursor-pointer drop-shadow-md '>
            <ul className='absolute -ml-[2.8rem] h-auto py-5 px-3 bg-white rounded-md '>
              <Link className='active:bg-blue-400'>
                <li onClick={HandleProfile} className='hover:text-blue-600 font-semibold w-full cursor-pointer rounded-md px-2 py-1'>
                  <Link to='profile'> Profile</Link>
                </li>
              </Link>
              <Link className='active:bg-blue-400'>
                <li  className='hover:text-blue-600 font-semibold w-full cursor-pointer rounded-md px-2 py-1'>
                  <Link to='profile/change-password'>Change Password</Link>
                </li>
              </Link>
              <Link className='active:bg-blue-400'>
                <li onClick={logout} className='hover:text-blue-600 font-semibold w-full cursor-pointer rounded-md px-2 py-1'>
                  Logout
                </li>
              </Link>
              
            </ul>
          </div> : ""
        }
        </li>
      </ul>
       }
      </nav>
    </div>
  )
}

export default Navbar