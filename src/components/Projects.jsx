import React from 'react'
import { motion } from 'motion/react'

let parent = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.24, duration: 0.7 } }
}

let children = {
    hidden: { opacity: 0, y: -71 },
    visible: { opacity: 1, y: 0 }
}


const Projects = () => {
    return (
        <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{once:true, amount: 0.4}} className='mx-auto'>
            <div className='mt-20 text-center'>
                <motion.h1 variants={children} className=' text-2xl sm:text-3xl md:text-4xl font-bold mb-20 sm:mb-7'>Featured <span className='bg-linear-to-bl from-sky-500 via-violet-300 to-indigo-400 bg-clip-text text-transparent'>Projects</span></motion.h1>
            </div>

            {/* section cards from daisi UI */}
            <motion.section variants={children} className='mx-4 sm:mx-6 md:mx-8 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6'>
                <div className='max-w-lg w-full sm:hover:scale-110 transition-all duration-200'>
                    <div className="card bg-base-100 w-full shadow-sm">
                        <figure className="w-full aspect-video overflow-hidden">
                            <img className='w-full h-full object-cover'
                                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                my-realEstate
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p className='text-justify'> Latest and available houses for sale and rent.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">React</div>
                                <div className="badge badge-outline">JavaScript</div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className='max-w-lg w-full sm:hover:scale-110 transition-all duration-200'>
                    <div className="card bg-base-100 w-full shadow-sm">
                        <figure className="w-full aspect-video overflow-hidden">
                            <img className='w-full h-full object-cover'
                                src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                my-eCommerce
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p className='text-justify'>Tool displaying items for sale.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">React</div>
                                <div className="badge badge-outline">JavaScript</div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='max-w-lg w-full sm:hover:scale-110 transition-all duration-200'>
                    <div className="card bg-base-100 w-full shadow-sm">
                        <figure className="w-full aspect-video overflow-hidden">
                            <img className='w-full h-full object-cover'
                                src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3xlbnwwfDB8MHx8fDA%3D"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                my-blog
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p className='text-justify'>My sacred space for expressing myself</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">React</div>
                                <div className="badge badge-outline">JavaScript</div>

                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    )
}

export default Projects
