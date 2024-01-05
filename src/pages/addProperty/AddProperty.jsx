import { useState } from 'react';
import { Button, Group, Input } from '@mantine/core';

const AddProperty = () => {
    // const [active, setActive] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        details: '',
        location: '',
        image: '',
        price: '',
        bathrooms: '',
        rooms: ''
    });
    const [errors, setErrors] = useState({
        name: 'nai',
        details: '',
        image: '',
        price: '',
        bathrooms: '',
        rooms: '',
        location: ''
    });

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));

    };


    // data send server and save in database.
    const handleSubmit = async () => {

        // Proceed with form submission
        console.log('Form data submitted successfully');
        setFormData({
            name: '',
            details: '',
            location: '',
            image: '',
            price: '',
            bathrooms: '',
            rooms: ''
        });

        console.log(formData);
        console.log(errors);
        // try {
        //     const response = await fetch('http://localhost:3000/api/add-properties', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formData),
        //     });
        //     if (response.ok) {
        //         console.log('Form data submitted successfully');
        //         // Reset the form data if needed
        //         setFormData({
        //             name: '',
        //             details: '',
        //             location: '',
        //             image: '',
        //             price: '',
        //             bathrooms: '',
        //             rooms: ''
        //         });
        //     } else {
        //         console.error('Failed to submit form data:', response.statusText);
        //     }
        // } catch (error) {
        //     console.error('Error submitting form data:', error.message);
        // }
    };


    return (
        <div className="p-10 flex flex-col gap-2 items-center justify-center">
            <h1 className="text-4xl text-[#1f3e72] font-bold pb-4">Add Property</h1>

            {/* Input fields for the form */}

            <div className=' w-1/2'>
                <div className=' w-full'>
                    <label className='text-start text-xl text-[#1f3e72] font-sans'> Name :</label>
                    <Input
                        size="md"
                        radius="md"
                        label="Name"
                        placeholder="Enter property name"
                        value={formData.name}
                        className='w-full'
                        onChange={(event) => handleChange('name', event.target.value)}
                    />
                    {errors.name && <div className='text-red-500'>{errors.name}</div>}

                </div>

                <div>
                    <label className='text-start text-xl text-[#1f3e72] font-sans'>Details</label>
                    <Input
                        size="md"
                        radius="md"
                        label="Details"
                        placeholder="Enter property details"
                        value={formData.details}
                        className=''
                        onChange={(event) => handleChange('details', event.target.value)}
                    />
                    {errors.details && <div className='text-red-500'>{errors.details}</div>}
                </div>

                <div>
                    <label className='text-start text-xl text-[#1f3e72] font-sans'>Image Url</label>
                    <Input
                        size="md"
                        radius="md"
                        label="image"
                        placeholder="Enter property image url"
                        value={formData.image}
                        className=''
                        onChange={(event) => handleChange('image', event.target.value)}
                    />
                </div>
                <div>
                    <label className='text-start text-xl text-[#1f3e72] font-sans pb-8'>Price</label>
                    <Input
                        size="md"
                        radius="md"
                        label="Price"
                        placeholder="Enter property price"
                        type="number"
                        value={formData.price}
                        className=''
                        onChange={(event) => handleChange('price', event.target.value)}
                    />
                </div>

                <div>
                    <label className='text-start text-xl text-[#1f3e72] font-sans pb-8'>Bathrooms</label>
                    <Input
                        size="md"
                        radius="md"
                        label="bathrooms"
                        placeholder="Enter property bathrooms quantity"
                        type="number"
                        value={formData.bathrooms}
                        className=''
                        onChange={(event) => handleChange('bathrooms', event.target.value)}
                    />
                </div>
                <div>
                    <label className='text-start text-xl text-[#1f3e72] font-sans pb-8'>Rooms</label>
                    <Input
                        size="md"
                        radius="md"
                        label="Rooms"
                        placeholder="Enter property Rooms quantity"
                        type="number"
                        value={formData.Rooms}
                        className=''
                        onChange={(event) => handleChange('Rooms', event.target.value)}
                    />
                </div>
                <div>
                    <label className='text-start text-xl text-[#1f3e72] font-sans pb-8'>location</label>
                    <Input
                        size="md"
                        radius="md"
                        label="location"
                        placeholder="Enter property location quantity"
                        type="number"
                        value={formData.location}
                        className=''
                        onChange={(event) => handleChange('location', event.target.value)}
                    />
                </div>
            </div>



            <Group justify="center" mt="xl">
                <Button className="text-black border-2 border-gray-300" onClick={handleSubmit}>
                    Submit
                </Button>
            </Group>
        </div>
    );
};

export default AddProperty;