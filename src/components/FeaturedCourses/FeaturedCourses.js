import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Featured from '../Featured/Featured';


const FeaturedCourses = () => {
    const [featuredCourses, setFeaturedCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setFeaturedCourses(data.courses.slice(0, 4)));
    }, [])
    // console.log(featuredCourses);
    return (
        <div>
            <h1 className="text-info fw-bolder mb-5 mt-4"><u>Featured Courses</u></h1>
            <Row xs={1} md={4} className="g-4 container mx-auto text-start mb-4">
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

