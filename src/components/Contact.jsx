import React from 'react'
import { useForm } from 'react-hook-form'



const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()


  function onSubmit(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    reset()
    
  }

  return (
    <div className='space-y-10 flex flex-col justify-center items-center p-10'>
      <h1 className=' text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-7'>Lets <span className='bg-linear-to-bl from-sky-500 via-violet-300 to-indigo-400 bg-clip-text text-transparent'>Connect</span></h1>
      <h2 className='font-mono text-xl md:text-2xl'>Open to FrontEnd roles and collaboration.</h2>
      <form className='max-w-xl w-full' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex space-x-5 items-center mb-7'>
          <label className='font-mono'>Message</label>
          <input className='border p-2 max-w-lg w-full' type="text" placeholder='Enter Message'  {...register('text', {required: "Enter Your Message"})} />
        </div>
          {errors.text && <p className='text-red-500 font-mono text-center'>{errors.text.message}</p>}
        <div className='flex justify-start mt-7'>
          <button className='bg-emerald-400 p-3 rounded hover:bg-emerald-300 hover:scale-110 transition-all duration-200 cursor-pointer'type='submit'>Submit</button>
        </div>
      </form>

    </div>
  )
}

export default Contact
