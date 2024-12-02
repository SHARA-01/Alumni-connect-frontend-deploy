import React, { useState } from 'react'
import { InputField, toast } from '../../Components'
import { RiLockPasswordLine } from 'react-icons/ri'
import { passwordChange } from '../../hooks/useFetch'
import { Navigate, useNavigate } from 'react-router-dom'


function ChangePassword() {
    const [oldpasswordVisble, setPassVisble] = useState(false)
    const [newpasswordVisble, setNewPassVisble] = useState(false)
    const navigate = useNavigate();

    const [oldPassword, setPassword] = useState('')
    const [newPassword, setConformedPassword] = useState('')

    const handlePasswordChange = async () => {
        let fetch = await passwordChange({ oldPassword, newPassword });
        if (fetch.statusCode === 200) {
            toast.success(fetch?.message)
          navigate('/user')
        }
        else {
            toast.error(fetch?.response?.message)
        }
    }

    return (
        <div className='mx-autp flex justify-center mt-10 '>
            <ul className='flex space-y-5 flex-col'>
                <span className='ml-10 w-full text-gray-600 font-semibold border-b-2 px-4 py-1 border-gray-400 rounded-md'>Change Password</span>

                <li className='flex my-auto'>
                    <InputField type={oldpasswordVisble ? "text" : "password"} label='Old Password' value={oldPassword} onChange={setPassword} inputdivclass='ml-10 mt-4' />
                    <RiLockPasswordLine size={28} onClick={() => { setPassVisble(!oldpasswordVisble), setNewPassVisble(false) }} className='text-gray-700 cursor-pointer mt-[3.2rem] -ml-8 my-autoter z-10 bg-white ' />
                </li>
                <li className='flex my-auto '>
                    <InputField type={newpasswordVisble ? "text" : "password"} label='New Password' value={newPassword} onChange={setConformedPassword} inputdivclass='ml-10 mt-4' />
                    <RiLockPasswordLine size={28} onClick={() => { setPassVisble(false), setNewPassVisble(!newpasswordVisble) }} className='text-gray-700 cursor-pointer mt-[3.2rem] -ml-8 my-auto z-10 bg-white ' />
                </li>
                <li className='w-full'>
                    <button onClick={handlePasswordChange} className= ' flex bg-blue-500 text-center px-[4rem]  py-2  ml-10 rounded-md my-5 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400 text-white font-semibold active:bg-blue-300 ' >Update</button>
                </li>
            </ul>
        </div>
    )
}

export default ChangePassword