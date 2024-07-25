import React, { useState } from 'react';
import '../assets/css/Form.css';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        if( password.length >= 8 && password.length <= 15)
            return true;
        return false;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!validateEmail(email)) {
            alert('Invalid email format');
            return;
        }

        if (!validatePassword(password)) {
            alert('Password is invalid');
            return;
        }

        const newUser = {
            username,
            email,
            password
        };

        try {
            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });

            if (response.ok) {
                navigate('/login');
            } else {
                console.error('Failed to register user');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='form__container'>
            <div className="form-container2">
                <form className='register__form' method='POST' onSubmit={handleSubmit}>
                    <div className="input__fields">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input__fields">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input__fields">
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            name="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button className='submit__btn' type="submit">Register</button>
                    <p>Existing user?<span><Link style={{ textDecoration: 'none', marginLeft: '3px' }} to={`/login`}>Login here</Link></span></p>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
