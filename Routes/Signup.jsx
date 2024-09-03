import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom'; 
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../utils/firebase';
import '../components/Login/Signup.css'

const Signup = () => {
    const [contact, setContact] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState(''); 
    const [success, setSuccess] = useState(''); 
    const navigate = useNavigate(); 

    const { displayName, email, password, confirmPassword } = contact;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact((preValue) => ({
            ...preValue,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, { displayName });
            setSuccess('Sign up successful! Redirecting to login page...');
            setTimeout(() => {
                navigate('/login'); // Redirect to login page after a delay
            }, 1000); 
        } catch (error) {
            setError('Error creating user: ' + error.message);
        }
    };

    return (
        <div className='header-div'>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
            {success && <p style={{ color: 'green' }}>{success}</p>} {/* Display success message */}

            <Input
                name='displayName'
                type='text'
                placeholder='Name'
                onChange={handleChange}
                value={contact.displayName}
            />
            <br />
            <Input
                name='email'
                type='email'
                placeholder='Email'
                onChange={handleChange}
                value={contact.email}
            />
            <br />
            <Input
                name='password'
                type='password'
                placeholder='Password'
                onChange={handleChange}
                value={contact.password}
            />
            <br />
            <Input
                name='confirmPassword'
                type='password'
                placeholder='Confirm Password'
                onChange={handleChange}
                value={contact.confirmPassword}
            />
            <br />
            <button onClick={handleSubmit}>
                Sign Up
            </button>
            <br />
            <br />
            <Link to='/login'>
                Login
            </Link>
        </div>
    );
};

export default Signup;
