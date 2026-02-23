import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'motion/react'

const Reviews = ({ photo, name, profession, review }) => {


    let parent = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.17, ease: "easeOut", duration: 0.5 } }

    }
    let children = {
        hidden: { opacity: 0, y:-70 },
        visible: { opacity: 1, y: 0 }
    }



    return (
        <motion.div variants={parent} initial="hidden" whileInView={"visible"} viewport={{ once: true, amount:0.3 }} className='border mb-3 w-full p-5 rounded-xl ease-in-out'>
            <motion.div variants={children} whileHover={{scale:1.2,y:-12}} whileTap={{scale:0.9,y:-15}} transition={{type:"spring",stiffness:200,damping:3}} className='inline-flex'>
                <img className='cursor-pointer w-16 h-16 rounded-full object-cover' src={photo} alt="image" />
            </motion.div>
            <motion.h1 variants={children} className='text-xl font-semibold mb-2'>{name}</motion.h1>
            <motion.h1 variants={children} className='text-m inline-flex bg-linear-to-r from-orange-600 to-amber-500 text-transparent bg-clip-text mb-8 underline'>{profession}</motion.h1>
            <motion.p variants={children} className='mt-3 text-lg'>{review}</motion.p>
        </motion.div>
    )
}

Reviews.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    profession: PropTypes.string,
    review: PropTypes.string
}

export default Reviews
