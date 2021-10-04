import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className="news-letter">
            <div className="w-50 mx-auto">
                <h2 className="fw-bold text-info">Subscribe Our Newsletter</h2>
                <p>If you want to know latest Course Update, Don't forget to Subscribe</p>
                <div className="input-group mb-3 container w-50 mx-auto">
                    <input type="text" className="form-control" placeholder="Type Your Email" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-lg btn-info fw-bold" type="button">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;