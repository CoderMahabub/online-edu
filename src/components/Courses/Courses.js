import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setAllCourses(data.courses));
    }, [])
    return (
        <div>
            <h1>Courses</h1>
            <Row xs={1} md={3} className="g-4 container mx-auto text-start">
                {
                    allCourses.map(course => <Course key={course.idCourse} course={course}></Course>)
                }
            </Row>
        </div>
    );
};

export default Courses;