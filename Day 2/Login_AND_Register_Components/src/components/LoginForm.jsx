import React, { useState } from 'react';
import '../assets/css/Form.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
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
            setError('Invalid email format');
            return;
        }

        if (!validatePassword(password)) {
            setError('Password must be between 8 and 15 characters');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/users');
            const users = await response.json();

            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                navigate('/home');
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className='form__container'>
            <div className="form-container2">
                <form className='register__form' method='POST' onSubmit={handleSubmit}>
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
                    {error && <p className='error__message'>{error}</p>}
                    <button className='submit__btn' type="submit">Login</button>
                    <p>New user?<span><Link style={{ textDecoration: 'none', marginLeft: '3px' }} to={`/register`}>Register here</Link></span></p>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
