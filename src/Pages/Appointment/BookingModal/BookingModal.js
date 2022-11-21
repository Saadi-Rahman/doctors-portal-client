import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({treatment, setTreatment, selectedDate, refetch}) => {
    const {name: treatmentName, slots} = treatment; // treatment is just another name of appointmentOptions with name, slots, _id
    const date = format(selectedDate, 'PP');
    const {user} = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
        }

        // TODO: send data to the server. Once data is saved then close the modal and display success toast
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged) {
                setTreatment(null);
                toast.success('Booking Confirmed!');
                refetch();
            }
            else{
                toast.error(data.message);
            }
        })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6">{treatmentName}</h3>
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
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered input-primary w-full mb-4" required />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered input-primary w-full mb-4" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered input-primary w-full mb-4" required />
                        <PrimaryButton>Submit</PrimaryButton>
                </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;