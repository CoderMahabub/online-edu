import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Featured from '../Featured/Featured';


const FeaturedCourses = () => {
    const [featuredCourses, setFeaturedCourses] = useState([]);
    // Load Courses Data
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setFeaturedCourses(data.courses.slice(0, 4)));
    }, []);
    return (
        <div className="container">
            <h2 className="text-info fw-bolder mt-5"><u>Featured Courses</u></h2>
            <p className="mb-4">Discover Your Perfect Program In Our Courses.</p>
            {/* Parent Container of Features  */}
            <Row xs={1} md={2} className="g-4 mx-auto text-start mb-4">
                {
                    featuredCourses.map(featuredCourse => <Featured key={featuredCourse.idCourse} featuredCourse={featuredCourse}></Featured>)
                }
            </Row>
        </div>
    );
};

export default FeaturedCourses;

// {Array.from({ length: 4 }).map((_, idx) => (

//     ))}

