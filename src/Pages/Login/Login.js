import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const {register, handleSubmit} = useForm();
    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h3 className='text-3xl font-bold text-center'>Login</h3>
                        
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password")} type="password" placeholder="Enter your password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <input type="submit" value="Login" className="btn btn-accent" />
                            </div>
                            <label className="label py-0">
                                <small>New to Doctor's Portal? <Link to="/register" className="link link-hover text-secondary">Create an Account</Link></small>
                            </label>
                        </form>
                        <div className="divider my-0">OR</div>
                        <div className="form-control mt-2">
                            <button className="btn btn-outline btn-accent">Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;