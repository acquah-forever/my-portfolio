import React from 'react'


const Skills = ({ front }) => {
    const LucideComponent = front.svg

    return (
        <div className='flex items-center gap-1'>
            <div className=' text-sky-500'>
                <LucideComponent size={25} />
            </div>
            <div className='text-center font-semibold text-sm'>{front.name}</div>
        </div>
    )
}

export default Skills
