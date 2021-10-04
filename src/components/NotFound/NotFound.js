import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <Link className="btn btn-primary btn-lg" to="/home">Take Me Home</Link>
                            <Link className="btn btn-outline-primary btn-lg" to="/contact">Contact Us</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;