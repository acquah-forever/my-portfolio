import React from 'react'
import useScrollProgress  from '../hooks/useScrollProgress'

const ProgressBar = () => {
    const[scrollProgress] = useScrollProgress()
  return (
    <div className='fixed top-0 left-0 w-full h-1 bg-indigo-400 z-50'>
        <div className='h-full' style={{width : `${scrollProgress}`}}>
        </div>
    </div>
  )
}

export default ProgressBar
