import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Reviews from '../components/Reviews'
import Form from '../components/Form'
import Footer from '../components/Footer'
import babe from '../assets/babe.jpg'
import babe1 from '../assets/babe1.jpg'
import babe2 from '../assets/babe2.jpg'
import babe3 from '../assets/babe3.jpg'
import babe4 from '../assets/babe4.jpg'
import babe5 from '../assets/babe5.jpg'


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <div className='h-100 mx-8 sm:mx-15 mb-20 flex justify-center px-20 items-center'>
      <Skills />
      </div>
      <h1 className='px-15 mb-7 uppercase text-center text-4xl tracking-tight font-semibold'>Reviews From Peers</h1>
      <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-15'>
      <Reviews />
      </div>
      <Form />
      <Footer />
    </div>
  )
}

export default Home
