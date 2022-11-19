import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading){
        return <div className='hero min-h-screen'>
            <progress className="progress w-56"></progress>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{form: location}} replace></Navigate>
};

export default PrivateRoute;