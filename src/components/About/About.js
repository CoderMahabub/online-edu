import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('./instructors.JSON')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, []);
    return (
        <div>
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <h2 className="text-info fw-bolder text-decoration-underline mt-5 mb-4">Popular Instructors</h2>
            <div className="row d-flex container mx-auto">
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