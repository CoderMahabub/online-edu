import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import bannerImg from '../../images/illustration-1.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-section">
            <div className="container d-flex justify-content-around align-items-center border-bottom pb-4 pt-4">
                <div className="banner-left text-start">
                    <h1 className="fw-bolder">Learn From <span className="text-info">Anywhere</span></h1>
                    <p className="fs-5 pe-4">Join Millions Of Learners From Around The World! Find The Right Instructor For You. Any Topic, Skill Level, Or Language.</p>
                    <NavLink to="/courses">
                        <Button variant="btn btn-info fw-bold">View Courses</Button>
                    </NavLink>
                </div>
                <div className="banner-right">
                    <img className="img-fluid" src={bannerImg} alt="sfasdf" />
                </div>
            </div>
        </div>
    );
};

export default Banner;