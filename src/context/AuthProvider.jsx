import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';
import { useLocation, useNavigate } from 'react-router';

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const redirect = () => {
        return navigate(location.state ? location.state : '/');
    };
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log("Successfull Google SignIn!", result.user);
                redirect();
            })
            .catch(error => {
                alert(error.message);
            })
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                alert('Sign Out Successfull');
                setUser(null);
            })
            .catch((error) => {
                alert(error.message);
            })
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('Current User: ', currentUser);
                setUser(currentUser);
                setLoading(false);
            }
            else {
                console.log('No signedIn user found!');
                setLoading(false);
            }
        })
        return () => unsubscribe();
    }, []);

    const authInfo = {
        handleGoogleSignIn,
        handleSignOut,
        user,
        setUser,
        loading,
        setLoading,
        redirect,
    };

    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;