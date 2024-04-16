import React from 'react'

function Contact() {
    return (
        <>
            <section className="page__header position-relative">
                <div className="container">
                    <div className="text-center">
                        <div className="d-inline-flex justify-content-center gap-2 transprent__btn">
                            <a href="index-2.html">Home</a> <span>/</span> <p>Contact Us</p>
                        </div>
                        <h2 className="t__40">Contact Us</h2>
                    </div>
                </div>
            </section>
            <section>
                <div className="address">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 com-md-6">
                                <div className="add__card">
                                    <div className="icon__box"> <i className="ti-comment-alt" /> </div>
                                    <div> <p className="t__22">info@metalogic.com.np</p> </div>
                                </div>
                            </div>
                            <div className="col-lg-4 com-md-6">
                                <div className="add__card">
                                    <div className="icon__box"> <i className="fa fa-map-marker" /> </div>
                                    <div> <p className="t__22">Saptakhel, Lalitpur (Head office)</p></div>
                                </div>
                            </div>
                            <div className="col-lg-4 com-md-6">
                                <div className="add__card">
                                    <div className="icon__box"> <i className="fa fa-phone" /> </div>
                                    <div> <p className="t__22">+ 977 9851353599</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="contact">
                <div className="container">
                    <div className="text-center">
                        <p className="transparent__btn">Contact Me</p>
                        <h2 className="t__40 pt__30">Send Your Message</h2>
                    </div>
                    <div className="contact__form pt__40">
                        <form>
                            <div className="row">
                                <div className="col-md-6"> <input type="text" placeholder="Your Name" /> </div>
                                <div className="col-md-6"> <input type="email" placeholder="Your Email" /> </div>
                                <div className="col-md-6"> <input type="text" placeholder="Your Subject" /> </div>
                                <div className="col-md-6"> <input type="number" placeholder="Your Phone" /> </div>
                                <div className="col-12"> <textarea name="message" placeholder="Your Message" defaultValue={""} /></div>
                                <div className="d-flex justify-content-center">
                                    <button className="common__btn"> <span>Send Your Message</span> <i className="ti-arrow-top-right" /> </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Contact
