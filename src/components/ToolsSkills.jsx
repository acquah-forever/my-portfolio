import React from 'react'

const ToolsSkills = ({ tool }) => {
    const LucideComponent = tool.svg
    return (
        <div className='flex items-center justify-center gap-2 p-4 h-16'>
            <div className=' text-sky-500'>
                <LucideComponent size={25} />
            </div>
            <div className='text-center font-semibold text-sm'>{tool.name}</div>
        </div>
    )
}

export default ToolsSkills
