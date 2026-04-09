import React from 'react'
import { motion } from 'motion/react'
import Profile from '../assets/bus.jpeg'


const Hero = () => {
    return (
        <motion.div initial={{ opacity: 0, y: -60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }} 
        className='relative min-h-screen bg-[url("https://cdn.pixabay.com/photo/2016/06/22/11/10/box-1472804_1280.png")] bg-cover bg-center bg-fixed bg-no-repeat'>
            <div className='absolute inset-0 bg-black/30'></div>
            <div className='relative z-50'>
               
            </div>
        </motion.div>
    )
}

export default Hero
