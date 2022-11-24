import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-tan.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }

                // save doctor's info to the database
                fetch('https://doctors-portal-server-tan.vercel.app/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully!`);
                    navigate('/dashboard/managedoctors');
                })
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div className='md:ml-4'>
            <h3 className='text-2xl font-semibold my-5'>Add A Doctor</h3>
            <div className="card w-full max-w-md shadow-xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleAddDoctor)} className="">
                        <div className="form-control">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" placeholder="Enter your Name" className="input input-bordered"
                                {...register("name", {
                                    required: "Name is required!"
                                })}
                            />
                            {errors.name && <small className='text-red-500'>{errors.name.message}</small>}
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered"
                                {...register("email", {
                                    required: "Email is required!"
                                })}
                            />
                            {errors.email && <small className='text-red-500'>{errors.email.message}</small>}
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text">Specialty</span></label>
                            <select {...register('specialty')} className="select select-bordered" required>
                                {
                                    specialties.map(specialty => <option
                                        key={specialty._id}
                                        value={specialty.name}
                                    >{specialty.name}</option>)
                                }
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text">Photo</span></label>
                            <input type="file"
                                {...register("image", {
                                    required: "Photo is required!"
                                })}
                            />
                            {errors.image && <small className='text-red-500'>{errors.image.message}</small>}
                        </div>
                        
                        <div className="form-control mt-6">
                            <input type="submit" value="Add Doctor" className="btn btn-accent" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

/**
 * Three places to store images
 * 1. Third party image hosting server
 * 2. File system of your server
 * 3. MongoDB (database)
 */

export default AddDoctor;