import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/Provider";

const Login = () => {

    const { loginfunction } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

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

        console.log('Clicked:', email, password);
    };

    return (
        <div className="p-14">
            <h1 className="text-4xl text-[#1f3e72] font-bold">Login</h1>

            <form onSubmit={handleSubmit} className='flex flex-col'>

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
                <Link to={'/register'} >Register</Link>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;