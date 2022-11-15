import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
        },
        {
            _id: 2,
            name: 'Harry Brook',
            img: people2,
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'New York',
        },
        {
            _id: 3,
            name: 'Mark Messon',
            img: people3,
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Ohio',
        },
    ]

    return (
        <section className='mx-5 lg:mx-20 my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-lg text-primary font-bold uppercase'>Testimonial</h4>
                    <h2 className='text-3xl text-accent font-semibold'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;