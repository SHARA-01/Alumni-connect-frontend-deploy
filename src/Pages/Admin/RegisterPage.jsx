import React, { useState } from 'react'
import { InputField, RegisterForm } from '../../Components/index'
import { Link } from 'react-router-dom';
import { FiEdit, PiStudent } from "../../Components/ReactIconsIndex";

function Register() {
    const [userType, setUser] = useState('')

    return (
        <div className='min-h-[78vh]'>
            <div className='bg-white pb-2 w-full mt-12 h-auto rounded-lg'>
                <div className='mt-12'>
                    <div className="flex">
                        <div className='w-[32%] ml-2 h-[60px] bg-gradient-to-tr from-[#00b4ccee] to-[#13E2DA] rounded-md flex my-6 -mt-7 shadow-lg ' >
                            <span className='w-full inline-flex px-3 text-xl text-white font-semibold py-3  capitalize'>{userType ? <div className='flex'>
                                {`Create ${userType}`}
                                <FiEdit onClick={() => setUser('')} className='mx-4 my-auto active:text-gray-700  cursor-pointer ' />
                            </div> : "Create New User"}</span>

                        </div>
                    </div>

                    {
                        userType ? <div>
                            <RegisterForm role={userType} />
                        </div>
                            :
                            <div className='flex mt-10 justify-around w-[95%] mx-auto h-auto'>
                                <div className='bg-gray-100 shadow-md w-[30%] rounded-md p-3 my-10  group '>
                                    <div className='w-[100px] mx-auto h-[100px] bg-purple-500 rounded-full shadow-md border-[2px] border-white  -mt-[3rem]   '>
                                        <PiStudent className=' text-white mx-auto my-auto mt-[25%] ' size={40} />
                                    </div>
                                    <div className='w-full text-center mt-3  '>
                                        <span className='text-[#5a4c6f] text-lg font-semibold block '>Student</span>
                                        <span className='text-gray-500 my-3 mx-auto p-1 block text-md'>To Create a new user you have to fill the required parameter's..</span>
                                    </div>
                                    <div className='w-full flex justify-center '>
                                        <button onClick={() => setUser("Student")} className='bg-gradient-to-tr from-blue-500 to-blue-400 rounded-md px-12 py-2 my-2 shadow-md hover:bg text-white text-md font-semibold '> Add </button>
                                    </div>
                                </div>

                                <div className='bg-gray-100 w-[30%] rounded-md p-3 my-10 shadow-md group '>
                                    <div className='w-[100px] mx-auto h-[100px] bg-gradient-to-tr from-gray-700 to-gray-500 rounded-full shadow-md border-[2px] border-white  -mt-[3rem]   '>
                                        <PiStudent className=' text-white mx-auto my-auto mt-[25%] ' size={40} />
                                    </div>
                                    <div className='w-full text-center mt-3 '>
                                        <span className='text-[#5a4c6f] text-lg font-semibold block '>Alumni</span>
                                        <span className='text-gray-500 my-3 mx-auto p-1 block text-md'>To Create a new Alumni you have to fill the required parameter's..</span>
                                    </div>
                                    <div className='w-full flex justify-center '>
                                        <button onClick={() => setUser("Alumni")} className='bg-gradient-to-tr from-blue-500 to-blue-400 rounded-md px-12 py-2 my-2 shadow-md transform scale-100 text-white text-md font-semibold '>Add</button>
                                    </div>
                                </div>

                                {/* <div className='bg-gray-100 w-[30%] rounded-md p-3 my-10 shadow-md group '>
                                    <div className='w-[100px] mx-auto h-[100px] bg-gradient-to-tr from-green-500 to-green-300 rounded-full shadow-md border-[2px] border-white  -mt-[3rem]   '>
                                        <PiStudent className='text-white mx-auto my-auto mt-[25%] ' size={40} />
                                    </div>
                                    <div className='w-full text-center mt-3 '>
                                        <span className='text-[#5a4c6f] text-lg font-semibold block '>Admin</span>

                                        <span className='text-gray-500 my-3 mx-auto p-1 block text-md'>To Create a new Admin you have to fill the required parameter's..</span>
                                    </div>
                                    <div className='w-full flex justify-center '>
                                        <button onClick={() => setUser("Admin")} className='bg-gradient-to-tr from-blue-500 to-blue-400 rounded-md px-12 py-2 my-2 shadow-md hover:bg text-white text-md font-semibold '> Add </button>
                                    </div>
                                </div> */}
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Register