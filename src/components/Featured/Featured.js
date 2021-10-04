import { Card, Col } from 'react-bootstrap';
import './Featured.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBook, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Featured = (props) => {
    const clockIcon = <FontAwesomeIcon icon={faClock} />
    const lessonIcon = <FontAwesomeIcon icon={faBook} />
    const DollarIcon = <FontAwesomeIcon icon={faDollarSign} />
    const { oeCourseThumb, oeCategory, oeCourseTItle, oeRatings, oeRatingCount, oeCourseDuration, oeCourseLessons, oePrice } = props.featuredCourse;
    return (
        <div>
            <Col>
                <Card className="featured-course">
                    <Card.Img className="thumbnail mx-auto" variant="top" src={oeCourseThumb} />
                    <Card.Body>
                        <small>{oeCategory}</small>
                        <Card.Title>C{oeCourseTItle}</Card.Title>
                        <Card.Text className="text-warning">
                            Ratings: {oeRatings} ({oeRatingCount} Reviews)
                        </Card.Text>
                        <div className="row">
                            <p className="col-md-4 list-style-none">{clockIcon} <span>{oeCourseDuration}</span></p>
                            <p className="col-md-4 list-style-none">{lessonIcon}<span> {oeCourseLessons} Lessons</span></p>
                            <p className="col-md-4 list-style-none">{DollarIcon}<span> {oePrice}</span></p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Featured;