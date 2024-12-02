import React, { useState } from 'react'
import { ActivePost } from '../hooks/useFetchJobs'

const ToggleButton = (is_active, id, setJobId) => {
  const [isChecked, setIsChecked] = useState(is_active.is_active || false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div>
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-3 w-8 rounded-full ${isChecked ? 'bg-green-700' : 'bg-red-400'
              }`}
          ></div>
          <div
            className={`absolute left-0 -top-1 flex h-5 w-5 items-center justify-center rounded-full  border transition ${isChecked ? 'bg-green-900 border-gray-800 translate-x-full' : 'bg-red-800'
              }`}
          ></div>
        </div>
      </label>
    </div   >
  )
}

export default ToggleButton
