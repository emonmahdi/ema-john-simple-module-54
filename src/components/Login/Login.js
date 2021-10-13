import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => { 
    const {user , signInUsingGoogle} = useFirebase()
    return (
        <div className='d-flex justify-content-center align-items-center border w-25 p-3 mt-4 mx-auto'>
            <div >
                <h2>Login</h2>
                <form onSubmit=''>
                    <input className='form-control' type="email" placeholder='Your Email' />
                    <br />
                    <input className='form-control' type="password" placeholder='Your Password' />
                    <br />
                    <input className='btn btn-primary' type="submit" value='Submit' />
                </form>
                <p>New User Ema-John ? <Link to='/register'>Create Account</Link> </p>
                <div>---------------or--------------</div>
                <button onClick={signInUsingGoogle} className='btn btn-warning'> Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;