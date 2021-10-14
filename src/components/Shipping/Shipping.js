import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {

    const {user} = useAuth()
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
            <h2 className='text-center text-danger'>Shipping Form</h2>
          <form className='w-25 mx-auto border p-3 mt-4' onSubmit={handleSubmit(onSubmit)}> 
            <input className='form-control mb-2' defaultValue={user.displayName} {...register("name")} /> 
            <input defaultValue={user.email} placeholder='email' className='form-control mb-2' {...register("email", { required: true })} /> 
            <input placeholder='Adress' className='form-control mb-2' defaultValue="" {...register("Adress")} /> 
            <input placeholder='City' className='form-control mb-2' defaultValue="" {...register("City")} /> 
            <input placeholder='Phone' className='form-control mb-2' defaultValue="" {...register("Phone")} /> 
            {errors.email && <span className='text-danger'>This field is required</span>  }
            <br />
            <input className='btn btn-primary' type="submit" />
    </form>
        </div>
    );
};

export default Shipping;