import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useUserContext } from '../UserContext';
import { toast } from 'react-toastify';
import '../Auth/Account.css'

const Account = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { login, register, users } = useUserContext();

    const loginFormik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Username is required')
                .min(5, 'Username must be at least 5 characters long')
                .max(20, 'Username must not exceed 20 characters'),
            password: Yup.string()
                .required('Please enter a password')
                .min(6, 'Password must be at least 6 characters')
                .max(20, 'Password must not exceed 20 characters')
        }),
        onSubmit: (values) => {
            login(values.username, values.password);
            console.log(values);
        }
    });

    const registerFormik = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Username is required')
                .min(5, 'Username must be at least 5 characters long')
                .max(20, 'Username must not exceed 20 characters'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string()
                .required('Please enter a password')
                .min(6, 'Password must be at least 6 characters')
                .max(20, 'Password must not exceed 20 characters'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Password confirmation does not match')
                .required('Please confirm your password')
        }),
        onSubmit: (values) => {
            const existingUser = users.find((user) => user.username === values.username);
            if (existingUser) {
                toast.dismiss();
                toast.error('Username already exists!');
                return;
            }

            if (values.password !== values.confirmPassword) {
                toast.dismiss();
                toast.error('Password confirmation does not match!');
                return;
            }

            register(values);
            console.log(values);
        }
    });

    return (
        <div className="container">
            <h2 className="heading">{isLogin ? 'Login' : 'Register'}</h2>

            {isLogin ? (
                <form onSubmit={loginFormik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username" className="label">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            onChange={loginFormik.handleChange}
                            onBlur={loginFormik.handleBlur}
                            value={loginFormik.values.username}
                            className="input-field"
                        />
                        {loginFormik.touched.username && loginFormik.errors.username && (
                            <div className="error-message">{loginFormik.errors.username}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={loginFormik.handleChange}
                            onBlur={loginFormik.handleBlur}
                            value={loginFormik.values.password}
                            className="input-field"
                        />
                        {loginFormik.touched.password && loginFormik.errors.password && (
                            <div className="error-message">{loginFormik.errors.password}</div>
                        )}
                    </div>

                    <button type="submit" className="button">Login</button>
                </form>
            ) : (
                <form onSubmit={registerFormik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username" className="label">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            onChange={registerFormik.handleChange}
                            onBlur={registerFormik.handleBlur}
                            value={registerFormik.values.username}
                            className="input-field"
                        />
                        {registerFormik.touched.username && registerFormik.errors.username && (
                            <div className="error-message">{registerFormik.errors.username}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={registerFormik.handleChange}
                            onBlur={registerFormik.handleBlur}
                            value={registerFormik.values.email}
                            className="input-field"
                        />
                        {registerFormik.touched.email && registerFormik.errors.email && (
                            <div className="error-message">{registerFormik.errors.email}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={registerFormik.handleChange}
                            onBlur={registerFormik.handleBlur}
                            value={registerFormik.values.password}
                            className="input-field"
                        />
                        {registerFormik.touched.password && registerFormik.errors.password && (
                            <div className="error-message">{registerFormik.errors.password}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="label">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            onChange={registerFormik.handleChange}
                            onBlur={registerFormik.handleBlur}
                            value={registerFormik.values.confirmPassword}
                            className="input-field"
                        />
                        {registerFormik.touched.confirmPassword && registerFormik.errors.confirmPassword && (
                            <div className="error-message">{registerFormik.errors.confirmPassword}</div>
                        )}
                    </div>

                    <button type="submit" className="button">Register</button>
                </form>
            )}

            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    setIsLogin(!isLogin);
                }}
                className="switch-link"
            >
                {isLogin ? "Don’t have an account? Register" : "Already have an account? Login"}
            </a>
        </div>
    );
};

export default Account;
