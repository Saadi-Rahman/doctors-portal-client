import React from 'react';
import { Link } from 'react-router-dom';
import gif from '../../../assets/images/dribbble_2.gif';

const NotFoundRoute = () => {
    return (
        <div className='hero flex flex-col justify-center items-center h-screen'> 
            <div>
                <img src={gif} alt="" />
            </div>
            <p className='text-3xl font-bold pb-2'>404 Not Found!</p>
            <p>Woops!! Looks like this page doesn't exist!</p>
            <small>Back to <Link to="/" className="link link-hover text-primary font-semibold">Home</Link></small>
        </div>
    );
};

export default NotFoundRoute;