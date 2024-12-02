import React, { useState } from 'react'
import { RiLockPasswordLine } from "../Components/ReactIconsIndex";
import InputField from './InputField';
import { Register } from '../hooks/useRegister';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// import { useSearchParams } from 'react-router-dom';


function RegisterForm({ role }) {

    const [showPassword, setShowPassword] = useState(false);
    const naivgate = useNavigate();

    const [username, setUserName] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')

    const [degree, setDegree] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [startYear, setStartYear] = useState('')
    const [endYear, setEndYear] = useState('')

    const [companyName, setCompanyName] = useState('')
    const [designation, setdesignation] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [currentlyWorking, setCurrentlyWorking] = useState('')

    const handleSubmit = async() => {

       let response = await Register({ role, username, fullName, email, password, mobileNumber, degree, specialization, startYear, endYear, companyName, designation, startDate, endDate, currentlyWorking })
       if(response?.statusCode === 201) {
        toast.success(response?.message)
        naivgate('/admin/users')
       }
       else{
        toast.error(response?.response?.message)
       }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className='w-[97%] bg-gray-200 rounded-lg mx-auto my-10 bg-blur '>
            <div>
                <div className='block text-left px-4 py-2'>
                    <span className='text-gray-600 capitalize text-md font-semibold'>Personal Details</span>
                    {/* <hr className='w-full h-[0.05rem] bg-gray-600  my-2' /> */}
                </div>
                <div className='w-[97%] mx-auto'>

                    <div className='flex space-x-3 space-y-8 mb-8 flex-wrap'>
                        <InputField type="text" value={role} inputClass='focus:outline-blue-400 mt-8 ml-3' disabled />
                        <InputField type="text" value={fullName} onChange={setFullName} placeholder='Full Name' required />
                        <InputField type="email" value={email} onChange={setEmail} placeholder='Email' required />
                        <InputField type="text" value={username} onChange={setUserName} placeholder='@username' required />
                        <InputField type="tel" value={mobileNumber} onChange={setMobileNumber} placeholder='Mobile Number' required />
                        <div className="flex justify-between w-auto ">
                            <InputField type={showPassword ? "text" : "password"} value={password} onChange={setPassword} placeholder='Password' required />
                            <RiLockPasswordLine size={28} onClick={togglePasswordVisibility} className='text-gray-700 my-auto cursor-pointer   z-10 bg-white -ml-10 ' />
                        </div>
                    </div>
                </div>
            </div>

            {
                role && role === "Admin" ? ""
                    :
                    <div>
                        <div>
                            <div className='block text-left py-2 px-4'>
                                <span className='text-gray-600 capitalize text-md font-semibold'>Collage Details</span>
                                {/* <hr className='w-full h-[0.05rem] bg-gray-600  my-2' /> */}
                            </div>
                            <div className='w-[97%] mx-auto '>
                                <div className='flex space-x-3 space-y-8 mb-8 flex-wrap'>
                                    <InputField type="text" value={degree} onChange={setDegree} placeholder='Degree' inputClass='mt-8 ml-3' />
                                    <InputField type="text" value={specialization} onChange={setSpecialization} placeholder='Branch' />
                                    <InputField type="number" value={startYear} onChange={setStartYear} placeholder='start Year' />
                                    <InputField type="number" value={endYear} onChange={setEndYear} placeholder='Passing Year' />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='block text-left py-2 px-4'>
                                <span className='text-gray-600 capitalize text-md font-semibold'>Company Details</span>
                                {/* <hr className='w-full h-[0.05rem] bg-gray-600  my-2' /> */}
                            </div>
                            <div className='w-[97%] mx-auto '>
                                <div className='flex space-x-3 space-y-8 mb-8 flex-wrap'>
                                    <InputField type="text" value={companyName} onChange={setCompanyName} placeholder='Company Name' inputClass='mt-8 ml-3' />
                                    <InputField type="text" value={designation} onChange={setdesignation} placeholder='designation' />
                                    <InputField type="date" value={startDate} onChange={setStartDate} placeholder='Joining Date' />
                                    <InputField type="date" value={endDate} onChange={setEndDate} placeholder='End Date' />
                                    <InputField type="text" value={currentlyWorking} onChange={setCurrentlyWorking} placeholder='Currtly Working' />

                                </div>
                            </div>
                        </div>
                    </div>


            }


            <div className='flex justify-end p-10'>
                <button onClick={handleSubmit}   className='bg-gradient-to-tr from-blue-400 to-blue-500 w-[15%] rounded-md p-2 text-white text-md font-semibold '>Submit</button>
            </div>




        </div>
    )
}

export default RegisterForm