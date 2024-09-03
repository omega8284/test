import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateUsername = (username) => {
        return username.includes('@');
    };

    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        return password.length >= 8 && hasUpperCase && hasLowerCase && hasNumber;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateUsername(username)) {
            setError('Username must contain an @ symbol.');
            return;
        }

        if (!validatePassword(password)) {
            setError('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, and a number.');
            return;
        }

        setError('');

       
        if (username === 'admin@gmail.com' && password === 'Omega@admin1') {
            navigate('/ap'); // Redirect to the Admin Panel
        } else {
            setError('Invalid username or password.');
        }
    };

    const styles = {
        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
        },
        form: {
            backgroundColor: '#E6E6FA',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '2rem 4rem',
            width: '100%',
        },
        inputGroup: {
            marginBottom: '1rem',
        },
        label: {
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 'bold',
        },
        input: {
            width: '100%',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ddd',
            boxSizing: 'border-box',
        },
        button: {
            width: '25%',
            padding: '0.75rem',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007BFF',
            color: '#fff',
            fontSize: '1rem',
            cursor: 'pointer',
            marginLeft: '100px',
        },
        error: {
            color: 'red',
            marginBottom: '1rem',
        },
        '@media (max-width: 600px)': {
            form: {
                padding: '1rem',
            },
        },
    };

    return (
        <div style={styles.wrapper}>
            <article>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <h2>Admin - Login</h2>
                    {error && <div style={styles.error}>{error}</div>}
                    <div style={styles.inputGroup}>
                        <label htmlFor="username" style={styles.label}>Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <Button variant="success" type="submit">Login</Button>
                </form>
            </article>
        </div>
    );
};

export default Login;
