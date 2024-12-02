import React, { useState, useEffect } from 'react'
import { FetchAllUser, FetchUserWithQuery } from '../hooks/useFetch';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Searchbar({ value, onChange , setState}) {
    const [isMobile, setIsMobile] = useState(false);
    const [query, setQuery] = useState('')
    const [dispalyQuerydiv, setQueryDiv] = useState(false)
    const [queryData, setQueryData] = useState('')

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust the width as needed for your definition of mobile
        };
        checkScreenSize();     // Initial check
        window.addEventListener("resize", checkScreenSize);    // Event listener for screen size change
        return () => window.removeEventListener("resize", checkScreenSize);   // Clean up event listener
    }, []);

    const fetchQuery = async () => {
        let response = await FetchUserWithQuery(query);
        if (response.statusCode === 200) {
            toast.success(response?.message,{
                position: "top-center",
                autoClose: 200
            })
            setState(response?.data)
            // setState = response?.data
            setQueryDiv(true)
        }
        else {
            toast.error(response?.response?.message)
        }
    }

    return (
        <div>
            {
                isMobile ? <div className='w-auto lg:w-[70%] flex mx-auto justify-center min-h-[10vh]'>
                    <div className='w-full flex justify-center '>
                        <input type='text' className='py-2 my-5 h-[3rem]  w-[70%] lg:w-[75%] px-8 rounded-full bg-blur outline-none border border-blue-500' value={value} placeholder='Search ' onChange={(e) => setQuery(e.target.value)} />
                        <button className=' w-[36%] lg:w-[13%] h-[3rem]  my-auto  bg-blue-500 rounded-full  -ml-[3rem] pr-4 lg:-ml-10  text-end lg:pr-4 lg:px-5 text-white font-semibold active:bg-blue-600 '>Search</button>
                    </div>
                </div>
                    :
                    <div>
                    <div className='w-auto lg:w-[70%] flex mx-auto justify-center h-auto sticky top-2 flex-col '>
                        <div className='w-full flex justify-center' >
                            <input type='text' className='py-2 my-5 h-12 w-[75%] lg:w-[70%] px-8 rounded-full bg-blur outline-none border border-blue-500' value={query} placeholder='Search' onChange={(e) => setQuery(e.target.value)} />
                            <button onClick={() => { fetchQuery() }} className=' lg:w-[12%] h-[3rem] flex  my-auto px-6 text-xl py-2 bg-blue-500 rounded-full  lg:-ml-24 align-middle  lg:text-center  text-white font-semibold active:bg-blue-600 outline-none z-10'>Search</button>
                            </div>
                        </div>
                    </div>
            }
        </div>

    )
}

export default Searchbar