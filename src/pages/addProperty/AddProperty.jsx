import { useState } from 'react';
import { Stepper, Button, Group, Input } from '@mantine/core';

const AddProperty = () => {
    const [active, setActive] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        details: '',
        price: '',
    });

    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    // data send server and save in database.
    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/add-properties', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Form data submitted successfully');
                // Reset the form data if needed
                setFormData({
                    name: '',
                    details: '',
                    price: '',
                });
            } else {
                console.error('Failed to submit form data:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form data:', error.message);
        }
    };


    return (
        <div className="p-16">
            <h1 className="text-4xl text-[#1f3e72] font-bold">Add Property</h1>

            {/* Input fields for the form */}
            <Input
                label="Name"
                placeholder="Enter property name"
                value={formData.name}
                onChange={(event) => handleChange('name', event.target.value)}
            />
            <Input
                label="Details"
                placeholder="Enter property details"
                value={formData.details}
                onChange={(event) => handleChange('details', event.target.value)}
            />
            <Input
                label="Price"
                placeholder="Enter property price"
                type="number"
                value={formData.price}
                onChange={(event) => handleChange('price', event.target.value)}
            />

            <Stepper active={active} onStepClick={setActive}>
                {/* ... Stepper steps as before */}
            </Stepper>

            <Group justify="center" mt="xl">
                <Button variant="default" onClick={prevStep}>
                    Back
                </Button>
                <Button className="text-black border-2 border-gray-300" onClick={nextStep}>
                    Next step
                </Button>
                {active === 3 && (
                    <Button className="text-black border-2 border-gray-300" onClick={handleSubmit}>
                        Submit
                    </Button>
                )}
            </Group>
        </div>
    );
};

export default AddProperty;
