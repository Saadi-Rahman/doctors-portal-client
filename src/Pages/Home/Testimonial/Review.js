import React from 'react';

const Review = ({review}) => {
    const {name, img, userReview, location} = review;
    return (
        <div>
            <div className="card shadow-lg">
                <div className="card-body items-start">
                    <p>{userReview}</p>
                    <div className="card-actions justify-end items-center mt-5">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt='' />
                            </div>
                        </div>
                        <div className='ml-3'>
                            <h4 className='text-xl font-semibold'>{name}</h4>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;