import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Input from '../Input';
import Button from '../Button';
import { Link } from 'react-router-dom';
import '../App.css';
import '../components/Login/Login.css';
import { signInWithGooglePopup, createUserDocFromAuth, signInWithEmailAndPassword } from '../utils/firebase';

const Login = () => {
    const [contact, setContact] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState(''); 
    const navigate = useNavigate(); 

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact((preValue) => ({
            ...preValue,
            [name]: value
        }));
    };

    const handleLogin = async (event) => {
        event.preventDefault(); 
        try {
            await signInWithEmailAndPassword(contact.username, contact.password);
            navigate('/'); 
        } catch (error) {
            setError('Invalid email or password.'); 
        }
    };

    const logGoogleUser = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            await createUserDocFromAuth(user);
            navigate('/home'); // Redirect to home page upon successful Google login
        } catch (error) {
            setError('Google login failed.'); // Set error message
        }
    };

    return (
        <div className='header-div'>
            <h2>Welcome, Please Login Into Your Account</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

            <br />
            
            <form onSubmit={handleLogin}>
                <h4>Your email</h4>
                <Input
                    name='username'
                    type='text'
                    placeholder='username'
                    onChange={handleChange}
                    value={contact.username}
                />
                <br />
                <h4>Your password</h4>
                <Input
                    name='password'
                    type='password'
                    placeholder='password'
                    onChange={handleChange}
                    value={contact.password}
                />
                <br />
                <Button type='submit' text='Login' />
            </form>

            <br />
            <br />

            <button onClick={logGoogleUser}>
                Log in with Google
            </button>

            <br />
            <br />

            <Link to='/signup'>
                Signup Instead
            </Link>
        </div>
    );
};

export default Login;
