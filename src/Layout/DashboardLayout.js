import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='mx-5 lg:mx-20 mt-2'>
                <div className="drawer drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        
                        <li><Link to="">Sidebar Item 1</Link></li>
                        <li><Link to="">Sidebar Item 2</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;