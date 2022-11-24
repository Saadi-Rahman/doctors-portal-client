import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null);

    const closeModal =  () => {
        setDeleteDoctor(null);
    }

    const {data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try{
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch(error){

            }
        }
    });

    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${doctor.name} deleted successfully!`)
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
        <h3 className='text-2xl font-semibold my-5'>Manage Doctors: {doctors?.length}</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Specialty</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        doctors.map((doctor, i) => <tr key={doctor._id}>
                            <th>{i+1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={doctor.image} alt="" />
                                    </div>
                                </div>
                            </td>
                            <td>{doctor.name}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.specialty}</td>
                            <td>
                                <label onClick={() => setDeleteDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-xs btn-outline btn-error">Delete</label>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        {
            deleteDoctor && 
            <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message = {`If you delete ${deleteDoctor.name}, it cannot be undone!`}
                successAction = {handleDeleteDoctor}
                successBtnName = "Delete"
                modalData = {deleteDoctor}
                closeModal={closeModal}
            ></ConfirmationModal>
        }
    </div>
    );
};

export default ManageDoctors;