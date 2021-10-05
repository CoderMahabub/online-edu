import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBook, faDollarSign, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    // FontAwesomeIcon
    const clockIcon = <FontAwesomeIcon icon={faClock} />
    const lessonIcon = <FontAwesomeIcon icon={faBook} />
    const DollarIcon = <FontAwesomeIcon icon={faDollarSign} />
    const star = <FontAwesomeIcon icon={faStar} />
    const gstar = <FontAwesomeIcon icon={faStarHalfAlt} />

    // Destructured
    const { oeCourseThumb, oeCategory, oeCourseTItle, oeRatings, oeRatingCount, oeCourseDuration, oeCourseLessons, oePrice } = props.course;
    return (
        <div>
            <Col>
                <Card className="course-card">
                    <Card.Img className="cthumbnail mx-auto" variant="top" src={oeCourseThumb} />
                    <Card.Body>
                        <small>{oeCategory}</small>
                        <Card.Title className="my-2">{oeCourseTItle}</Card.Title>
                        <Card.Text className="text-warning">
                            <Rating
                                initialRating={oeRatings}
                                readonly
                                fullSymbol={star}
                                emptySymbol={gstar}
                            />  <small className="text-secondary">  {oeRatings} ( {oeRatingCount} Reviews )</small>
                        </Card.Text>
                        <div className="row d-flex align-items-center">
                            <p className="col-md-4 list-style-none">{clockIcon} <span>{oeCourseDuration}</span></p>
                            <p className="col-md-4 list-style-none">{lessonIcon}<span> {oeCourseLessons} <small>Lessons</small></span></p>
                            <p className="col-md-4 list-style-none text-danger fw-bold">{DollarIcon}<span> {oePrice}</span></p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;