import React, { useEffect, useState } from 'react'
import { MdPostAdd, TbEdit, RiDeleteBin6Line, FaRegWindowClose, BiNotification } from '../../Components/ReactIconsIndex'
import { WhoAmI } from '../../hooks/useFetch'
import { DeletePost, GetAllJobPost } from '../../hooks/useFetchJobs'
import { toast } from 'react-toastify'

function PostedJobs() {
    const [userData, setUserData] = useState('')
    const [jobs, setJobs] = useState('')
    const [jobId, setJobId] = useState('')
    const [jobprevId, setJobprevId] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await GetAllJobPost();
                setJobs(fetchedData.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (jobs.length === 0 || jobprevId != jobId) {
            fetchData();
            handleUserData();
            setJobprevId(jobId)
        }
    }, [jobs, jobId]);

    const handleUserData = async () => {
        let userdata = await WhoAmI();
        setUserData(userdata.data)
    }


    const deletePost = async (id) => {
        let response = await DeletePost(id)
        if (response?.statusCode === 200) {
            toast.success("Post Deleted Successfully.")
            setJobId(id)
            setJobs('')
        } else {
            toast.error(response?.response?.message)
        }
    }

    return (
        <div className='min-h-[100vh] w-[97%] mx-auto pb-5'>
            <div>
                <div className='w-[100%] mt-12 bg-white rounded-lg min-h-[100vh] pb-4'>
                    <div className="flex">
                        <div className='w-[98%] h-[60px] mx-auto bg-gradient-to-tr from-purple-500 to-purple-300  rounded-md flex  my-6 -mt-7 shadow-lg ]' >
                            <ul className='flex justify-between w-full'>
                                <li><span className='w-full inline-flex  text-xl text-white font-semibold py-3 px-3 capitalize'>{"jobs Posted"}</span></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className=' font-helvetica flex flex-col w-[97%]  mt-6 mx-auto'>
                            <table>
                                <thead >
                                    <tr className=' flex justify-between '>
                                        <th className='text-gray-400 text-sm'>
                                            Company
                                        </th>
                                        <th className='text-gray-400 text-sm mx-auto'>
                                            Posted By
                                        </th>
                                        <th className='text-gray-400 text-sm '>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {jobs && jobs.filter(job => job.posted_by._id === userData._id).map((job) => (
                                        <tr key={job._id} className='flex justify-between ' >
                                            <td className=' w-2/6 grid'> <span className='p-2 text-gray-800 text-md font-semibold '>{job.title}</span><span className='p-2 text-gray-600 text-sm -mt-5 '>{job.posted_by.role}</span></td>
                                            <td className='text-gray-500 text-sm font-bold mx-auto my-auto w-2/6 '>{job.posted_by.full_name}</td>
                                            <td className='text-gray-500 space-x-3 font-bold flex text-2xl my-auto   p-3'>{job && job.posted_by._id === userData._id ? < RiDeleteBin6Line onClick={() => { deletePost(job._id), setJobId(job._id) }} className='hover:border hover:bg-red-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl' /> : ''}</td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostedJobs