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
        <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} id='about' className=' p-10 mb-20 space-y-7 flex flex-col justify-center items-center'>
            <motion.h1 variants={children} className=' text-4xl font-bold'>About <span className='bg-linear-to-bl from-sky-500 via-violet-300 to-indigo-400 bg-clip-text text-transparent'>Me</span></motion.h1>
            <motion.h1 variants={children} className='text-md text-slate-600 dark:text-slate-300 text-left'>
                I’m Kojo, a frontend engineer focused on crafting fast, accessible, and well-structured web interfaces. I work mainly with React and JavaScript, and I’m currently pushing further into full-web development to broaden my impact.
                I’m particularly interested in building tools that improve workflows of my current projects. When I’m away from the keyboard, I’m usually exploring open-source ecosystems, refining my perspective on developer experience, or relaxing with travelling.
            </motion.h1>
            <h1>5+</h1>
            <h1>Projects Built</h1>
            <h1>1+</h1>
            <h1>Years Learning</h1>
            <h1>∞</h1>
            <h1>Relaxing</h1>



        </motion.div>
    )
}

export default About
