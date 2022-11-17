import React from 'react';

const AppointmentOption = ({appointmentOption, setTreatment}) => {
    const {name, slots} = appointmentOption;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary font-bold mb-2">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div className="card-actions mt-4">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(appointmentOption)}
                        htmlFor="booking-modal" 
                        className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
                    >Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;