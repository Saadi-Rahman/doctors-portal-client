import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer style={{backgroundImage: `url(${footer})`, backgroundPosition: 'center'}}>
            <div className='footer p-12'>
                <div>
                    <span className="text-lg font-bold">Services</span> 
                    <Link to="/" className="link link-hover">Branding</Link>
                    <Link to="/" className="link link-hover">Design</Link>
                    <Link to="/" className="link link-hover">Marketing</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </div> 
                <div>
                    <span className="text-lg font-bold">Company</span> 
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press kit</Link>
                </div> 
                <div>
                    <span className="text-lg font-bold">Legal</span> 
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='text-sm text-center font-semibold my-6'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;