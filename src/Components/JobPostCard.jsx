import React from 'react'

function JobPostCard({title, desination, location, posted_by, role}) {
  return (
    <div>
        <ul className='flex flex-col space-y-2 shadow-md p-4 rounded-md border-t-2 hover:shadow-xl bg-white'>
            <ul className='flex flex-col space-y-1'>
            <li className='text-2xl uppercase font-semibold text-gray-700'>{title ? title : "title"}</li>
            <li className='text-md capitalize text-zinc-600 font-semibold'>{desination ? desination : ""}</li>
            </ul>
            <ul className='flex space-x-4'>
            <li className='text-md capitalize text-zinc-700 font-semibold'> location : {location ? location : ""}</li>
            <li className='text-md capitalize text-green-600 font-semibold'>Posted By : { posted_by && role ? `${posted_by}(${role})`: ''}</li>
            </ul>
        </ul>
    </div>
  )
}

export default JobPostCard