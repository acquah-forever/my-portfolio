import React from 'react'
import { motion } from 'motion/react'
import {HashLink} from 'react-router-hash-link'
import {Facebook,Twitter,Instagram,Youtube} from 'lucide-react'



const Hero = () => {

    return (
        <motion.div initial={{ opacity: 0, y: -60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }}
            className='relative min-h-screen bg-[url(https://cdn.pixabay.com/photo/2016/06/22/11/10/box-1472804_1280.png)] bg-cover bg-center bg-fixed bg-no-repeat'>
            <div className='absolute inset-0 bg-black/30 z-10'></div>
            <div className='relative z-20 px-16'>
                <section className='mx-auto flex min-h-screen max-w-6xl justify-center items-center px-6'>
                    <div className='space-y-10'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center sm:text-left'>Hi, I'm Kojo Acquah Addo</h1>
                        <h2 className='mt-4 max-w-xl line-clamp-2 text-center sm:text-left text-xl sm:text-3xl md:text-4xl text-white/90'>Frontend Developer focused on Clean UI and Reliable Products.</h2>
                        <div className='flex justify-center sm:justify-start gap-5'>
                           <HashLink smooth to={'/'}><Facebook className='w-7 h-7 sm:w-10 sm:h-10 text-slate-100 object-contain'/></HashLink> 
                            <HashLink smooth to={'/'}><Twitter className='w-7 h-7 sm:w-10 sm:h-10 text-slate-100 object-contain' /></HashLink>
                            <HashLink smooth to={'/'}><Instagram className='w-7 h-7 sm:w-10 sm:h-10 text-slate-100 object-contain' /></HashLink>
                            <HashLink smooth to={'/'}><Youtube className='w-7 h-7 sm:w-10 sm:h-10 text-slate-100 object-contain' /></HashLink>
                 
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    )
}

export default Hero
