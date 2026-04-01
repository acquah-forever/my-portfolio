import React from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'motion/react'
import { Send } from "lucide-react"
import Undraw from '../assets/undraw.svg'


const Form = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm()

  function onSubmit() {
    alert('Message Sent')
  }

  const parent = { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, ease: "easeOut" } } }
  const children = { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }

  return (
    <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-35">

      <motion.form variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl space-y-6">

        <h1 className="text-3xl sm:text-4xl font-bold text-center lg:text-left bg-linear-to-r from-orange-600 to-amber-400 text-transparent bg-clip-text">Contact Me</h1>

        <div className='space-y-2'>
          <motion.input variants={children} placeholder="Subject" className="w-full px-4 h-12 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400" {...register('subject', { required: 'Enter Subject' })} />
          {errors.subject && <p className='text-md text-red-500'>{errors.subject.message}</p>}
        </div>


        <motion.div variants={children} className="grid gap-4 sm:grid-cols-2">
          <div className='space-y-2'>
            <input type="email" placeholder="Email Address" className="w-full px-4 h-12 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400" {...register('email', { required: 'Enter Email Address' })} />
            {errors.email && <p className='text-md text-red-500'>{errors.email.message}</p>}
          </div>

          <div className='space-y-2'>
            <input placeholder="Your Name" className="w-full px-4 h-12 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400" {...register('name', { required: 'Enter Your Name' })} />
            {errors.name && <p className='text-md text-red-500'>{errors.name.message}</p>}
          </div>
        </motion.div>

        <div className='space-y-2'>
          <motion.textarea variants={children} placeholder="Enter your message..." className="w-full px-4 py-3 border rounded-lg shadow-sm resize-none min-h-30 focus:outline-none focus:ring-2 focus:ring-orange-400"{...register('note',{required:'Enter Your Message'})} />
          {errors.note && <p className='text-md text-red-500'>{errors.note.message}</p>}
        </div>


        <motion.button variants={children} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg w-full sm:w-fit" type='submit'>
          <Send size={18} />
          Send Message
        </motion.button>

      </motion.form>

      <motion.div variants={children} className="w-full max-w-lg">
        <img src={Undraw} alt="illustration" className="w-full h-auto object-contain" />
      </motion.div>

    </motion.div>
  )
}

export default Form