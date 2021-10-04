import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarked } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const phone = <FontAwesomeIcon icon={faPhone} />
    const address = <FontAwesomeIcon icon={faMapMarked} />
    return (
        <div className="footer-section bg-dark text-light text-start">
            <div className="container row mx-auto p-4 d-flex align-items-center">
                <div className="footer-left col-md-4">
                    <h2 className="text-info fw-bolder">Online Edu</h2>
                    <p className="fs-6 fw-light">OnlineEdu is a learning platform for all over the world with best quality courses and Instructors.</p>
                    <small><a className="text-info" href="https://codermahabub.com/">CoderMahabub</a> © 2021. All rights reserved.</small>
                </div>
                <div className="footer-middle col-md-4 text-center ">
                    <Link className="d-block text-light text-decoration-none fw-bold p-2" to="/home">Home</Link>
                    <Link className="d-block text-light text-decoration-none fw-bold p-2" to="/courses">Courses</Link>
                    <Link className="d-block text-light text-decoration-none fw-bold p-2" to="/about">About Us</Link>
                    <Link className="d-block text-light text-decoration-none fw-bold p-2" to="/contact">Contact Us</Link>
                </div>
                <div className="footer-right col-md-4 text-end">
                    <h2 className="text-info fw-bolder">Our Parmanent Address</h2>
                    <b><span className="text-info me-2">{phone}</span> +1 8 800 555 35 35</b>
                    <p><span className="text-info me-2">{address}</span> 160 Broadway, New York, NY 10038,
                        <br /> 102 1st Avenue, New York, NY 100</p>
                </div>
            </div>
        </div >
    );
};

export default Footer;