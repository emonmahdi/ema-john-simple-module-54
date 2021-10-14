import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'; 

const Login = () => { 
    const { signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop' 

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

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
                <p>New User Ema-John Website? <Link to='/register'>Create Account</Link> </p>
                <div>---------------or--------------</div>
                <button onClick={handleGoogleLogin} className='btn btn-warning'> Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;