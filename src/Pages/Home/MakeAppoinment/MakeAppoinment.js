import React from 'react';
import doctor1 from '../../../assets/images/doctor-small.png';
import appoinment from '../../../assets/images/appointment.png';

const MakeAppoinment = () => {
    return (
        <section style={{backgroundImage: `url(${appoinment})`, height: 'auto'}}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-6 py-6 lg:pb-0">
                    <div className="">
                        <img src={doctor1} className="-mt-24 hidden lg:block" alt=''/>
                    </div>
                    <div className='max-w-2xl'>
                        <h4 className='text-lg text-primary font-bold uppercase'>Appoinment</h4>
                        <h1 className="text-4xl text-white font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;