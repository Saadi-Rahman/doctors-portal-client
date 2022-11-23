import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        console.log(data);
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
                                {...register("img", {
                                    required: "Photo is required!"
                                })}
                            />
                            {errors.img && <small className='text-red-500'>{errors.img.message}</small>}
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

export default AddDoctor;