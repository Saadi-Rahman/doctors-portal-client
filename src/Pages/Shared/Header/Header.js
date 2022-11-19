import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(error => console.log(error));
    }

    const menuItems = <React.Fragment>
        <li><Link to="/" className="btn btn-ghost rounded-lg">Home</Link></li>
        <li><Link to="/appointment" className="btn btn-ghost">Appointment</Link></li>
        <li><Link to="/about" className="btn btn-ghost">About</Link></li>
        {user?.uid ? 
            <>
                <li><Link to="/dashboard" className="btn btn-ghost">Dashboard</Link></li>
                <li><button onClick={handleLogOut} className="btn btn-ghost rounded-lg">Logout</button></li>
            </>
            :
            <li><Link to="/login" className="btn btn-ghost rounded-lg">Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 flex justify-between shadow lg:px-20">
            <div className="">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;