import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Form from '../components/Form'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className='mx-20'>
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <Form />
      <Footer />
    </div>
  )
}

export default Home
