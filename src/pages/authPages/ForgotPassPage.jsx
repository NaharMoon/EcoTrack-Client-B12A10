import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { auth } from '../../firebase/firebase.config';
import { toast } from 'react-toastify';

const ForgotPassPage = () => {

    const [searchParams] = useSearchParams();
    const [email, setEmail] = useState('');
    // console.log(email);

    useEffect(() => {
        const fillEmail = searchParams.get("email") || "";
        if (fillEmail) {
            setEmail(fillEmail);
        }
    }, [searchParams]);
    const handleResetPassword = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // console.log("Password reset email sent. Check your email: ",email);
                toast.success("Password reset email sent. Check your email: ", email);
                window.location.href = "https://mail.google.com";
            })
            .catch((error) => {
                console.log(error.message);
                toast.error(error.message);
            })
    }
    return (
        <div className='flex justify-center items-center'>
            <div className="min-h-screen pt-10 mx-auto">
                <h1 className="card-body text-secondary text-5xl font-bold pl-0">Forgot Password? </h1>
                <div className="card  md:w-100 shrink-0 shadow-2xl hover:scale-105 transition-all duration-500">
                    <form onSubmit={handleResetPassword} className="card-body">
                        <fieldset className="fieldset">
                            {/* email */}
                            <label className="label font-black">Email</label>
                            <input
                                type="email"
                                className="border-2 p-2 rounded-md border-secondary focus:outline-2 focus:outline-accent"
                                placeholder="Email"
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button className="btn btn-secondary mt-4 text-primary">Reset</button>
                            <div ><Link to={"/auth/login"}
                                className="link link-hover"
                            >
                                Back to Login</Link></div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassPage;