import React from 'react'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'



const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  let parent = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.7 } }
  }

  let children = {
    hidden: { opacity: 0, y: -71 },
    visible: { opacity: 1, y: 0 }
  }


  function onSubmit() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    reset()

  }

  return (
    <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{once:false, amount: 0.4}} className='space-y-10 flex flex-col justify-center items-center p-10'>
      <motion.h1 variants={children} className=' text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-7'>Lets <span className='bg-linear-to-bl from-sky-500 via-violet-300 to-indigo-400 bg-clip-text text-transparent'>Connect</span></motion.h1>
      <motion.h2 variants={children} className='font-mono text-xl md:text-2xl'>Open to FrontEnd roles and collaboration.</motion.h2>
      <motion.form variants={children} className='max-w-xl w-full' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex space-x-5 items-center mb-7'>
          <label className='font-mono'>Message</label>
          <input className='border p-2 max-w-lg w-full' type="text" placeholder='Enter Message'  {...register('text', { required: "Enter Your Message" })} />
        </div>
        {errors.text && <p className='text-red-500 font-mono text-center'>{errors.text.message}</p>}
        <div className='flex justify-start mt-4'>
          <motion.button variants={children} whileHover={{scale:1.2}} whileTap={{scale:0.65}} transition={{type:'spring', stiffness: 500, damping:7}} className='bg-emerald-400 p-3 rounded cursor-pointer' type='submit'>Submit</motion.button>
        </div>
      </motion.form>

    </motion.div>
  )
}

export default Contact
