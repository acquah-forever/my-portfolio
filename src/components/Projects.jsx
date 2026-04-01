import React from 'react'
import { motion} from 'motion/react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const Projects = (props) => {
  const navigate = useNavigate()

  let parent = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0, transition: { staggerChilderen: 1, ease: "easOut", duration: 0.3 } }
  }
  let children = {
    hidden: { opacity: 0, y: -71 },
    visible: { opacity: 1, y: 0 }
  }

  function handleClick(){
    navigate('/')

  }


  return (
    <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className='border rounded-xl p-5 flex flex-col h-full  shadow-sm'>
      <motion.div variants={children} whileHover={{ scale: 1.2, y: -50 }} whileTap={{ scale: 1.2, y: -10 }} className='mb-7 mt-5 w-full h-50 sm:h-55 md:h-60 flex items-center justify-center overflow-hidden'>
        <img className='h-full object-contain' src={props.photo} alt="image" />
      </motion.div>
      <div>
        <h1 className='mb-7 text-2xl font-semibold text-center'>{props.title}</h1>
        <h2 className='px-2 mb-7 text-center text-base sm:text-md'>{props.description}</h2>
        <h1 className='w-full mb-7 text-xl font-semibold text-center'>BUILT WITH:</h1>
      </div>

      <div className='mb-7 flex justify-center gap-7 items-center loading-lazy'>
        <img className='w-10 h-10 object-contain' src={props.jsicon} alt="javascript" />
        <img className='w-10 h-10 object-contain' src={props.tailwindicon} alt="tailwind" />
        <img className='w-10 h-10 object-contain' src={props.reacticon} alt="react" />
      </div>
      <motion.button variants={children} whileHover={{scale:1.2,y:-7}} whileTap={{scale:0.9,y:-12}} transition={{type:"spring",stiffness:400,damping:10}}  className='cursor-pointer mx-7 bg-emerald-400 p-2 rounded-md'onClick={handleClick}>Launch</motion.button>

    </motion.div>
  )
}

Projects.propTypes = {
  photo: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  jsicon: PropTypes.string,
  tailwindicon: PropTypes.string,
  reacticon: PropTypes.string
}

export default Projects
