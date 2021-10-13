import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='d-flex justify-content-center align-items-center border w-25 p-3 mt-4 mx-auto'>
            <div>
                <h3>Register: Create Account </h3>
                <form onSubmit="">
                    <input className='form-control' type="text" placeholder='Your Name' />
                    <br />
                    <input className='form-control' type="email" placeholder='Your Email' />
                    <br />
                    <input className='form-control' type="email" placeholder='Re-enter Email' />
                    <br />
                    <input className='btn btn-success' type="submit" value='Submit' />
                </form>
                <p>Already have an Account  <Link to='/login'>Login</Link> </p>
                <div>------------------or-----------------</div>
                <button className='btn btn-warning'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;