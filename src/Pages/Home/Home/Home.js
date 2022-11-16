import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Exceptional from '../Exceptional/Exceptional';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;