import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    const { oeCourseThumb, oeCategory, oeCourseTItle, oeRatings, oeRatingCount } = props.course;
    return (
        <div>
            <Col>
                <Card className="course-card">
                    <Card.Img className="thumbnail mx-auto" variant="top" src={oeCourseThumb} />
                    <Card.Body>
                        <small>{oeCategory}</small>
                        <Card.Title>{oeCourseTItle}</Card.Title>
                        <Card.Text className="text-warning">
                            Ratings: {oeRatings} ({oeRatingCount} Reviews)
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;