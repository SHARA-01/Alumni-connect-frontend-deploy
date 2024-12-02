import React, { useEffect, useState } from 'react'
import { PiStudent } from '../../Components/ReactIconsIndex'
import { InputField, ProfileCard, toast } from '../../Components/index'
import { AvatarUpload, UpdateAccount, UpdateUser, WhoAmI } from '../../hooks/useFetch'


function UserProfile() {

    const [UplaodActive, setUploadActive] = useState(false)
    const [setedfile, setSetedFile] = useState('')
    const [userData, setUserData] = useState('')

    const [role, setRole] = useState(userData?.role ||  '')
    const [username, setUserName] = useState(userData?.username ||  '')
    const [fullName, setFullName] = useState(userData?.username ||  '')
    const [email, setEmail] = useState(userData?.username ||  '')
    const [mobileNumber, setMobileNumber] = useState(userData?.username ||  '')

    const [degree, setDegree] = useState(userData?.graduation_details?.degree || '')
    const [specialization, setSpecialization] = useState(userData?.graduation_details?.specialization ||'')
    const [startYear, setStartYear] = useState(userData?.graduation_details?.start_year ||'')
    const [endYear, setEndYear] = useState(userData?.graduation_details?.end_year ||'')

    const [companyName, setCompanyName] = useState(userData?.company_details?.company_name ||'')
    const [desination, setDesination] = useState(userData?.company_details?.designation  ||'')
    const [startDate, setStartDate] = useState(userData?.company_details?.start_date ||'')
    const [endDate, setEndDate] = useState(userData?.company_details?.end_date ||'')
    const [currentlyWorking, setCurrentlyWorking] = useState(userData?.company_details?.currently_working ||'')

    useEffect(() => {
        const fetch = async () => {
            let response = await WhoAmI()
            setUserData(response.data)
        }
        if (userData === '') {
            fetch();
        }
    }, [])


   

    const handleUpload = async () => {
        const response = await AvatarUpload(setedfile);
        if(response?.statusCode === 200){
            toast.success(response?.message)
        }else{
            toast.error(response?.response?.message)
        }
    };

    return (
        <div className='w-auto w-max-[50px] h-auto min-h-[60vh] mx-2 pb-5 '>
            <div>
                <div>
                    {
                        userData && userData.avatar ? <div className='flex w-auto flex-col  justify-center '>
                            <div className='w-[100px] h-[100px]  mt-8 my-4 p-1 mx-auto flex rounded-full shadow-md shadow-black/20 border border-t-1 border-gray-200 overflow-hidden'>
                                <img src={userData.avatar} className='rounded-full ' alt="" />
                            </div>{
                                UplaodActive ? <input className='mx-auto my-8 outline-none' placeholder='Choose a file' type="file" onChange={(e) => setSetedFile(e.target.files[0])} /> : ''
                            }
                            {
                                UplaodActive ?
                                    <span onClick={() => { handleUpload(), setUploadActive(true)}} className='mx-auto font-semibold text-md text-gray-600 active:text-gray-800 border-2 hover:border-4 px-4 y-2 border-gray-400 rounded-md'>Upload</span> :
                                    <span onClick={() => setUploadActive(true)} className='mx-auto font-semibold text-md text-gray-600 active:text-gray-800 border-2 hover:border-4 px-4 y-2 border-gray-400 rounded-md'>Change Profile</span>
                            }
                        </div> :
                            <div className='flex w-auto flex-col  justify-center '>
                                <div className='w-[100px] h-[100px]  mt-8 my-4 p-2 mx-auto rounded-full flex shadow-md border border-t-1 border-gray-200'>
                                    <PiStudent size={50} className='mx-auto my-auto' />
                                </div>
                                {
                                UplaodActive ? <input className='mx-auto my-8 outline-none' placeholder='Choose a file' type="file" onChange={(e) => setSetedFile(e.target.files[0])} /> : ''
                            }
                            {
                                UplaodActive ?
                                    <span onClick={() => { handleUpload(), setUploadActive(true)}} className='mx-auto font-semibold text-md text-gray-600 active:text-gray-800 border-2 hover:border-4 px-4 y-2 border-gray-400 rounded-md'>Upload</span> :
                                    <span onClick={() => setUploadActive(true)} className='mx-auto font-semibold text-md text-gray-600 active:text-gray-800 border-2 hover:border-4 px-4 y-2 border-gray-400 rounded-md'>Change Profile</span>
                            }
                            </div>
                    }
                </div>

            </div>

            <div className='w-auto mx-[2%] lg:w-1/2 lg:mx-auto my-5'>
                <ProfileCard />
            </div>
        </div>
    )
}

export default UserProfile