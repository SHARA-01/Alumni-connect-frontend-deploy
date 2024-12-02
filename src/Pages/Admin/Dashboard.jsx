import React, { useEffect , useState} from 'react'
import { FetchAllUser } from '../../hooks/useFetch'
import { BsClipboardDataFill, FaUsers, FaUsersBetweenLines, MdOutlineAdminPanelSettings, PiClockClockwiseBold } from '../../Components/ReactIconsIndex'
import { GetAllJobPost } from '../../hooks/useFetchJobs'

export default function Dashboard() {
    const [users, setUsers] = useState('')
    const [jobs, setJobs] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await FetchAllUser();
                setUsers(fetchedData?.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const fetchJobs = async() => {
            try {
                const fetchedJobs = await GetAllJobPost();
                setJobs(fetchedJobs?.data);
            } catch (error) {
                console.error('Error fetch  ing jobs:', error);
            }
        }
        if (users?.length === 0) {
            fetchData();
            fetchJobs();
        }
    }, [users, jobs]);

    return (
        <div id='Dashboard' className='min-h-[73vh]'>
            <div id='first-row' className=' mt-[7%] flex justify-between'>
                <div className=' flex  justify-between bg-white w-1/3 h-[130px] rounded-md mt-9 p-2 mx-1 shadow-md'>
                    <div className='w-2/3 space-y-12'>
                        <div className='bg-[rgba(0,0,0,0.9)] w-[65px] rounded-md h-[55px] p-3 -mt-8 shadow-sm '>
                            <BsClipboardDataFill size={25} className='m-auto text-white outline-none ' />
                        </div>
                        <div className=' w-full mx-1'>
                            <span className='font-bold text-green-500'>0%</span><span className='text-gray-500'>   than last week</span>
                        </div>
                    </div>
                    <div className='grid h-[50px] text-right'>
                        <span className=' text-md mx-3 text-gray-500 ' >
                            Members
                        </span>
                        <span className=' font-bold text-2xl text-gray-700 mx-4'>
                            {users?.length}
                        </span>
                    </div>
                </div>

                <div className=' flex  justify-between bg-white w-1/3 h-[130px] rounded-md mt-9 p-2 mx-1 shadow-md'>
                    <div className='w-2/3 space-y-12'>
                        <div className='bg-sky-500 w-[65px] rounded-md h-[55px] p-3 -mt-8 shadow-sm '>
                            <FaUsersBetweenLines size={25} className='m-auto text-white outline-none ' />
                        </div>
                        <div className=' w-full mx-1'>
                            <span className='font-bold text-green-500'>0%</span><span className='text-gray-500'>   than last week</span>
                        </div>
                    </div>
                    <div className='grid h-[50px] text-right'>
                        <span className=' text-md mx-3 text-gray-500 ' >
                            Alumnis
                        </span>
                        <span className=' font-bold text-2xl text-gray-700 mx-4'>
                           {users && users?.filter(user => user.role === "Alumni").length || 0}
                        </span>
                    </div>
                </div>

                <div className=' flex  justify-between bg-white w-1/3 h-[130px] rounded-md mt-9 p-2 mx-1 shadow-md'>
                    <div className='w-2/3 space-y-12'>
                        <div className='bg-pink-500 w-[65px] rounded-md h-[55px] p-3 -mt-8 shadow-lg '>
                            <FaUsers size={25} className='m-auto text-white outline-none ' />
                        </div>
                        <div className=' w-full mx-1'>
                            <span className='font-bold text-green-500'>0%</span><span className='text-gray-500'>   than last week</span>
                        </div>
                    </div>
                    <div className='grid h-[50px] text-right'>
                        <span className=' text-md mx-3 text-gray-500 ' >
                            Students
                        </span>
                        <span className=' font-bold text-2xl text-gray-700 mx-4'>
                        {users && users?.filter(user => user.role === "Student").length || 0}
                        </span>
                    </div>
                </div>

                {/* <div className=' flex  justify-between bg-white w-1/3 h-[130px] rounded-md mt-9 p-2 mx-1 shadow-md'>
                    <div className='w-2/3 space-y-12'>
                        <div className='bg-green-600 w-[65px] rounded-md h-[55px] p-3 -mt-8 shadow-sm '>
                            <MdOutlineAdminPanelSettings size={25} className='m-auto text-white outline-none ' />
                        </div>
                        <div className=' w-full mx-1'>
                            <span className='font-bold text-green-500'>0%</span><span className='text-gray-500'>   than last week</span>
                        </div>
                    </div>
                    <div className='grid h-[50px] text-right'>
                        <span className=' text-md mx-3 text-gray-500 ' >
                            Admins
                        </span>
                        <span className=' font-bold text-2xl text-gray-700 mx-4'>
                        {users && users?.filter(user => user.role === "Admin").length || 0}
                        </span>
                    </div>
                </div> */}
            </div>

            <div className='w-full flex space-x-5' >
                <div className='flex flex-col w-1/3 p-4 bg-white rounded-md mt-12 shadow-md'>
                    <div className='bg-sky-600 flex w-full -mt-12 rounded-md h-[200px] shadow-md'>
                        {
                            jobs && jobs?.length !=0 ?  <span className='mx-auto my-auto text-8xl border-b-4 border-white px-6  py-6 rounded-full text-white hover:border-t-4 hover:border-b-4 hover:border-white'>{jobs.length}</span> : ''
                        }
                       
                    </div>
                    <div className=' px-3 mt-4'>
                        <span className='text-gray-700 text-lg font-semibold block '> Jobs</span>
                        <span className='text-gray-500 text-md '>All jobs posted by Admins and Alumnis </span>
                        <hr className='border  w-2/3 my-4 m-auto ' />
                        <span className='flex  space-x-2 text-gray-400 '><PiClockClockwiseBold className='my-auto' size={15} /><span className='my-auto'>Update 1 min ago </span></span>
                    </div>
                </div>

                <div className='flex flex-col w-1/3 p-4 bg-white rounded-md mt-12 shadow-md'>
                    <div className='flex bg-green-500 w-full -mt-12 rounded-md h-[200px] shadow-md'>
                        {
                             jobs && jobs.length !=0 ? <span className='mx-auto my-auto text-8xl border-b-4 border-white px-6  py-6 rounded-full text-white hover:border-t-4 hover:border-b-4 hover:border-white'>{jobs.filter(job => job.is_active === true).length}</span> : ''
                        }
                    
                    </div>
                    <div className=' px-3 mt-4'>
                        <span className='text-gray-700 text-lg font-semibold block '>Active Jobs </span>
                        <span className='text-gray-500 text-md '>Active jobs are posted by admin and verifyed by Admin job posts which posted by alumnis.</span>
                        <hr className='border  w-2/3 my-4 m-auto ' />
                        <span className='flex  space-x-2 text-gray-400 '><PiClockClockwiseBold className='my-auto' size={15} /><span className='my-auto'>Update 1 min ago </span></span>
                    </div>
                </div>

                <div className='flex flex-col w-1/3 p-4 bg-white rounded-md mt-12 shadow-md'>
                    <div className=' flex bg-gray-800 w-full -mt-12 rounded-md h-[200px] shadow-md'>
                        {
                             jobs && jobs.length !=0 ? <span className='mx-auto my-auto text-8xl border-b-4 border-white px-6  py-6 rounded-full text-white hover:border-t-4 hover:border-b-4 hover:border-white'>{jobs.filter(job => job.is_active === false).length}</span> :''
                        }
                    
                    </div>
                    <div className=' px-3 mt-4'>
                        <span className='text-gray-700 text-lg font-semibold block '>InActive Jobs</span>
                        <span className='text-gray-500 text-md '>InActive job post are directly posted by Alumnis or expired.</span>
                        <hr className='border  w-2/3 my-4 m-auto ' />
                        <span className='flex  space-x-2 text-gray-400 '><PiClockClockwiseBold className='my-auto' size={15} /><span className='my-auto'>Update 1 min ago </span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}