import React from 'react'

export default function Features() {
    return (
        <section data-aos="slide-left" className="website-features">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 feature-box">
                        <img src="/images/f1.jpg"></img>
                        <div className="feature-text">
                            <p><b>100% Original Items</b>are available</p>
                        </div>
                    </div>
                    <div className="col-md-4 feature-box">
                        <img src="/images/f2.png"></img>
                        <div className="feature-text">
                            <p><b>Return Within 30 Days</b>of receiving your order</p>
                        </div>
                    </div>
                    <div className="col-md-4 feature-box">
                        <img src="/images/f3.jpg"></img>
                        <div className="feature-text">
                            <p><b>Get Free Delivery</b>for every order more than $400</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
