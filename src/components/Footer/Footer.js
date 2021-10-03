import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-section bg-dark text-light text-start">
            <div className="container row mx-auto p-4">
                <div className="footer-left col-md-4">
                    <h2>Online Edu</h2>
                    <span>*About Project About Project About Project About Project About Project About Project About Project About Project About Project </span> <br />
                    <small>CoderMahabub © 2021. All rights reserved.</small>
                </div>
                <div className="footer-middle col-md-4 text-center ">
                    <Link className="d-block text-light text-decoration-none fw-bold p-2" to="/home">Home</Link>
                    <Link className="d-block text-light text-decoration-none fw-bold p-2" to="/courses">Courses</Link>
                    <Link className="d-block text-light text-decoration-none fw-bold p-2" to="/about">About Us</Link>
                    <Link className="d-block text-light text-decoration-none fw-bold p-2" to="/contact">Contact Us</Link>
                </div>
                <div className="footer-right col-md-4">
                    <h2>Sign up for the newsletter</h2>
                    <input type="text" name="" id="" /> <br />
                    <b>+1 8 800 555 35 35</b>
                    <p>160 Broadway, New York, NY 10038,
                        102 1st Avenue, New York, NY 100</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;