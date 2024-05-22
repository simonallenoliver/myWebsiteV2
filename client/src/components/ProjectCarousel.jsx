import React from 'react'

const ProjectCarousel = () => {
    return (
        <>
            <div className="carousel slide" id='carouselActions' data-bs-wrap="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className='col-2'>
                                <button className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselActions"
                                    data-bs-slide="prev">
                                    prev
                                </button>
                            </div>

                            <div className='col-4 mx-auto text-center'><img src="/images/leafySC.png" alt="img1" /></div>
                            <div className='col-4 mx-auto '>
                                <h3>project title</h3>
                                <p>Project text description wow such cool project I love this fuin wow
                                    thanks yes fair cool very exciting hope it is good project</p>
                                <button>view project!</button>
                            </div>
                            <div className='col-2 text'>
                                <button className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselActions"
                                    data-bs-slide="next">
                                    next
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div className='col-2'>
                                <button className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselActions"
                                    data-bs-slide="prev">
                                    prev
                                </button>
                            </div>

                            <div className='col-4 mx-auto text-center'><img src="/images/leafySC.png" alt="img1" /></div>
                            <div className='col-4 mx-auto '>
                                <h3>project wow</h3>
                                <p>Project text defgbdfgdfghscription wow such cool what is ur goe this fuin wow
                                    thanks yes fair ok ok very hhhexciting hope it is good project</p>
                                <button>view project!</button>
                            </div>
                            <div className='col-2 text'>
                            <button className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselActions"
                                    data-bs-slide="next">
                                    next
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div className='col-2'>
                                <button className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselActions"
                                    data-bs-slide="prev">
                                    prev
                                </button>
                            </div>

                            <div className='col-4 mx-auto text-center'><img src="/images/leafySC.png" alt="img1" /></div>
                            <div className='col-4 mx-auto '>
                                <h3>project three</h3>
                                <p>Proanotha one omg yes such impress full of rpojecet hope it is good project</p>
                                <button>view project!</button>
                            </div>
                            <div className='col-2 text'>
                            <button className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselActions"
                                    data-bs-slide="next">
                                    next
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