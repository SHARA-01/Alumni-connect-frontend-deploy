import React, { useEffect, useState } from 'react'
import { FiEdit } from "../Components/ReactIconsIndex"
import InputField from './InputField'
import { UpdateAccount, UpdateExperience, WhoAmI } from '../hooks/useFetch'
import { formatDate } from '../hooks/UseInfo'
import { toast } from 'react-toastify'



function ProfileCard() {
    const [showPassword, setShowPassword] = useState(false)
    const [userData, setusersData] = useState('')
    const [UserData, setUsersData] = useState('')
    useEffect(() => {
        const handleUserData = async () => {
            let response = await WhoAmI()
            setusersData(response.data)
        }
        if (userData === '') {
            handleUserData()
        }
        setUsersData(userData)
    }, [userData])

    const [role, setRole] = useState('')
    const [username, setUserName] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [degree, setDegree] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [startYear, setStartYear] = useState('')
    const [endYear, setEndYear] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [designation, setDesination] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [currentlyWorking, setCurrentlyWorking] = useState('')
    const [active, setActive] = useState(true)
    const [companyDetailsFieldHandle, setCompanyField] = useState(true)

    useEffect(() => {
        if (userData) {
            setRole(userData.role || '')
            setUserName(userData?.username || '')
            setFullName(userData?.full_name || '')
            setEmail(userData?.email || '')
            setMobileNumber(userData?.mobile_number || '')
            setDegree(userData?.graduation_details?.degree || '')
            setSpecialization(userData?.graduation_details?.specialization || '')
            setStartYear(userData?.graduation_details?.start_year || '')
            setEndYear(userData?.graduation_details?.end_year || '')
            setCompanyName(userData?.company_details?.company_name || '')
            setDesination(userData?.company_details?.designation || '')
            setStartDate(userData && formatDate(userData?.company_details?.start_date) || '')
            setEndDate(userData && formatDate(userData?.company_details?.end_date) || '')
            setCurrentlyWorking(userData?.company_details?.currently_working || false)
        }
    }, [userData])


    const handleSubmitUpdateAccount = async () => {
        let response = await UpdateAccount({ fullName, email, mobileNumber });
        if (response?.statusCode === 200) {
            toast.success(response?.message)
        } else {
            toast.error(response?.response?.message)
        }
    }

    const handleSubmitExpirence = async() =>{
        let response = await UpdateExperience({companyName, designation, startDate, endDate, currentlyWorking})
        if(response?.statusCode === 201){
            toast.success(response?.message,{id:1})
        }else{
            toast.error(response?.response?.message)
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const activeField = () => {
        setActive(!active)
    }


    console.log(UserData)
    return (
        <div className='w-[97%] bg-gray-200 rounded-lg mx-auto pb-5 bg-blur '>
            <div>
                <div className='block text-left p-4'>

                    <ul className='flex justify-between'>
                        <li><span className='text-gray-600 capitalize text-md font-semibold'>Personal Details</span></li>
                        <li> <button onClick={activeField} className='active:text-sky-500 '> <FiEdit /></button></li>
                    </ul>
                </div>
                <div className=' mx-auto p-5'>
                    <div className='flex justify-between mb-2'>
                        <InputField type="text" value={role} inputClass='focus:outline-blue-400' disabled />
                    </div>
                    <ul className='flex justify-between space-y-8 mb-8 flex-wrap'>
                        <li><InputField type="text" value={fullName} onChange={setFullName} placeholder='Full Name' inputClass='mt-8' required disabled={active} /></li>
                        <li><InputField type="email" value={email} onChange={setEmail} placeholder='Email' required disabled={active} /></li>
                        <li><InputField type="text" value={username} onChange={setUserName} placeholder='@username' required disabled /></li>
                        <li><InputField type="text" value={mobileNumber} onChange={setMobileNumber} placeholder='Mobile Number' required disabled={active} /></li>
                    </ul>
                </div>
            </div>

            <div className='w-full p-2'>
                <div className='block text-left p-2'>
                    <span className='text-gray-600 capitalize text-md font-semibold'>Collage Details</span>
                </div>
                <div className='w-full mx-auto px-5 '>
                    <ul className='flex justify-between space-y-8 mb-8 flex-wrap'>
                        <li><InputField type="text" value={degree} onChange={setDegree} placeholder='Degree' inputClass='mt-8' disabled /></li>
                        <li><InputField type="text" value={specialization} onChange={setSpecialization} placeholder='Branch' disabled /></li>
                        <li><InputField type="text" value={startYear} onChange={setStartYear} placeholder='start Year' disabled /></li>
                        <li><InputField type="text" value={endYear} onChange={setEndYear} placeholder='Passing Year' disabled /></li>
                    </ul>
                </div>
            </div>{
                UserData && UserData.role === 'Student' ? '' : <div>
                    <div className='block text-left p-4'>
                        <ul className='flex justify-between'>
                            <li> <span className='text-gray-600 capitalize text-md font-semibold'>Company Details</span></li>
                            <li> <button onClick={() => setCompanyField(!companyDetailsFieldHandle)} className='active:text-sky-500 '> <FiEdit /></button></li>
                        </ul>

                    </div>
                    <div className='w-[97%] mx-auto px-5'>
                        <ul className='flex  space-y-8 mb-8 justify-between flex-wrap'>
                            <li><InputField type="text" value={companyName} onChange={setCompanyName} placeholder='Company Name' inputClass='mt-8' disabled={companyDetailsFieldHandle} /></li>
                            <li><InputField type="text" value={designation} onChange={setDesination} placeholder='Desination' disabled={companyDetailsFieldHandle} /></li>
                            <li><InputField type="date" value={startDate} onChange={setStartDate} placeholder='Joining Date' disabled={companyDetailsFieldHandle} /></li>
                            <li><InputField type="date" value={endDate} onChange={setEndDate} placeholder='End Date' disabled={companyDetailsFieldHandle} /></li>
                            <li className={`rounded-md text-gray-600 text-md border border-gray-300   focus:outline-blue-400`}>

                                {/* <InputField type="text" value={role} onChange={setRole} placeholder='Role' inputClass='focus:outline-blue-400' inputdivclass='mt-1 ml-2'  /> */}
                                <span className='px-3 text-gray-700 font-semibold py-2'>Currently Working</span>
                                <select onChange={(e)=>setCurrentlyWorking(e.target.value)} className=' shadow-md rounded-md  my-auto bg-white outline-none'>
                                    <option value="false" selected>false</option>
                                    <option value="true" >true</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            }
            <div className='flex justify-end mx-auto w-auto lg:mx-0 lg:p-10'>
                <button onClick={()=> {handleSubmitExpirence(), handleSubmitUpdateAccount()}} className='bg-gradient-to-tr from-blue-400 to-blue-500 w-auto rounded-md p-2  text-white text-md font-semibold '>Update</button>
            </div>
        </div>
    )
}

export default ProfileCard