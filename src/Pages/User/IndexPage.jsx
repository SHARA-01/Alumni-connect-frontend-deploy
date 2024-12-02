import React, { useEffect, useState } from 'react'
import { AlumniProfileCard, Searchbar } from '../../Components/index'
import { FetchAllUser } from '../../hooks/useFetch'


function IndexPage() {

    const [searchValue, setSearchValue] = useState('')
    const [users, setUsers] = useState('')
    const [queryData, setQueryData] = useState('')


    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await FetchAllUser();
                setUsers(fetchedData?.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (users?.length === 0) {
            fetchData();
        }
    }, [users]);

    console.log(queryData)

    return (
        <div className='mx-3 pb-5 '>
            <div className='lg:w-[80vw] mx-auto h-auto sticky top-4 my-[10vh] z-10'>
                <Searchbar value={searchValue} onChange={setSearchValue} setState={(data)=>setQueryData(data)} />
            </div>
            <div className='w-full text-center py-10 felx'>
                <span className='text-4xl text-gray-600 block bg-clip-text'>Our Proud Senior's</span>
                <hr className='my-5 w-[22%] mx-auto h-[0.1rem]  rounded-xl shadow-md bg-gray-300 ' />
            </div>
            <div className='space-y-5uu lg:flex lg:flex-wrap lg:space-x-5 lg:space-y-10  mt-10 lg:justify-center mx-4 '>
                {
                  queryData ?  queryData && queryData.map((user, index) => (
                        <AlumniProfileCard key={index} name={user.full_name} desination={user.company_details?.company_name} username={user?.username} imgurl={user && user.avatar} className='mt-10' />
                    )) :
                    users && users.filter(user => user.role === "Alumni").map((user, index) => (
                        <AlumniProfileCard key={index} name={user.full_name} desination={user.company_details?.company_name} username={user?.username} imgurl={user && user.avatar} className='mt-10' />
                    ))
                }
            </div>
        </div>
    )
}

export default IndexPage