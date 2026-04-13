import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
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
      <div className='bg-black fixed w-full top-0 left-0 z-60 text-white flex justify-between items-center px-10 py-3'>
        <HashLink smooth to={'/#hero'}><h1 className='cursor-pointer text-lg hover:scale-115 transition-all ease-in-out duration-300'>Kojo</h1></HashLink>
        <div className='flex space-x-3 sm:space-x-5 md:space-x-7 lg:space-x-10'>

          <ul className='hidden  sm:flex space-x-4 sm:space-x-5 md:space-x-10 tracking-tight items-center'>
            <HashLink smooth className='text-md dark:bg-linear-to-r dark:from-orange-700 dark:to-amber-400 dark:text-transparent dark:bg-clip-text cursor-pointer hover:scale-115 transition-all ease-in-out duration-300' to={'/#hero'}>Home</HashLink>
            <HashLink smooth className='text-md dark:bg-linear-to-r dark:from-orange-700 dark:to-amber-400 dark:text-transparent dark:bg-clip-text cursor-pointer hover:scale-115 transition-all ease-in-out duration-300' to={'/#about'}>About</HashLink>
            <HashLink smooth className='text-md dark:bg-linear-to-r dark:from-orange-700 dark:to-amber-400 dark:text-transparent dark:bg-clip-text cursor-pointer hover:scale-115 transition-all ease-in-out duration-300' to={'/skills'}>Skills</HashLink>
            <HashLink smooth className='text-md dark:bg-linear-to-r dark:from-orange-700 dark:to-amber-400 dark:text-transparent dark:bg-clip-text cursor-pointer hover:scale-115 transition-all ease-in-out duration-300' to={'/projects'}>Projects</HashLink>

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
          <motion.ul variants={parent} initial="hidden" animate="visible" exit={{ opacity: 0, y: -70 }} className='bg-slate-400/80 fixed z-30 top-5 flex flex-col px-10 py-3 space-y-3 h-50 mt-7 mb-7 w-full sm:hidden'>
            <motion.li variants={children}>
              <HashLink smooth className='cursor-pointer text-lg tracking-tight text-white' to={'/#hero'} onClick={() => toggleMenu(false)}>Home</HashLink>
            </motion.li>
            <motion.li variants={children}>
              <HashLink smooth className='cursor-pointer text-lg tracking-tight text-white' to={'/#about'} onClick={() => toggleMenu(false)}>About</HashLink>
            </motion.li>
            <motion.li variants={children}>
              <HashLink smooth className='cursor-pointer text-lg tracking-tight text-white' to={'/skills'} onClick={() => toggleMenu(false)}>Skills</HashLink>
            </motion.li>
            <motion.li variants={children}>
              <HashLink smooth className='cursor-pointer text-lg tracking-tight text-white' to={'/projects'} onClick={() => toggleMenu(false)}>Projects</HashLink>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>


  )
}

export default NavBar
