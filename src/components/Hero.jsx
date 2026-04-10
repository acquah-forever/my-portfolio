import React from 'react'
import { motion } from 'motion/react'
import {Facebook,Twitter,Instagram,Youtube} from 'lucide-react'



const Hero = () => {
    return (
        <motion.div initial={{ opacity: 0, y: -60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }}
            className='relative min-h-screen bg-[url("https://cdn.pixabay.com/photo/2016/06/22/11/10/box-1472804_1280.png")] bg-cover bg-center bg-fixed bg-no-repeat'>
            <div className='absolute inset-0 bg-black/40'></div>
            <div className='relative z-50 px-15'>
                <section className='mx-auto flex min-h-screen max-w-6xl justify-center items-center px-6'>
                    <div className='space-y-10'>
                        <h1 className='text-5xl md:text-6xl font-bold text-white text-center sm:text-left'>Hi, I'm Kojo Acquah Addo</h1>
                        <h1 className='mt-4 max-w-xl text-center sm:text-left text-3xl text-white/90'>Frontend Developer focused on Clean UI and Reliable Products.</h1>
                        <div className='flex gap-5'>
                            <Facebook className='w-10 h-10 text-slate-100 object-contain' />
                            <Twitter className='w-10 h-10 text-slate-100 object-contain' />
                            <Instagram className='w-10 h-10 text-slate-100 object-contain' />
                            <Youtube className='w-10 h-10 text-slate-100 object-contain' />
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    )
}

export default Hero
