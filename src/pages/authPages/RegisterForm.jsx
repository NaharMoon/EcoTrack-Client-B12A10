import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import GoogleButton from '../../components/ui/GoogleButton';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { PiEyeClosed } from 'react-icons/pi';
import { VscEye } from 'react-icons/vsc';
import { toast } from 'react-toastify';

const RegisterForm = () => {
    const [userData, setUserData] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const { redirect, postUserInDB } = useContext(AuthContext);
    const [password, setPassword] = useState('');
    // console.log(password);

    const handlePasswordOnChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (value.length < 6) {
            setError("Password must be at least 6 characters");
        }
        else if (!/[A-Z]/.test(value)) {
            setError("Password must contain at least one uppercase letter");
        }
        else if (!/[a-z]/.test(value)) {
            setError("Password must contain at least one lowercase letter");
        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            setError("Password must contain at least one special character");
        }
        else {
            setError(""); // সব ঠিক
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log('handleRegister fired');
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        // console.log({ email, password });

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                toast.success('Registration Successfull!');

                const profile = {
                    displayName: name,
                    photoURL: photoURL,
                }

                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        setUserData({
                            ...userData,
                            displayName: auth.currentUser.displayName,
                            photoURL: auth.currentUser.photoURL,
                        });
                        toast.success("Profile Updated.");
                        // console.log("Profile Updated.");
                    })
                    .catch((error) => {
                        console.log(error.message);
                    })

                // //userData
                // const newUser = {
                //     user_name : result.user.displayName,
                //     user_email : result.user.email,
                //     user_image : result.user.photoURL,
                // }

                // //GoogleUser Data post in DataBase
                // fetch('http://localhost:5000/api/users', {
                //     method: 'POST',
                //     headers: {
                //         'content-type' : 'application/json'
                //     },
                //     body: JSON.stringify(newUser)
                // })
                // .then( res => res.json())
                // .then( data => {
                //     console.log('after user saved in DB: ',data);
                // })

                postUserInDB(result);
                redirect();
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold"><span className='text-secondary'>Join </span> with Eco<span className='text-primary'>Track.....</span></h1>
                    <p className="py-6">
                        {/* Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi. */}
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl hover:scale-110 transition-all duration-1000">
                    <div className="card-body  hover:scale-105 transition-all duration-500">
                        <form
                            onSubmit={handleRegister}
                            action="">
                            <fieldset className="fieldset">
                                {/* name */}
                                <label className="label">name</label>
                                <input
                                    type="text"
                                    name='name'
                                    className="input w-full"
                                    placeholder="Your Name"
                                    required
                                />
                                {/* email */}
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    className="input w-full"
                                    placeholder="Email"
                                    required
                                />
                                {/* password */}
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        className="input w-full"
                                        placeholder="Password"
                                        onChange={handlePasswordOnChange}
                                        required
                                    />
                                    <button
                                        type='button'
                                        className='absolute right-4 top-3'
                                        onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <PiEyeClosed size={16} /> : <VscEye size={16} />}
                                    </button>
                                    {error && <p className='text-error mt-1'>{error}</p>}
                                </div>
                                {/* photoURL */}
                                <label className="label">PhotoURL</label>
                                <input
                                    type="text"
                                    name='photoURL'
                                    className="input w-full"
                                    placeholder="PhotoURL"
                                    required
                                />
                                <button className="btn btn-neutral mt-4">Register</button>
                                <p className="text-center">Already have an account? <Link to={'/auth/login'}>Login</Link></p>
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

export default RegisterForm;