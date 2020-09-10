import React from 'react'

export default function Featured() {
    return (
        <div>
            <section id="Featured" data-aos="zoom-out-up" className="featured-categories">
                <div className="container">
                    <div className="title-box md-4">
                        <h2>Featured</h2>
                    </div>
                    <div className="row box">
                        <div className="col-md-3 col-12">
                            <img src="/images/w1.jpg" alt=""></img>
                        </div>
                        <div className="col-md-3 col-12">
                            <img src="/images/w2.jpg" alt=""></img>
                        </div>
                        <div className="col-md-3 col-12">
                            <img src="/images/w3.jpg" alt=""></img>
                        </div>
                        <div className="col-md-3 col-12">
                            <img src="/images/w5.jpg" alt=""></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
