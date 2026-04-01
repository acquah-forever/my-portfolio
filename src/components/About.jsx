import React from 'react'
import { motion } from "motion/react"

const About = () => {

    let parent = {
        hidden: { opacity: 0, y: -90 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 1, ease: "easeOut", duration: 1.2 } }

    }
    let children = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount:0.3 }} className=' p-10 mb-20 space-y-7 flex flex-col justify-center items-center'>
            <motion.h1 variants={children} className='uppercase text-4xl font-semibold'>About Me</motion.h1>
            <motion.h1 variants={children} className='text-2xl text-slate-600 dark:text-slate-300 text-center'>As a Frontend Developer focused on front-end development with React, I’m driven by a commitment
                <br />
                to meeting client demands. I develop engaging, efficient web applications designed
                <br />
                to elevate the user experience and improve the web for everyone.</motion.h1>
        </motion.div>
    )
}

export default About
