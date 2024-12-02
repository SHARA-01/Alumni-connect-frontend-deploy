import React from 'react'
import { TiSocialLinkedin, VscGithub, BsTwitterX, FiInstagram } from '../Components/ReactIconsIndex'

function User_Footer() {
  return (
    <footer className=' bg-gray-300 w-full pt-5 '>
      <div className='sm:grid space-y-5 px-1  mx-6 lg:flex lg:justify-between lg:mx-[9%]'>
        <div className='py-1'>
          <span className='text-xl font-bold'>Alumni🔗Connect</span>
          <div className='flex my-5 space-x-4 cursor-pointer'>
            <TiSocialLinkedin size={40} className='bg-white text-blue-400 rounded-full shadow-md p-1 font-semibold' />
            <VscGithub size={40} className='bg-gradient-to-tr from-gray-100 to-gray-50 shadow-md  rounded-full p-2 font-semibold' />
            <BsTwitterX size={40} className='bg-white rounded-full p-2  shadow-md  font-semibold' />
          </div>
        </div>
      </div>
      <div className='text-center text-md font-semibold py-2 '>
      <hr className='w-full block ' />
<span className=' text-gray-500'>2024 ©️ Copyright Reserved</span>
      </div>

    </footer>
  )
}

export default User_Footer