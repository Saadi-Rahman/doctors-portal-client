import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);

    // const {data:appointmentOptions = []} = useQuery({
    //     queryKey: ['appointmentOptions'],
    //     queryFn: () => fetch('http://localhost:5000/appointmentOptions')
    //     .then(res => res.json())
    // });

    const {data:appointmentOptions = []} = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/appointmentOptions');
            const data = await res.json();
            return data
        } 
    })

    return (
        <div>
            <h4 className='text-xl text-secondary text-center font-bold my-8'>Available Appointments on {format(selectedDate, 'PP')}</h4>
            <div className='mx-5 lg:mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;