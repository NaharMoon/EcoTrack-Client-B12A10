import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import GoogleButton from '../../components/ui/GoogleButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { AuthContext } from '../../context/AuthContext';
import { PiEyeClosed } from 'react-icons/pi';
import { VscEye } from 'react-icons/vsc';
import { toast } from 'react-toastify';

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);
        const [email, setEmail] = useState('');

    const { redirect } = useContext(AuthContext);
    const handleSignIn = (e) => {
        e.preventDefault();
        // console.log('handleSignIn fired');
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log({email,password});

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                toast.success('Login Successfull!');
                redirect();
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-14">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold"><span className='text-secondary'>Login</span> to Eco<span className='text-primary'>Track...</span></h1>
                    <p className="py-6">
                        {/* Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi. */}
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl hover:scale-110 transition-all duration-1000">
                    <div className="card-body  hover:scale-105 transition-all duration-500">
                        <form
                            onSubmit={handleSignIn}
                            action="">
                            <fieldset className="fieldset">
                                {/* email */}
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    className="input w-full"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                {/* password */}
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name='password'
                                        className="input w-full"
                                        placeholder="Password"
                                        required
                                    />
                                    <button
                                        type='button'
                                        className='absolute right-4 top-3'
                                        onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <PiEyeClosed size={16} /> : <VscEye size={16} />}
                                    </button>
                                </div>
                                <div>
                                    <Link to={`/auth/forgotPass?email=${encodeURIComponent(email)}`}
                                        className="link link-hover"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <p className="text-center">Don't have an account? <Link to={'/auth/register'}>Register</Link></p>
                            </fieldset>
                        </form>
                        <div className="card-body mt-2 pt-2">
                            <p className='text-center'>___________or continue with___________</p>
                            {/* Google */}
                            <GoogleButton></GoogleButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;