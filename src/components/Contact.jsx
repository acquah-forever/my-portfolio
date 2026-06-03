import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'



const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const form = useRef()

  let parent = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.7 } }
  }

  let children = {
    hidden: { opacity: 0, y: -71 },
    visible: { opacity: 1, y: 0 }
  }


  function onSubmit() {
    emailjs.sendForm('service_dhulvcq', 'template_thyd4x9', form.current, '2Y9CmTzlCLaDvInck').then(
      () => {
        alert('Message Sent!')
        reset()
      }, (error) => {
        alert('Message Failed to Send, Try Again Later', error)
      }
    )

  }

  return (
    <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.4 }} className='space-y-10 flex flex-col justify-center items-center p-10'>
      <motion.h1 variants={children} className=' text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-7'>Lets <span className='bg-linear-to-bl from-sky-500 via-violet-300 to-indigo-400 bg-clip-text text-transparent'>Connect</span></motion.h1>
      <motion.h2 variants={children} className='font-mono text-xl md:text-2xl'>Open to FrontEnd roles and collaboration.</motion.h2>


      <motion.form ref={form} variants={children} className='max-w-xl w-full' onSubmit={handleSubmit(onSubmit)}>

        <div className='flex space-x-9 items-center mb-2'>
          <label className='font-mono'>Name</label>
          <input className='input bg-slate-200 border p-2 max-w-lg w-full' type="text" placeholder='Enter Name'  {...register('name', { required: "Enter Your Name" })} />
        </div>
        {errors.name && (
          <div className='mt-3 mb-3'>
            <p className='text-red-500 font-mono text-center'>{errors.name.message}</p>
          </div>
        )}

        <div className='flex space-x-9 items-center mb-2'>
          <label className='font-mono'>Email</label>
          <input className='input bg-slate-200 border p-2 max-w-lg w-full' type="email" placeholder='Enter Email'  {...register('email', { required: "Enter Your Email" })} />
        </div>
        {errors.email && (
          <div className='mt-3 mb-3'>
            <p className='text-red-500 font-mono text-center'>{errors.email.message}</p>
          </div>
        )}

        <div className='flex space-x-5 items-center mb-2'>
          <label className='font-mono'>Message</label>
          <textarea className='textarea bg-slate-200 border-black p-2 max-w-lg w-full' type="text" placeholder='Enter Message'  {...register('message', { required: "Enter Your Message" })} />
        </div>
        {errors.message && (
          <div className='mt-3 mb-3'>
            <p className='text-red-500 font-mono text-center'>{errors.message.message}</p>
          </div>
        )}

        <div className='flex justify-start mt-4'>
          <motion.button variants={children} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.65 }} transition={{ type: 'spring', stiffness: 100, damping: 10 }} className='bg-emerald-400 p-3 rounded cursor-pointer' type='submit'>Submit</motion.button>
        </div>
      </motion.form>

    </motion.div>
  )
}

export default Contact
