import { format } from 'date-fns';
import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const BookingModal = ({treatment, setTreatment, selectedDate}) => {
    const {name, slots} = treatment; // treatment is just another name of appointmentOptions with name, slots, _id
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,

        }

        // TODO: send data to the server. Once data is saved then close the modal and display success toast
        console.log(booking);
        setTreatment(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6">{name}</h3>
                    <form onSubmit={handleBooking} className='flex flex-col'>
                        <input type="text" value={date} disabled className="input input-bordered input-primary w-full mb-4" />
                        <select name='slot' className="select select-primary w-full mb-4">
                            {
                                slots.map((slot, index) => <option
                                    key={index} 
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered input-primary w-full mb-4" required />
                        <input name='email' type="email" placeholder="Email Address" className="input input-bordered input-primary w-full mb-4" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered input-primary w-full mb-4" required />
                        <PrimaryButton>Submit</PrimaryButton>
                </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;