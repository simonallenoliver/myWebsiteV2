import React from 'react'

const ProjectCarousel = () => {
    return (
        <>
            <div className="carousel slide" id='carouselActions' 
            data-bs-wrap="true">
                <div className="carousel-inner">

                    <div className="carousel-item active"
                    data-bs-interval="13000">
                        <div className="row">
                            <div className='col-1'>
                                <button className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselActions"
                                    data-bs-slide="prev">
                                    <i class="fa-solid fa-chevron-left"></i>
                                </button>
                            </div>
                            <div className='col-5 mx-auto text-center projectImage'><img src="/images/leafySC.png" alt="leafy website screenshot" /></div>
                            <div className='col-4 mx-auto '>
                                <h3>Leafy</h3>
                                <p className='py-3'>A plant ecommerce website I built with MongoDB, Express, React, and Node. 
                                Features: Modular design allows for quick reordering of site, plus easily recyclable components for future projects;
                                React enables super efficient rendering through use of its virtual DOM, as well as cleaner, direct code using JSX embedded in HTML. </p>
                                <button className='viewButton'>view project!</button>
                            </div>
                            <div className='col-1 '>
                                <button className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselActions"
                                    data-bs-slide="next">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="carousel-item" data-bs-interval="12000">
                        <div className="row">
                            <div className='col-1'>
                                <button className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselActions"
                                    data-bs-slide="prev">
                                    <i class="fa-solid fa-chevron-left"></i>
                                </button>
                            </div>

                            <div className='col-5 mx-auto text-center projectImage'><img src="/images/sandScreenShot.png" alt="sand game screenshot" /></div>
                            <div className='col-4 mx-auto '>
                                <h3>Sand</h3>
                                <p className='py-3'>A short browser interactive story I built using Python, Flask, and MySQL. Features: 
                                Queries facilitate trade betweeen different character inventories - each item in an inventory represents a row in the database;
                                Validations produce flash messsages that alert the player when they attempt to make an invalid trade.
                                </p>

                                <button className='viewButton'>view project!</button>
                            </div>
                            <div className='col-1 '>
                            <button className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselActions"
                                    data-bs-slide="next">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="carousel-item" data-bs-interval="12000">
                        <div className="row">
                            <div className='col-1'>
                                <button className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselActions"
                                    data-bs-slide="prev">
                                    <i class="fa-solid fa-chevron-left"></i>
                                </button>
                            </div>

                            <div className='col-5 mx-auto text-center projectImage'><img src="/images/forsakenSC.png" alt="forsaken forest game screenshot" /></div>
                            <div className='col-4 mx-auto '>
                                <h3>Forsaken Forest</h3>
                                <p className='py-3'>A top-down RPG I made using the Godot game engine's Python-like language, GDScript. 
                                Features: Over ten complex, conditional character animations;
                                Enemies programmed to pursue the player character once they have reached a certain proximity;
                                Combat functions that result in removing character sprites from the game</p>
                                <button className='viewButton'>view project!</button>
                            </div>
                            <div className='col-1 '>
                            <button className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselActions"
                                    data-bs-slide="next">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                    

                </div>
            </div>
        </>
    )
}

export default ProjectCarousel