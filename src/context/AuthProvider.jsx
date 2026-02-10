import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';
import { useLocation, useNavigate } from 'react-router';
import { baseURL } from '../utilities/utility';

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // reusable custome functions
    const redirect = () => {
        return navigate(location.state ? location.state : '/');
    };
    const postUserInDB = (result) => {
        //userData
        const newUser = {
            user_name: result.user.displayName,
            user_email: result.user.email,
            user_image: result.user.photoURL,
        }

        //GoogleUser Data post in DataBase
        // fetch('http://localhost:5000/api/users')
        fetch(`${baseURL}/api/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after user saved in DB: ', data);
            })
    };

    //firebase related functions
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log("Successfull Google SignIn!", result.user);

                // //userData
                // const newUser = {
                //     user_name: result.user.displayName,
                //     user_email: result.user.email,
                //     user_image: result.user.photoURL,
                // }

                // //GoogleUser Data post in DataBase
                // fetch('http://localhost:5000/api/users', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(newUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log('after user saved in DB: ', data);
                //     })

                postUserInDB(result);
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
        postUserInDB,
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