import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Card({ imgurl, name, desination, Company, Email, workingStatus, mobile_Number, className, username }) {
    const [imgError, setImgError] = useState(false);

    return (
        <div className={`flex w-full py-3  lg:max-w-[300px] ${className}`}>
            <div className="relative flex w-[100%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative flex w-[90%] mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                    {
                        imgurl && imgurl && !imgError ?
                            <img src={imgurl} alt="" className='w-1/2 rounded-full mx-auto my-auto  border-separate border-4 bg-red-300' onError={()=>setImgError(true)} />
                            :
                            <div className='flex mx-auto'>
                               { name ? <span className='w-[130px] h-[130px] border-4 rounded-full justify-center text-center my-auto text-[5rem] capitalize' > {name.charAt(0)} </span> : "#"}
                            </div>
                    }
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {name}
                    </h5>
                    <p className="block font-sans text-base  leading-relaxed text-inherit antialiased">
                        {desination}
                    </p>
                </div>
                <div className="p-4 pt-0">
                    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                      <Link to={`/user/${username}`}>Know More</Link>  
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card