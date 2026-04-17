import React, { useState } from 'react'
import { motion, scale } from 'motion/react'
import { HashLink } from 'react-router-hash-link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import { getData } from '../data/data'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Hero = () => {
    const [activeTab, setActiveTab] = useState('Bio')
    const data = getData()


    let parent = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.7 } }
    }

    let children = {
        hidden: { opacity: 0, y: -71 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div id='hero' variants={parent} initial="hidden" whileInView="visible" viewport={{once:false, amount: 0.4}} className="relative bg-[url(https://cdn.pixabay.com/photo/2016/06/22/11/10/box-1472804_1280.png)] bg-cover bg-center bg-fixed bg-no-repeat">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <div className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-6xl">
                    <div className="w-full max-w-xl flex flex-col h-100 justify-center items-center md:items-start gap-4">
                        <div className='px-2 sm:px-4'>
                            <motion.div variants={children} className="px-3 bg-slate-100/60 flex items-center rounded-full py-1 gap-2 border w-fit">
                                <span className="w-3 h-3 bg-green-500 rounded-full" />
                                <span className="text-xs font-semibold">Available for Opportunities</span>
                            </motion.div>
                        </div>
                        <motion.h1 variants={children} className="px-2 sm:px-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">Hi, I'm Kojo Addo</motion.h1>

                        <motion.p variants={children} className="text-lg sm:text-2xl px-2 sm:px-4  font-semibold">FrontEnd Developer</motion.p>

                        <motion.div variants={children} className="px-2 sm:px-4 flex gap-3">
                            <Facebook className="w-6 h-6" />
                            <Twitter className="w-6 h-6" />
                            <Instagram className="w-6 h-6" />
                            <Youtube className="w-6 h-6" />
                        </motion.div>
                        <motion.div variants={children} whileHover={{scale:1.2}} whileTap={{scale:0.65}} transition={{type:'spring', stiffness: 500, damping:7}} className="px-2 sm:px-4 mt-3">
                            <HashLink smooth to='/#projects' className="bg-sky-500 hover:bg-sky-800 transition px-6 py-3 rounded-full text-white border-3">View My Work</HashLink>
                        </motion.div>
                    </div>

                    <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{once:false, margin:"-100px"}} className="w-full max-w-lg aspect-4/3  border bg-slate-400/50  mx-auto md:mx-0">
                        <div className='flex items-center mt-3'>
                            <div className='px-3 flex space-x-1'>
                                <div className='w-3 h-3 bg-red-400 rounded-full'></div>
                                <div className='w-3 h-3 bg-amber-300 rounded-full'></div>
                                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                            </div>
                        </div>
                        <div className='border-t mt-2 border-slate-400'></div>
                        <div className='flex space-x-1 p-1 '>
                            <motion.button variants={children} className={`cursor-pointer p-2 rounded-t-lg text-white ${activeTab === 'Bio' ? "bg-sky-500 border" : "bg-sky-800 hover:bg-sky-400"} transition-all duration-200`} onClick={() => setActiveTab('Bio')}>Bio</motion.button>
                            <motion.button variants={children} className={`cursor-pointer p-2 rounded-t-lg text-white ${activeTab === 'Projects' ? "bg-sky-500" : "bg-sky-800 hover:bg-sky-400"} transition-all duration-200`} onClick={() => setActiveTab('Projects')}>Projects</motion.button>
                            <motion.button variants={children} className={`cursor-pointer p-2 rounded-t-lg text-white ${activeTab === 'Skills' ? "bg-sky-500" : "bg-sky-800 hover:bg-sky-400"} transition-all duration-200`} onClick={() => setActiveTab('Skills')}>Skills</motion.button>
                        </div>

                        <motion.div variants={children} className='text-sm'>
                            <SyntaxHighlighter language='javascript' style={nightOwl} >{data[activeTab]}</SyntaxHighlighter>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </motion.div>
    )
}

export default Hero