import { Card, Col } from 'react-bootstrap';
import './Featured.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBook, faDollarSign, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const Featured = (props) => {
    // FontAwesomeIcon 
    const clockIcon = <FontAwesomeIcon icon={faClock} />
    const lessonIcon = <FontAwesomeIcon icon={faBook} />
    const DollarIcon = <FontAwesomeIcon icon={faDollarSign} />
    const star = <FontAwesomeIcon icon={faStar} />
    const gstar = <FontAwesomeIcon icon={faStarHalfAlt} />

    // Destructured 
    const { oeCourseThumb, oeCategory, oeCourseTItle, oeRatings, oeRatingCount, oeCourseDuration, oeCourseLessons, oePrice } = props.featuredCourse;
    return (
        <div>
            <Col>
                <Card className="featured-course">
                    <Card.Img className="thumbnail mx-auto" variant="top" src={oeCourseThumb} />
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
                        <div className="row">
                            <p className="col-md-4 list-style-none">{clockIcon} <span>{oeCourseDuration}</span></p>
                            <p className="col-md-4 list-style-none">{lessonIcon}<span> {oeCourseLessons} Lessons</span></p>
                            <p className="col-md-4 list-style-none fs-3 text-danger fw-bolder">{DollarIcon}<span> {oePrice}</span></p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Featured;