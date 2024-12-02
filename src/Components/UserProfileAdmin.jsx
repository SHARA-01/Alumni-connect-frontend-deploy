import React, { useState } from 'react'
import { formatDate } from '../hooks/UseInfo'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'

function UserProfileAdmin({ fullname, Email, userName, MobileNumber, Degree, Specialization, StartYear, EndYear, CompanyName, Desination, StartDate, EndDate, CurrentlyWorking, imgurl, setState }) {
    const [imgError, setImgError] = useState(false)

    return (
        <div className='bg-white-blur rounded-md flex space-x-2 p-3 shadow-md shadow-black/30  border-gray-300'>
            <IoMdCloseCircleOutline onClick={() => setState(false)} size={27} className='rounded-md hover:text-red-700 hover:rounded-md  font-semibold  cursor-pointer' />
            <div className='flex w-full  space-x-10 rounded-md p-5 '>
                <div className='w-1/6 my-auto '>
                    {
                        imgurl && !imgError ?
                            <img src={imgurl} alt="" className='w-[130px] h-[130px] border-2 bg-img border-blue-500 rounded-md justify-center text-center mx-auto  my-auto text-[5rem] capitalize bg-blue-400' onError={()=> setImgError(true)} />
                            :
                            <div className='flex mx-auto'>
                                {userName ? <span className='w-[130px] h-[130px] border-4 border-blue-500 rounded-full justify-center text-center mx-auto    my-auto text-[5rem] capitalize bg-blue-400' > {userName.charAt(0)} </span> : "#"}
                            </div>
                    }
                </div>
                <table className='w-5/6 flex justify-around  border-2 px-3 py-4 border-gray-400 rounded-md'>
                    <tr className='flex space-x-2'>
                        <td className='flex flex-col capitalize  text-gray-800 font-semibold'>
                            <td>username</td>
                            <td>Full Name</td>
                            <td>Email</td>
                            <td>Mob.</td>
                        </td>
                        <td className='flex flex-col capitalize  text-gray-600 font-semibold  '>
                            <td>: {userName || `-`}</td>
                            <td>: {fullname || `-`}</td>
                            <td>: {Email || `-`}</td>
                            <td>: {MobileNumber || `-`}</td>
                        </td>
                    </tr>
                    <tr className='flex  space-x-4 capitalize'>
                        <td className='flex flex-col  text-gray-800 font-semibold'>
                            <td>Degree</td>
                            <td>Specilaztion</td>
                            <td>start Year</td>
                            <td>End Year</td>
                        </td>
                        <td className='flex flex-col   text-gray-600 font-semibold '>
                            <td>: {Degree || `-`}</td>
                            <td>: {Specialization || `-`}</td>
                            <td>: {StartYear || `-`}</td>
                            <td>: {EndYear || `-`}</td>
                        </td>
                    </tr> 
                    <button className='bg-blue-500 rounded-md text-white font-semibold px-5 h-[14vh] my-auto'><Link to={`/admin/users/${userName}`}>More</Link></button>
                </table>
            </div>
        </div>
    )
}

export default UserProfileAdmin