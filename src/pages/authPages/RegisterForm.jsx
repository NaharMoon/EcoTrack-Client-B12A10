import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import GoogleButton from '../../components/ui/GoogleButton';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const RegisterForm = () => {
    
    const {redirect,postUserInDB} = useContext(AuthContext);
    const [password, setPassword] = useState('');
    console.log(password);

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log('handleRegister fired');
        const email = e.target.email.value;
        // console.log({ email, password });

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                alert('Registration Successfull!');

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
                alert(error.message);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form
                            onSubmit={handleRegister}
                            action="">
                            <fieldset className="fieldset">
                                {/* email */}
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    className="input"
                                    placeholder="Email"
                                    required
                                />
                                {/* password */}
                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    className="input"
                                    placeholder="Password"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    required
                                />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                                <p className="">Already have an account? <Link to={'/auth/login'}>Login</Link></p>
                            </fieldset>
                        </form>
                        {/* Google */}
                        <GoogleButton></GoogleButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;