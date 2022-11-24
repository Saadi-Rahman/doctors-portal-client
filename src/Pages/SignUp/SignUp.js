import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    const handleSignUp = (data) => {
        setSignUpError('');

        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('User Created Successfully!')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
                .then(() =>{
                    saveUser(data.name, data.email);
                })
                .catch(error => console.log(error));
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message)
        });
    }

    const saveUser = (name, email) =>{
        const user = {name, email};
        fetch('https://doctors-portal-server-tan.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
        })
    }

    

    return (
        <div className="hero min-h-screen">
            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h3 className='text-3xl font-bold text-center'>Sign Up</h3>
                    
                    <form onSubmit={handleSubmit(handleSignUp)}>
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
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" placeholder="Enter your password" className="input input-bordered"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {value: 6, message: "Password must be 6 characters or longer!"},
                                    pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: "Password must have a special character with a lower case, upper case and a number!"}
                                })}
                            />
                            {errors.password && <small className='text-red-500'>{errors.password.message}</small>}
                            {signUpError && <small className='text-red-500'>{signUpError}</small>}
                        </div>
                        
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-accent" />
                        </div>

                        <label className="label py-0">
                            <small>Already have an Account? <Link to="/login" className="link link-hover text-secondary">Please Login</Link></small>
                        </label>
                    </form>

                    {/* <div className="divider my-0">OR</div>

                    <div className="form-control mt-2">
                        <button className="btn btn-outline btn-accent">Continue with Google</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SignUp;