import { useContext, useState } from 'react';
import { AuthContext } from '../../authProvider/Provider';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { singUp } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
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

        console.log('Clicked:', name, email, password);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className="p-16">
            <h1 className="text-4xl text-[#1f3e72] font-bold">Signup</h1>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                    className='border-2 border-gray-600 py-1'
                />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Signup;
