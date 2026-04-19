import React from 'react'
import useScrollProgress  from '../hooks/useScrollProgress'

const ProgressBar = () => {
    const scrollProgress = useScrollProgress()
  return (
    <div className='fixed top-13 left-0 w-full h-1 bg-gray-200 z-50'>
        <div className='h-full bg-linear-to-r from-blue-500 to-purple-600 transition-[width] duration-150' style={{width : `${scrollProgress}%`}}>
        </div>
    </div>
  )
}

export default ProgressBar
