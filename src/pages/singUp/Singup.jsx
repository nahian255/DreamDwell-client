import { useContext, useState } from 'react';
import { Button, Input, Group } from '@mantine/core';
import { AuthContext } from '../../authProvider/Provider';

const Signup = () => {

    const magichoder = useContext(AuthContext)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = () => {
        // Perform signup logic or send data to the server
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="p-16">
            <h1 className="text-4xl text-[#1f3e72] font-bold">Signup</h1>

            {/* Input fields for the form */}
            <Input
                label="Name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(event) => handleChange('name', event.target.value)}
            />
            <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                value={formData.password}
                onChange={(event) => handleChange('password', event.target.value)}
            />

            <Group justify="center" mt="xl">
                <Button className="text-black border-2 border-gray-300" onClick={handleSubmit}>
                    Signup
                </Button>
            </Group>
        </div>
    );
};

export default Signup;
