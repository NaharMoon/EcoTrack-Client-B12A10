import React, { useContext } from 'react';
import { Link } from 'react-router';
import GoogleButton from '../../components/ui/GoogleButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { AuthContext } from '../../context/AuthContext';

const LoginForm = () => {

    const {redirect} = useContext(AuthContext);
    const handleSignIn = (e) => {
        e.preventDefault();
        // console.log('handleSignIn fired');
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log({email,password});

        signInWithEmailAndPassword(auth,email,password)
        .then(()=>{
            alert('Login Successfull!');
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
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form
                            onSubmit={handleSignIn}
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
                                    name='password'
                                    className="input"
                                    placeholder="Password"
                                    required
                                />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <p className="">Don't have an account? <Link to={'/auth/register'}>Register</Link></p>
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

export default LoginForm;