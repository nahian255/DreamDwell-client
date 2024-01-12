import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/Provider";
import { Input } from "@mantine/core";

const Login = () => {

    const { loginfunction } = useContext(AuthContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('');

    console.log(email, emailError);

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


    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    // };
    // const handlePasswordChange = (event) => {
    //     setPassword(event.target.value);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();

        validateEmail(email), validatePassword(password)
        if (email && password) {
            loginfunction(email, password)
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

                });
            navigate('/')
        } else {
            // At least one field is not valid, display an error message or handle it accordingly
            console.log('Login failed. Please check the form for errors.');
        }



        console.log('Clicked:', email, password);
    };

    return (
        <div className="p-10 flex flex-col gap-2 items-center justify-center">
            <h1 className="text-4xl text-[#1f3e72] font-bold">Login</h1>

            <form onSubmit={handleSubmit} className='w-full lg:w-1/2'>
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


                {/* <input
                   
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    
                /> */}
                <div>
                    <p> don't Singup, go to the  <Link to={'/register'} className="bg-blue-500">Register</Link> page</p>
                </div>


                <div className=' py-4'>
                    <button type="submit" className="bg-[#1f3e72] w-80  text-white p-2 rounded-md hover:bg-blue-700"> Login</button>
                </div>
                {/* <button type="submit">Submit</button> */}
            </form>
        </div>
    );
};

export default Login;