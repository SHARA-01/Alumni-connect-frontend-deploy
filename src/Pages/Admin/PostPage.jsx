import { useState, useEffect } from 'react'
import { MdPostAdd, TbEdit, RiDeleteBin6Line, FaRegWindowClose, BiNotification } from '../../Components/ReactIconsIndex'
import { CreatePost, ToggleButton, toast } from '../../Components/index'
import { ActivePost, GetAllJobPost, DeletePost, DeactivePost } from '../../hooks/useFetchJobs'
import { Link } from 'react-router-dom'

const JobPost = () => {
    const [createPost, setCreatePost] = useState(false)
    const [postRequestVisible, setPostRequestVisible] = useState(false)
    const [jobs, setJobs] = useState('')
    const [jobId, setJobId] = useState('')
    const [jobprevId, setJobprevId] = useState(1)


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
            setJobprevId(jobId)

        }
    }, [jobs, jobId]);

    const CreatePostVisble = () => {
        setCreatePost(!createPost)
        setPostRequestVisible(!postRequestVisible)

    }
    const RequestPostVisble = () => {
        setPostRequestVisible(!postRequestVisible)
        setJobs('')
    }

    const deletePost = async (id) => {
        let response = await DeletePost(id)
        if (response?.statusCode === 200) {
            toast.success("Post Deleted SuccessFully", {
                position: 'top-center',
                autoClose: 2000,
                toastId: 1,
            })
        }
        setJobId(id)
    }



    const handleActive = async (id) => {
        const fetch = await ActivePost(id)
        if (fetch?.statusCode === 201) {
            setJobs('')
            toast.success("Post Active SuccessFully", {
                position: 'top-center',
                autoClose: 2000,
                toastId:2,
            })

        }
    }

    const handleDeActive = async (id) => {
        let fetch = await DeactivePost(id)
        if (fetch?.statusCode === 201) {
            setJobs('');
            toast.success("Post DeActive SuccessFully", {
                position: 'top-center',
                autoClose: 2000,
                toastId: 3
            })
        }
    }


    return (
        <div className='min-h-[100vh]'>
            <div>
                <div className='w-[100%] mt-12 bg-white rounded-lg min-h-[100vh] pb-4'>
                    <div className="flex">
                        <div className='w-[98%] h-[60px] mx-auto bg-gradient-to-tr  from-sky-500 to-purple-500  rounded-md flex  my-6 -mt-7 shadow-lg ]' >

                            <ul className='flex justify-between w-full'>
                                <li><span className='w-full inline-flex  text-xl text-white font-semibold py-3 px-3 capitalize'>{createPost ? "Create New Post" : postRequestVisible ? "New Post Request" : "jobs Post"}</span></li>
                                <ul className='flex justify-between'>
                                    <li>
                                        <span className='w-auto inline-flex text-xl text-white font-semibold py-3 px-3 cursor-pointer'>
                                            {postRequestVisible ? createPost ? "" : <FaRegWindowClose onClick={RequestPostVisble} size={29} className='hover:text-purple-800' /> : <BiNotification onClick={RequestPostVisble} size={29} className='hover:text-purple-800' />}
                                        </span>
                                    </li>
                                    <li>
                                        <span className='w-auto inline-flex text-xl text-white font-semibold py-3 px-3 cursor-pointer'>
                                            {
                                                createPost ? <FaRegWindowClose onClick={CreatePostVisble} size={29} className='hover:text-purple-800' /> :
                                                    <MdPostAdd onClick={CreatePostVisble} size={30} className='hover:text-purple-800' />
                                            }
                                        </span>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>

                    {createPost ? <div className='w-[80%] h-auto bg-gray-200 rounded-lg mx-auto my-10 bg-blur flex  flex-wrap '>
                        <CreatePost CreatePostDivhide={setCreatePost} hideNewpostdiv={setPostRequestVisible} setsState={setJobs} />

                    </div>
                        : <div>
                            <div className=' font-helvetica flex flex-col w-[97%]  mt-6 mx-auto'>
                                <table>
                                    <thead >
                                        <tr className=' flex justify-between border-b-2 '>
                                            <th className='text-gray-400 text-sm '>
                                                Company
                                            </th>

                                            <th className='text-gray-400 text-sm mx-auto '>
                                                Posted By
                                            </th>
                                            <th className='text-gray-400 text-sm '>
                                                Action
                                            </th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {
                                            postRequestVisible ?
                                                jobs && jobs.filter(job => job.is_active === false).map((job) => (
                                                    <tr key={job._id} className='flex justify-between border-b-2 '>
                                                        <Link className='w-2/6' to={`${job && job._id}`}>
                                                            <td className='w-2/6 grid cursor-pointer'>
                                                                <span className='p-2 text-gray-800 text-md font-semibold '>{job.title}</span>
                                                                <span className='p-2 text-gray-600 text-sm -mt-5 '>{job.posted_by.role}</span>
                                                            </td>
                                                        </Link>
                                                        <td className='text-gray-500 text-sm font-bold mx-auto my-auto w-2/6 '>
                                                            {job.posted_by.full_name}
                                                        </td>
                                                        <td className='text-gray-500 space-x-3 font-bold flex text-2xl my-auto  p-3'>
                                                            <ul>{
                                                                job?.posted_by?.role === "Admin" ? '' : <li onClick={() => { handleActive(job._id), setJobId(job._id) }} >
                                                                    {<ToggleButton is_active={job.is_active} />}
                                                                </li>
                                                            }
                                                            </ul>
                                                            {job?.posted_by?.role === "Admin" ? < RiDeleteBin6Line onClick={() => deletePost(job._id)} className='hover:border hover:bg-red-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl' /> : ''}
                                                        </td>
                                                    </tr>
                                                ))
                                                :
                                                jobs && jobs.filter(job => job.is_active === true).map((job) => (
                                                    <tr key={job._id} className='flex justify-between border-b-2 '>

                                                        <td className='w-2/6 grid cursor-pointer'>
                                                            <Link className=' grid' to={`${job && job._id}`}>
                                                                <span className='p-2 text-gray-800 text-md font-semibold '>{job.title}</span>
                                                                <span className='p-2 text-gray-600 text-sm -mt-5 '>{job.posted_by.role}</span>
                                                            </Link>
                                                        </td>

                                                        <td className='text-gray-500 text-sm font-bold mx-auto my-auto w-2/6  '>
                                                            <Link to={`/admin/users/${job && job.posted_by.username}`}>
                                                                {job.posted_by.full_name}
                                                            </Link>
                                                        </td>
                                                        <td className='text-gray-500 space-x-3 font-bold flex text-2xl my-auto  p-3'>
                                                            <ul>{
                                                                job?.posted_by?.role === "Admin" ? '' : <li onClick={() => { handleDeActive(job._id), setJobId(job._id) }} >
                                                                    {<ToggleButton is_active={job.is_active} />}
                                                                </li>
                                                            }

                                                            </ul>
                                                            {job?.posted_by?.role === "Admin" ? < RiDeleteBin6Line onClick={() => deletePost(job._id)} className='hover:border hover:bg-red-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl' /> : ''}
                                                        </td>
                                                    </tr>
                                                ))
                                        }
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>

    )
}

export default JobPost