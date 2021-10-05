import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
    const [instructors, setInstructors] = useState([]);

    // Load Instructor's Data
    useEffect(() => {
        fetch('./instructors.JSON')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, []);
    return (
        <div>
            <div className="about-section ">
                <h1 className="text-decoration-underline">About Us Page</h1>
                <p>See Details about Online Edu</p>
                <p>OnlineEdu is a learning platform for all over the world with best quality courses and Instructors.</p>
            </div>
            <h2 className="text-info fw-bolder text-decoration-underline mt-5 mb-4">Popular Instructors</h2>
            <div className="row d-flex container mx-auto mb-4">
                {
                    instructors.map(instructor => (
                        <div className="col-md-4">
                            <div className="card">
                                <img className="instructorImage" src={instructor.teamThumb} alt="Jane" />
                                <div className="container">
                                    <h2>{instructor.name}</h2>
                                    <p className="title">{instructor.catagory}</p>
                                    <p>{instructor.aboutMe.slice(0, 100)}</p>
                                    <p>{instructor.email}</p>
                                    <p><button className="button">Contact</button></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default About;