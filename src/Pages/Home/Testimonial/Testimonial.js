import React from 'react';
import quote from '../../../assets/icons/quote.svg';

const Testimonial = () => {
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
            <div>

            </div>
        </section>
    );
};

export default Testimonial;