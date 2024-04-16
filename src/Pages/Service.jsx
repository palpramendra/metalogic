import React from 'react'
import Servicegroup from './Servicegroup'
import Howitwork from './Howitwork'

function Service() {
    return (
        <>
            <section className="page__header position-relative">
                <div className="container">
                    <div className="text-center">
                        <div className="d-inline-flex justify-content-center gap-2 transprent__btn">
                            <a href="index-2.html">Home</a> <span>/</span> <p>Our Services</p>
                        </div>
                        <h2 className="t__40">Our Services</h2>
                    </div>
                </div>
            </section>

            <Servicegroup />
            <Howitwork />

        </>
    )
}

export default Service
