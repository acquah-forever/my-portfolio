import React from 'react'
import { motion } from 'motion/react'


const Skills = ({ front }) => {
    const LucideComponent = front.svg

    let parent = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.7 } }
    }

    let children = {
        hidden: { opacity: 0, y: -71 },
        visible: { opacity: 1, y: 0 }
    }


    return (
        <motion.div variants={{parent}} initial="hidden" whileInView="visible" viewport={{once:false, margin:"-100px"}} className='flex items-center justify-center gap-2 p-4'>
            <motion.div variants={children} className='text-sky-500'>
                <LucideComponent size={32} />
            </motion.div>
            <motion.div variants={children} className='text-center font-semibold text-sm'>{front.name}</motion.div>
        </motion.div>
    )
}

export default Skills
