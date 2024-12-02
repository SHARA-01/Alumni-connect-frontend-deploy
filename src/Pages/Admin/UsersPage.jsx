import { useEffect, useState } from 'react'
import { FetchAllUser, UserDelete, UpdateUser } from '../../hooks/useFetch'
import { activeStatus, formatDate } from '../../hooks/UseInfo'
import { TbEdit, RiDeleteBin6Line, PiStudent, FaRegWindowClose } from '../../Components/ReactIconsIndex'
import { UserProfileUpdateAdmin, UserProfileAdmin, toast } from '../../Components/index'
import DEFAULT_IMG from "../../assets/react.svg"

export default function Users() {
    const [users, setUsers] = useState('')
    const [showUpdatediv, setShowUpdatediv] = useState(false)
    const [userId, setUserId] = useState(null)
    const [showProfile, setShowProfile] = useState(false)
    const [newrole, setNewRole] = useState('')

    let localData = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await FetchAllUser();
                setUsers(fetchedData.data);
            } catch (error) {
                toast.error("something went wrong please reload page or try again some time later.")
            }
        };
        if (users?.length === 0) {
            fetchData();
            setShowProfile(false)
            setShowUpdatediv(false)
        }
    }, [users]);

    const deleteUser = async (id) => {
        const response = await UserDelete(id);
        if (response.statusCode === 200) {
            toast.success(response?.message)
            setUsers('')
        }
        else {
            toast.error(response?.response?.message)
        }
    }

    const CheckSpecificUser = (id) => {
        setUserId(id)
    }

    const handleNewRole = (role) => {
        role === "Alumni" ? role = "Student" : role = "Alumni"
        setNewRole(role)
    }


    return (
        <div className='font-sans font-roboto font-helvetica font-arial min-h-[76vh]'>
            <div>
                {/* <div name='Admin-table-data' className=' bg-white w-full mt-[5%] rounded-md shadow-md'>
                    <div className='flex'>
                        <div className='w-[98%] h-[70px] overflow-auto bg-gradient-to-tr from-blue-600 to-blue-400 rounded-md shadow-lg my-2 mx-auto -mt-6'>
                            <div className=' text-xl w-1/5 my-auto  text-white p-5 '>Admin</div>
                        </div>
                    </div>

                    <div className=' font-helvetica flex flex-col w-[97%]  mt-6 mx-auto'>
                        <table>
                            <thead >
                                <tr className=' flex justify-between border-b-2 '>
                                    <th className='text-left text-gray-400 text-sm w-[35%] '>
                                        <span>Name</span>
                                    </th>
                                    <th className='text-gray-400 text-sm w-[20%]'>
                                        Role
                                    </th>
                                    <th className='text-gray-400 text-sm w-[20%] '>
                                        Status
                                    </th>
                                    <th className='text-gray-400 text-sm w-[20%]'>
                                        Join
                                    </th>
                                    <th className='text-gray-400 text-sm w-[10%] '>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users && users.filter(user => user.role === "Admin").map((user) => (
                                        <>
                                            <tr key={user._id} className='flex justify-between border-b-2 ' >
                                                <td onClick={() => { setShowProfile(true), setUserId(user._id) }} className='flex w-[35%]' >
                                                    <span className='my-auto cursor-pointer' ><img className='h-9 w-9 rounded-full' src={user.avatar} alt="" /></span>
                                                    <span className='grid cursor-pointer' >
                                                        <span className='p-2 text-gray-800 text-md font-semibold cursor-pointer'>{user.full_name}</span>
                                                        <span className='p-2 text-gray-600 text-sm -mt-5 '>{user.email}</span>
                                                    </span>
                                                </td>
                                                <td className='text-gray-500 text-sm font-bold text-center my-auto w-[20%] '>
                                                    {user.role}
                                                </td>
                                                <td className='text-gray-500 text-sm font-bold text-center  my-auto w-[20%] '>
                                                    {activeStatus(user.last_active)}
                                                </td>
                                                <td className='text-gray-500 text-sm font-bold text-center  my-auto  w-[20%]'>
                                                    {formatDate(user.createdAt)}
                                                </td>
                                                <td className='text-gray-500 space-x-3 text-center font-bold my-auto flex text-2xl w-[10%] p-3'>
                                                    {
                                                      localData?.user?._id === user._id ? ' ':
                                                      <RiDeleteBin6Line onClick={() => deleteUser(user._id)} className='hover:border hover:bg-red-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl cursor-pointer' />
                                                    }
                                                    
                                                </td>

                                            </tr>
                                            <tr >
                                                {showProfile && user._id == userId ? <UserProfileAdmin imgurl={user.avatar} setState={setShowProfile} fullname={user.full_name} Email={user.email} userName={user.username} MobileNumber={user.mobile_number} Degree={user.graduation_details ? user.graduation_details.degree : null} Specialization={user.graduation_details ? user.graduation_details.specialization : null}
                                                    StartYear={user.graduation_details ? user.graduation_details.start_year : null} EndYear={user.graduation_details ? user.graduation_details.end_year : null} CompanyName={user.company_details ? user.company_details.company_name : null} Desination={user.company_details ? user.company_details.designation : null} StartDate={user.company_details ? user.company_details.start_date : null} EndDate={user.company_details ? user.company_details.end_date : null} /> : ''
                                                }
                                            </tr>
                                        </>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div> */}

                <div name='alumni-table-data' className=' bg-white w-full mt-[5%] rounded-md shadow-md'>
                    <div className='flex'>
                        <div className='w-[98%] h-[70px] overflow-auto bg-gradient-to-tr from-blue-600 to-blue-400 rounded-md shadow-lg my-2 mx-auto -mt-6'>
                            <div className=' text-xl w-1/5 my-auto  text-white p-5 '>Alumni</div>
                        </div>
                    </div>

                    <div className=' font-helvetica flex flex-col w-[97%]  mt-6 mx-auto'>
                        <table>
                            <thead >
                                <tr className=' flex justify-between border-b-2 '>
                                    <th className='text-left text-gray-400 text-sm w-[35%] '>
                                        <span>Name</span>
                                    </th>
                                    <th className='text-gray-400 text-sm w-[20%]'>
                                        Role
                                    </th>
                                    <th className='text-gray-400 text-sm w-[20%] '>
                                        Status
                                    </th>
                                    <th className='text-gray-400 text-sm w-[20%]'>
                                        Join
                                    </th>
                                    <th className='text-gray-400 text-sm w-[10%] '>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users && users.filter(user => user.role === "Alumni").map((user) => (
                                        <>
                                            <tr key={user._id} className='flex justify-between border-b-2 ' >
                                                <td onClick={() => { setShowProfile(true), setUserId(user._id), setShowUpdatediv(false) }} className='flex w-[35%]' >
                                                    <span className='my-auto cursor-pointer' >
                                                        <img
                                                            className="h-9 w-9 rounded-full"
                                                            src={user.avatar ? user.avatar : DEFAULT_IMG}
                                                            alt=""
                                                        /></span>
                                                    <span className='grid cursor-pointer'>
                                                        <span className='p-2 text-gray-800 text-md font-semibold cursor-pointer'>{user.full_name}</span>
                                                        <span className='p-2 text-gray-600 text-sm -mt-5 '>{user.email}</span>
                                                    </span>
                                                </td>
                                                <td className='text-gray-500 text-sm font-bold text-center my-auto w-[20%] '>
                                                    {user.role}
                                                </td>
                                                <td className='text-gray-500 text-sm font-bold text-center  my-auto w-[20%] '>
                                                    {activeStatus(user.last_active)}
                                                </td>
                                                <td className='text-gray-500 text-sm font-bold text-center  my-auto  w-[20%]'>
                                                    {formatDate(user.createdAt)}
                                                </td>
                                                <td className='text-gray-500 space-x-3 text-center font-bold my-auto flex text-2xl w-[10%] p-3'>
                                                    {showUpdatediv && user._id == userId ? <FaRegWindowClose onClick={() => setShowUpdatediv(false)} className='hover:bg-red-800 hover:text-white rounded-md  font-semibold hover:p-1 cursor-pointer' /> :
                                                        <TbEdit onClick={() => { CheckSpecificUser(user._id), setShowProfile(false), setShowUpdatediv(true) }} className='hover:border hover:bg-yellow-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl cursor-pointer ' />
                                                    }
                                                    <RiDeleteBin6Line onClick={() => deleteUser(user._id)} className='hover:border hover:bg-red-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl cursor-pointer' />
                                                </td>


                                            </tr>
                                            <tr>
                                                {showUpdatediv && userId === user._id ? <div className='relative border-4 rounded-md p-3 mx-auto my-3'>
                                                    <UserProfileUpdateAdmin newRole={newrole} id={user._id} Role={user.role} fullname={user.full_name} Email={user.email} userName={user.username} MobileNumber={user.mobile_number} Degree={user.graduation_details.degree} Specialization={user.graduation_details.specialization}
                                                        StartYear={user.graduation_details.start_year} EndYear={user.graduation_details.end_year} CompanyName={user.company_details ? user.company_details.company_name : "Null"} Desination={user.company_details ? user.company_details.designation : 'Null'} StartDate={user.company_details ? user.company_details.start_date : `01/01/2001`} EndDate={user.company_details ? user.company_details.end_date : '01/01/2002'} setUsers={setUsers} hideUpdateDiv={showUpdatediv} />
                                                </div> : ''
                                                }
                                            </tr>
                                            <tr>
                                                {showProfile && user._id == userId ? <UserProfileAdmin imgurl={user.avatar} setState={setShowProfile} fullname={user.full_name} Email={user.email} userName={user.username} MobileNumber={user.mobile_number} Degree={user.graduation_details.degree} Specialization={user.graduation_details.specialization}
                                                    StartYear={user.graduation_details.start_year} EndYear={user.graduation_details.end_year} CompanyName={user.company_details ? user.company_details.company_name : null} Desination={user.company_details ? user.company_details.designation : null} StartDate={user.company_details ? user.company_details.start_date : null} EndDate={user.company_details ? user.company_details.end_date : null} /> : ''
                                                }
                                            </tr>
                                        </>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div name='student-table-data' className=' bg-white w-full mt-[5%]  rounded-md shadow-md'>
                    <div className='flex'>
                        <div className='w-[98%] h-[70px] overflow-auto bg-gradient-to-tr from-blue-600 to-blue-400 rounded-md shadow-lg my-2 mx-auto -mt-6'>
                            <div className=' text-xl w-1/5 my-auto  text-white p-5 '>Students</div>
                        </div>
                    </div>

                    <div className=' font-helvetica flex flex-col w-[97%]  mt-6 mx-auto'>
                        <table>
                            <thead >
                                <tr className=' flex justify-between border-b-2 '>
                                    <th className='text-left text-gray-400 text-sm w-[35%] '>
                                        <span>Name</span>
                                    </th>
                                    <th className='text-gray-400 text-sm w-[20%]'>
                                        Role
                                    </th>
                                    <th className='text-gray-400 text-sm w-[20%] '>
                                        Status
                                    </th>
                                    <th className='text-gray-400 text-sm w-[20%]'>
                                        Join
                                    </th>
                                    <th className='text-gray-400 text-sm w-[10%] '>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users && users.filter(user => user.role === "Student").map((user) => (
                                        <>
                                            <tr key={user._id} className='flex justify-between border-b-2 ' >
                                                <td onClick={() => { setShowProfile(true), setUserId(user._id), setShowUpdatediv(false) }} className='flex w-[35%]' >
                                                    <span className='my-auto cursor-pointer' >
                                                        <img
                                                            className="h-9 w-9 rounded-full"
                                                            src={user.avatar ? user.avatar : DEFAULT_IMG}
                                                            alt=""
                                                        />
                                                    </span>
                                                    <span className='grid cursor-pointer' >
                                                        <span className='p-2 text-gray-800 text-md font-semibold cursor-pointer'>{user.full_name}</span>
                                                        <span className='p-2 text-gray-600 text-sm -mt-5 '>{user.email}</span>
                                                    </span>
                                                </td>
                                                <td className='text-gray-500 text-sm font-bold text-center my-auto w-[20%] '>
                                                    {user.role}
                                                </td>
                                                <td className='text-gray-500 text-sm font-bold text-center  my-auto w-[20%] '>
                                                    {activeStatus(user.last_active)}
                                                </td>
                                                <td className='text-gray-500 text-sm font-bold text-center  my-auto  w-[20%]'>
                                                    {formatDate(user.createdAt)}
                                                </td>
                                                <td className='text-gray-500 space-x-3 text-center font-bold my-auto flex text-2xl w-[10%] p-3'>
                                                    {showUpdatediv && user._id == userId ? <FaRegWindowClose onClick={() => setShowUpdatediv(false)} className='hover:bg-red-800 hover:text-white rounded-md  font-semibold hover:p-1 cursor-pointer' /> :
                                                        <TbEdit onClick={() => { setShowUpdatediv(true), CheckSpecificUser(user._id), setShowProfile(false) }} className='hover:border hover:bg-yellow-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl cursor-pointer ' />
                                                    }
                                                    <RiDeleteBin6Line onClick={() => deleteUser(user._id)} className='hover:border hover:bg-red-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl cursor-pointer' />
                                                </td>
                                            </tr>
                                            <tr>
                                                {showUpdatediv && userId === user._id ? <div className='relative border-4 rounded-md p-3 mx-auto my-3'>
                                                    <UserProfileUpdateAdmin id={user._id} Role={user.role} fullname={user.full_name} Email={user.email} userName={user.username} MobileNumber={user.mobile_number} Degree={user.graduation_details.degree} Specialization={user.graduation_details.specialization} StartYear={user.graduation_details.start_year} EndYear={user.graduation_details.end_year} CompanyName={user.company_details ? user.company_details.company_name : "Null"} Desination={user.company_details ? user.company_details.designation : 'Null'} StartDate={user.company_details ? user.company_details.start_date : `01/01/2001`} EndDate={user.company_details ? user.company_details.end_date : '01/01/2002'} setUsers={setUsers} hideUpdateDiv={showUpdatediv} />
                                                </div> : ''
                                                }
                                            </tr>
                                            <tr>
                                                {showProfile && user._id == userId ? <UserProfileAdmin imgurl={user.avatar} setState={setShowProfile} fullname={user.full_name} Email={user.email} userName={user.username} MobileNumber={user.mobile_number} Degree={user.graduation_details.degree} Specialization={user.graduation_details.specialization} StartYear={user.graduation_details.start_year} EndYear={user.graduation_details.end_year} CompanyName={user.company_details ? user.company_details.company_name : null} Desination={user.company_details ? user.company_details.designation : null} StartDate={user.company_details ? user.company_details.start_date : null} EndDate={user.company_details ? user.company_details.end_date : null} /> : ''
                                                }
                                            </tr>
                                        </>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}