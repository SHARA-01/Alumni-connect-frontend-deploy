import React, { useEffect, useState } from 'react'
import { GetJobInfo } from '../../hooks/useFetchJobs'
import { useParams, Link } from 'react-router-dom'

function JobPostView() {
    const { id } = useParams();
    const [jobInfo, setJobInfo] = useState('')
    const [userId, setUserId] = useState(jobInfo && jobInfo.posted_by.full_name || "")

    useEffect(() => {
        const fetch = async () => {
            let response = await GetJobInfo(id);
            setJobInfo(response.data)
            setUserId(response.data.posted_by._id)
        }
        if (jobInfo == '') {
            fetch();
        }
    })
    
    return (
        <div className='h-auto min-h-[70vh] py-10'>
            <div className='w-[50%]  mx-auto bg-white px-10 py-10 rounded-md shadow-md shadow-black/30 space-y-4' >
                <h1 className='text-3xl text-gray-700 font-bold capitalize'>
                    {jobInfo && jobInfo?.title || ''}
                </h1>
                <h2 className='text-xl/2 text-gray-700 font-bold capitalize'>
                    {jobInfo && jobInfo?.company_name}
                </h2>
                <h3 className='text-md  text-gray-700 font-semibold capitalize'>
                    <ul className='flex space-x-4 capitalize'>
                        <li>
                            {`Location: ${jobInfo && jobInfo.location}` || ''}
                        </li>
                        <li className='text-blue-500'>{
                            jobInfo && jobInfo?.posted_by?.role != "Admin" ? <Link to={`/user/${jobInfo && jobInfo.posted_by.username}`}>{`PostedBy: ${jobInfo && jobInfo.posted_by.full_name}` || ''}</Link> : `PostedBy: ${jobInfo && jobInfo.posted_by.full_name}` || ''
                        }
                        </li>
                    </ul>
                </h3>
                <h5 className='text-md text-gray-700 font-semibold '>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: jobInfo ? jobInfo.job_description : "",
                        }}
                        className="prose text-md text-gray-700 font-semibold "
                    >
                        {/* {jobInfo && jobInfo?.job_description || ''} */}
                    </div>

                    {/* {jobInfo && jobInfo?.job_description || ''} */}
                </h5>
            </div>
        </div>
    )
}

export default JobPostView