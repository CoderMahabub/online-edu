import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedCourses></FeaturedCourses>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;