import React, { useState } from 'react'
import { motion } from "motion/react"
import { getAbout } from '../data/about'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const About = () => {
    const [activeTab, setActiveTab] = useState('About')

    const data2 = getAbout()

    let parent = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.7 } }
    }

    let children = {
        hidden: { opacity: 0, y: -71 },
        visible: { opacity: 1, y: 0 }
    }



    return (
        <div id='about' className='bg-slate-400/40 mt-20 min-h-screen w-full grid grid-cols-1 space-y-10 justify-items-center items-center lg:grid-cols-2 lg:justify-items-center md:gap-10'>
            <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{once:false, margin:"-100px"}} className='md:max-w-xl w-full flex flex-col justify-center px-10 items-center'>

                <motion.h1 variants={children} className='text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-5 sm:mb-7'>About <span className='bg-linear-to-bl from-sky-500 via-violet-300 to-indigo-400 bg-clip-text text-transparent'>Me</span></motion.h1>
                <motion.div variants={children} className='w-full max-w-md'>
                    <p className='text-base text-justify text-slate-600 dark:text-slate-300 mb-5 sm:mb-7'>
                        I'm Kojo, a frontend engineer focused on crafting fast, accessible, and well-structured web interfaces. I work mainly with React and JavaScript, and I'm currently pushing further into full-web development to broaden my impact. I'm particularly interested in building tools that improve workflows of my current projects. When I'm away from the keyboard, I'm usually exploring open-source ecosystems, refining my perspective on developer experience, or relaxing with travelling.
                    </p>
                </motion.div>

                <div variants={children} className='flex flex-wrap gap-4 sm:gap-6 justify-start'>

                    <motion.div variants={children}>
                        <h1 className='text-center text-sky-500 font-bold text-3xl sm:text-4xl'>5+</h1>
                        <h1 className='text-sm sm:text-base text-slate-700 dark:text-slate-400'>Projects Built</h1>
                    </motion.div>

                    <motion.div variants={children}>
                        <h1 className='text-center text-sky-500 font-bold text-3xl sm:text-4xl'>1+</h1>
                        <h1 className='text-sm sm:text-base text-slate-700 dark:text-slate-400'>Years Learning</h1>
                    </motion.div>

                    <motion.div variants={children}>
                        <h1 className='text-center text-sky-500 font-bold text-3xl sm:text-4xl'>∞</h1>
                        <h1 className='text-sm sm:text-base text-slate-700 dark:text-slate-400'>Coding</h1>
                    </motion.div>

                </div>

            </motion.div>

            <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{once:false, margin:"-100px"}} className="w-full max-w-lg aspect-4/3  border bg-slate-300/0 md:mx-0">
                <div className='flex items-center mt-3'>
                    <div className='px-3 flex space-x-1'>
                        <div className='w-3 h-3 bg-red-400 rounded-full'></div>
                        <div className='w-3 h-3 bg-amber-300 rounded-full'></div>
                        <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                    </div>
                </div>
                <div className='border-t mt-2 border-slate-400'></div>
                <div className='mx-1 mt-2 flex flex-wrap gap-1'>
                    <motion.button variants={children} className={`px-4 sm:px-5 py-2 sm:py-3 cursor-pointer text-white text-sm sm:text-base rounded-t-xl transition-colors ${activeTab === 'About' ? "bg-sky-500" : "bg-sky-800 hover:bg-sky-400"} transition-all duration-200`} onClick={() => setActiveTab('About')}>About</motion.button>
                    <motion.button variants={children} className={`px-4 sm:px-5 py-2 sm:py-3 cursor-pointer text-white text-sm sm:text-base rounded-t-xl transition-colors ${activeTab === 'Comment' ? "bg-sky-500" : "bg-sky-800 hover:bg-sky-400"} transition-all duration-500`} onClick={() => setActiveTab('Comment')}>Comment</motion.button>
                </div>
                <motion.div variants={children} className='mt-1 h-full text-sm sm:text-base'>
                    <SyntaxHighlighter language='javascript' style={nightOwl}
                        customStyle={{ margin: 0, width: "100%", height: "100%" }}
                    >{data2[activeTab]}</SyntaxHighlighter>
                </motion.div>

            </motion.div>

        </div>
    )
}

export default About
