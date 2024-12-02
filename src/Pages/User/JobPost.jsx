import React, { useEffect, useState } from 'react'
import { JobPostCard, Searchbar, toast } from '../../Components/index'
import { GetAllJobPost, GetJobsWithQUery } from '../../hooks/useFetchJobs'
import { Link } from 'react-router-dom'

function JobPost() {
    const [jobs, setJobs] = useState('')
    const [query, setQuery] = useState('')
    const [queryData, setQueryData] = useState('')
    const [dispalyQuerydiv, setQueryDiv] = useState(false)
    
    useEffect(() => {
        const fetch = async () => {
            let response = await GetAllJobPost();
            setJobs(response.data)
        }
        fetch()
    }, [])

    const queryFetchJobs = async()=> {
        let response = await GetJobsWithQUery(query)
        if(response?.statusCode === 200){
            toast.success(response?.message,{
                position: "top-center",
                autoClose: 200
            });
            setQueryData(response?.data)
            setQueryDiv(true)
        }
    }

    return (
        <div className='w-full mx-8 p-4'>
            <div className='w-[60%] m-4 space-y-4 sticky-bg-white-blur top-5 '>
                <ul className='flex px-3 w-auto text-gray-400 font-bold text-xl border-b border-t border-gray-400 rounded-md  justify-between h-[3rem]'>
                    <li className='w-1/4 my-auto' >Jobs and Interships </li>
                    <li className='w-3/4 flex my-auto  flex-col' >
                        <div className='w-full flex justify-end my-auto ' action="">
                            <input type='text' className='w-[75%] px-4 py-1 rounded-md bg-blur outline-none border border-blue-500 align-middle text-gray-600 text-md' value={query} placeholder='Search' onChange={(e) => setQuery(e.target.value)} />
                            <button onClick={queryFetchJobs} className='px-4 -ml-10 text-center py-1 m\y-auto  bg-blue-500 rounded-md   text-white font-semibold active:bg-blue-600 outline-none z-10 '>Search</button>
                        </div>
                    </li></ul>

            </div>
            <div className='w-[60%] m-4 space-y-4 '>
                {   
                    queryData ? queryData?.map((job) => (
                        <div key={job._id}>
                            <Link to={`/user/job/${job &&  job._id}`}>  <JobPostCard title={job.title} location={job.location} posted_by={job.posted_by.full_name} role={job.posted_by.role} /> </Link>
                        </div>
                    ))
                    :
                    jobs && jobs.map((job) => (
                        <div key={job._id}>
                            <Link to={`/user/job/${job &&  job._id}`}>  <JobPostCard title={job.title} location={job.location} posted_by={job.posted_by.full_name} role={job.posted_by.role}  /> </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default JobPost