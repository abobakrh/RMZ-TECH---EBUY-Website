import React from 'react'

export default function Footer() {
    return (
        <section data-aos="fade-up" className="footer">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-3">
                        <h1>Useful Links</h1>
                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                        <p>Refund Policy</p>
                        <p>Discount Coupons</p>
                    </div>
                    <div className="col-md-3">
                        <h1>Company</h1>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Careers</p>
                        <p>Affiliates</p>
                    </div>
                    <div className="col-md-3">
                        <h1>Follow Us On</h1>
                        <p><i className="fa fa-facebook-official"></i> Facebook</p>
                        <p><i className="fa fa-youtube-play"></i> Youtube</p>
                        <p><i className="fa fa-twitter"></i> Linkedin</p>
                        <p>Twitter</p>
                    </div>
                    <div className="col-md-3 footer-image">
                        <h1>Download App</h1>
                        <img src="/images/logo.png" alt=""></img>
                    </div>

                </div>
                <hr />
                    <div className="rights-box">
                        <p className="copyrights">All Rights Reserved .</p>
                    </div>
            </div>
        </section>
    )
}
