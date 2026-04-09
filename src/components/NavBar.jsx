import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, Moon, X } from 'lucide-react'
import useMenu from '../hooks/useMenu'

const NavBar = () => {

  let [mobileMenuIsOpen, toggleMenu] = useMenu()


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
      <div className='bg-black fixed top-0 w-full z-5 text-white flex justify-between items-center px-5 py-3'>
        <NavLink to={'/'}><h1 className='cursor-pointer text-xl hover:scale-115 transition-all ease-in-out duration-300'>Kojo Addo</h1></NavLink>
        <div className='flex space-x-3 sm:space-x-5 md:space-x-7 lg:space-x-10'>

          <ul className='hidden  sm:flex space-x-4 sm:space-x-5 md:space-x-10 tracking-tight items-center'>
            <NavLink to={'/'}><li className='text-xl dark:bg-linear-to-r dark:from-orange-700 dark:to-amber-400 dark:text-transparent dark:bg-clip-text cursor-pointer hover:scale-115 transition-all ease-in-out duration-300'>Home</li></NavLink>
            <NavLink to={'/portfolio'}><li className='text-xl dark:bg-linear-to-r dark:from-orange-700 dark:to-amber-400 dark:text-transparent dark:bg-clip-text cursor-pointer hover:scale-115 transition-all ease-in-out duration-300'>Projects</li></NavLink>
          </ul>
          <div className=' flex space-x-2 items-center'>
            <button className='cursor-pointer' onClick={toggleMenu}>
              {mobileMenuIsOpen ? (<X className='sm:hidden flex w-5 h-5 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300' />) : (<Menu className='sm:hidden flex w-5 h-5 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300' />)}
            </button>
          </div>

        </div>

      </div >
      <AnimatePresence>
        {mobileMenuIsOpen && (
          <motion.ul variants={parent} initial="hidden" animate="visible" exit={{ opacity: 0, y: -70 }} className='sm:hidden fixed z-5 top-10 backdrop-blur-sm flex flex-col p-2 space-y-1 mx-5 mt-7 mb-7'>
            <motion.li variants={children}>
              <li className='text-sm tracking-tight' onClick={() => toggleMenu(false)}>Home</li>
            </motion.li>
            <motion.li variants={children}>
              <li className='text-sm tracking-tight' onClick={() => toggleMenu(false)}>Project</li>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>


  )
}

export default NavBar
