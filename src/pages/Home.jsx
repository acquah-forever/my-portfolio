import React from 'react'
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

  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className='mx-4 mb-20 sm:mx-8 lg:mx-20'>
        <About />
      </div>
      <section id='skills'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold  mb-5 sm:mb-7 text-center'>Tech <span className='bg-linear-to-bl from-sky-500 via-violet-300 to-indigo-400 bg-clip-text text-transparent'>Stack</span></h1>
        <div className='px-4 sm:px-8 lg:px-20'>
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
        </div>
      </section>

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
