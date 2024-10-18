import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Dangki = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        axios.post('http://localhost:5000/register', data)
            .then((response) => {
                console.log('User registered:', response.data);
            })
            .catch((error) => {
                console.error('There was an error registering the user!', error);
            });
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('username')} placeholder="Username" />
                <input {...register('email')} type="email" placeholder="Email" />
                <input {...register('password')} type="password" placeholder="Password" />
                <input {...register('firstName')} placeholder="First Name" />
                <input {...register('lastName')} placeholder="Last Name" />
                <input {...register('dob')} type="date" placeholder="Date of Birth" />
                <input {...register('address')} placeholder="Address" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Dangki;
