import React from 'react'

const Projects = () => {
    return (
        <div className='mx-auto'>
            <div className='mt-20 text-center'>
                <h1 className=' text-2xl sm:text-3xl md:text-4xl font-bold mb-20 sm:mb-7'>Featured <span className='bg-linear-to-bl from-sky-500 via-violet-300 to-indigo-400 bg-clip-text text-transparent'>Projects</span></h1>
            </div>

            {/* section cards from daisi UI */}
            <section className='mx-4 sm:mx-6 md:mx-8 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6'>
                <div className='max-w-lg w-full sm:hover:scale-110 transition-all duration-200'>
                    <div className="card bg-base-100 w-full shadow-sm">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
            </section>
        </div>
    )
}

export default Projects
