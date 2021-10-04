import { Card, Col } from 'react-bootstrap';
import './Featured.css';

const Featured = (props) => {
    const { oeCourseThumb, oeCategory, oeCourseTItle, oeRatings, oeRatingCount } = props.featuredCourse;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="thumbnail mx-auto" variant="top" src={oeCourseThumb} />
                    <Card.Body>
                        <small>{oeCategory}</small>
                        <Card.Title>C{oeCourseTItle}</Card.Title>
                        <Card.Text className="text-warning">
                            Ratings: {oeRatings} ({oeRatingCount} Reviews)
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Featured;