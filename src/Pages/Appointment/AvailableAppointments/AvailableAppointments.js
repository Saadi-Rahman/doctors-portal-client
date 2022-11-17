import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);

    useEffect(() =>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <div>
            <h4 className='text-xl text-secondary text-center font-bold my-8'>Available Appointments on {format(selectedDate, 'PP')}</h4>
            <div className='mx-5 lg:mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                    ></AppointmentOption>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;