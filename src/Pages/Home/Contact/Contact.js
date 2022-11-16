import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import appoinment from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section style={{backgroundImage: `url(${appoinment})`, height: 'auto'}}>
            <div className='text-center max-w-lg py-20 mx-auto'>
                <h4 className='text-lg text-primary font-bold uppercase'>Contact Us</h4>
                <h1 className="text-3xl text-white font-semibold mb-4">Stay Connected With Us</h1>
                <form className='flex flex-col p-5'>
                    <input type="text" placeholder="Email Address" className="input input-bordered input-primary w-full mb-4" />
                    <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full mb-4" />
                    <textarea className="textarea textarea-primary mb-5" placeholder="Your Message"></textarea>
                    <PrimaryButton>Submit</PrimaryButton>
                </form>
            </div>
        </section>
    );
};

export default Contact;