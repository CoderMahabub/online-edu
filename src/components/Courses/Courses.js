import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setAllCourses(data.courses));
    }, [])
    return (
        <div>
            <Row xs={1} md={3} className="g-4 container mx-auto text-start mb-4 mt-3">
                {
                    allCourses.map(course => <Course key={course.idCourse} course={course}></Course>)
                }
            </Row>
        </div>
    );
};

export default Courses;