import { useContext, useState } from 'react';
import { AuthContext } from '../../authProvider/Provider';
import { Input } from '@mantine/core';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('');

    const { singUp } = useContext(AuthContext)

    const validateName = (newName) => {
        if (newName.trim() === '') {
            setNameError('Name is required');
        } else {
            setNameError('');
        }
    };
    const validateEmail = (newEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!newEmail.trim()) {
            setEmailError('Email is required');
            return false;
        } else if (!emailRegex.test(newEmail)) {
            setEmailError('Invalid email format');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    };
    const validatePassword = (newPassword) => {
        // Add your custom password validation logic here
        // For example, you can check for minimum length or any other criteria
        if (!newPassword.trim()) {
            setPasswordError('Password is required');
            return false;
        } else if (newPassword.length < 5) {
            setPasswordError('Password must be at least 6 characters long');
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        validateName(name), validateEmail(email), validatePassword(password)
        if (name && email && password) {
            singUp(email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    // ..
                });
        } else {
            alert('SingUp failed. Please check the form for errors.');

        }
    };

    return (
        <div className="p-10 flex flex-col gap-2 items-center justify-center">
            <h1 className="text-4xl text-[#1f3e72] font-bold">Signup</h1>
            <form onSubmit={handleSubmit} className='w-full lg:w-1/2'>
                <div>
                    <label className='text-start text-xl text-[#1f3e72] font-sans'>name</label>
                    <Input
                        size="md"
                        radius="md"
                        label="Name"
                        placeholder="Enter your name"
                        value={name}
                        className='w-full'
                        onChange={(e) => {
                            setName(e.target.value);
                            validateName(e.target.value);
                        }}
                    />
                    {nameError && <div className='text-red-500'>{nameError}</div>}
                </div>
                <div>
                    <label className='text-start text-xl text-[#1f3e72] font-sans'>Email</label>
                    <Input
                        size="md"
                        radius="md"
                        label="Name"
                        placeholder="Enter your email"
                        value={email}
                        className='w-full'
                        onChange={(e) => {
                            setEmail(e.target.value);
                            validateEmail(e.target.value);
                        }}
                    />
                    {emailError && <div className='text-red-500'>{emailError}</div>}
                </div>
                <div>
                    <label className='text-start text-xl text-[#1f3e72] font-sans'>Password</label>
                    <Input
                        size="md"
                        radius="md"
                        label="Name"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        className='w-full'
                        onChange={(e) => {
                            setPassword(e.target.value);
                            validatePassword(e.target.value);
                        }}
                    />
                    {passwordError && <div className='text-red-500'>{passwordError}</div>}
                </div>
                <div className=' py-4'>
                    <button type="submit" className="bg-[#1f3e72] w-80  text-white p-2 rounded-md hover:bg-blue-700">SingUp</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
