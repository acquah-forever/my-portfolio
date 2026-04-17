import React from 'react'
import { motion } from 'motion/react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import ToolsSkills from '../components/ToolsSkills'
import LearningSkills from '../components/LearningSkills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { getFrontend } from '../data/frontend'
import { getTools } from '../data/tools'
import { getLearning } from '../data/learning'



const Home = () => {
  const frontend = getFrontend()
  const tools = getTools()
  const learning = getLearning()

  let parent = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.7 } }
  }

  let children = {
    hidden: { opacity: 0, y: -71 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className='mx-4 mb-20 sm:mx-8 lg:mx-20'>
        <About />
      </div>
      <motion.section variants={parent} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} id='skills'>
        <motion.h1 variants={children} className='text-2xl sm:text-3xl md:text-4xl font-bold  mb-5 sm:mb-7 text-center'>Tech <span className='bg-linear-to-bl from-sky-500 via-violet-300 to-indigo-400 bg-clip-text text-transparent'>Stack</span></motion.h1>
        <motion.div variants={children} className='px-4 sm:px-8 lg:px-20'>
          <h1 className='font-mono text-2xl font-semibold'>//FrontEnd</h1>

          <div className='max-w-5xl w-full grid grid-cols-3 space-y-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 mt-5 mb-10'>
            {frontend.map((front) => (<Skills
              front={front} key={front.id}
            />))}
          </div>

          <h1 className='font-mono text-2xl font-semibold'>//Tools</h1>
          <div className='max-w-5xl w-full grid grid-cols-3 space-y-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 mt-5 mb-10'>
            {tools.map((tool) => (<ToolsSkills
              tool={tool} key={tool.id} />))}
          </div>

          <h1 className='font-mono text-2xl font-semibold'>//Learning</h1>
          <div className='max-w-5xl w-full grid grid-cols-3 space-y-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 mt-5 mb-10'>
            {learning.map((learn) => (<LearningSkills
              learn={learn} key={learn.id} />))}
          </div>
        </motion.div>
      </motion.section>

      <div id='projects' className='mt-30 mb-30'>
        <Projects />
      </div>

      <div id='contact' className='grid grid-cols-1 justify-items-center items-center mb-30'>
        <Contact />
      </div>
    </div>
  )
}

export default Home
