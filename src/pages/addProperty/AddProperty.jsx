import { useContext, useState } from 'react';
import { Input } from '@mantine/core';
import { AuthContext } from "../../authProvider/Provider";

const AddProperty = () => {
    const { user } = useContext(AuthContext)

    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [image, setImage] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [rooms, setRooms] = useState('');

    const [nameError, setNameError] = useState('');
    const [detailsError, setDetailsError] = useState('');
    const [imageError, setImageError] = useState('');
    const [locationError, setLocationError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [bathroomsError, setBathroomsError] = useState('');
    const [roomsError, setRoomsError] = useState('');

    // validateFunction...
    const validateName = (newName) => {
        if (newName.trim() === '') {
            setNameError('Name is required');
        } else {
            setNameError('');
        }
    };
    const validateDetails = (newDetails) => {
        if (newDetails.trim() === '') {
            setDetailsError('Details are required');
        } else {
            setDetailsError('');
        }
    };
    const validateImage = (newImage) => {
        if (newImage === '') {
            setImageError('Image URL is required');
            return false;
        } else {
            setImageError('');
            return true;
        }
    };
    const validateLocation = (newLocation) => {
        if (newLocation.trim() === '') {
            setLocationError('Location is required');
            return false;
        } else {
            setLocationError('');
            return true;
        }
    };
    const validateNumberField = (value, fieldName) => {
        if (value.trim() === '') {
            return `${fieldName} type need valid number`;
        } else if (isNaN(value) || +value <= 0) {
            return `${fieldName} must be a valid positive number`;
        } else {
            return '';
        }
    };
    const validatePrice = (newPrice) => {
        const error = validateNumberField(newPrice, 'price');
        setPriceError(error);
        return !error;
    };
    const validateBathrooms = (newBathrooms) => {
        const error = validateNumberField(newBathrooms, 'Bathrooms');
        setBathroomsError(error);
        return !error;
    };
    const validateRooms = (newRooms) => {
        const error = validateNumberField(newRooms, 'Rooms');
        setRoomsError(error);
        return !error;
    };

    // submit button 
    const handleSubmit = async () => {
        if (!user) {
            return alert('Please login First')
        }
        // Validate each form field
        validateName(name), validateDetails(details), validateImage(image), validateLocation(location), validatePrice(price), validateBathrooms(bathrooms), validateRooms(rooms)

        // Check if all fields are valid
        if (name && details && image && location && price && bathrooms && rooms) {

            const formData = { name, email: user?.email, details, image, location, price, bathrooms, rooms };
            console.log(formData);

            try {
                const response = await fetch('http://localhost:3000/api/add-properties', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    alert('Form data submitted successfully');
                    // Reset the form data if needed
                    setName(''), setDetails(''), setImage(''), setLocation(''), setPrice(''), setBathrooms(''), setRooms('')
                } else {
                    console.error('Failed to submit form data:', response.statusText);
                }
            } catch (error) {
                console.error('Error submitting form data:', error.message);
            }
            console.log('Form submitted successfully');
        } else {
            // At least one field is not valid, display an error message or handle it accordingly
            console.log('Form submit failed. Please check the form for errors.');
        }
    };

    return (
        <div className="p-10 flex flex-col gap-2 items-center justify-center">
            <h1 className="text-4xl text-[#1f3e72] font-bold pb-4">Add Property</h1>
            {/* Input fields for the form */}
            <div className=' w-full lg:w-1/2'>
                <div className=' w-full'>
                    <label className='text-start text-xl text-[#1f3e72] font-sans'> Name :</label>
                    <Input
                        size="md"
                        radius="md"
                        label="Name"
                        placeholder="Enter property name"
                        value={name}
                        className='w-full'
                        onChange={(e) => {
                            setName(e.target.value);
                            validateName(e.target.value);
                        }}
                    />
                    {nameError && <div className='text-red-500'>{nameError}</div>}

                </div>

                <div >
                    <label className='text-start text-xl text-[#1f3e72] font-sans'>Details</label>
                    <Input
                        size="md"
                        radius="md"
                        label="Details"
                        placeholder="Enter property details"
                        value={details}
                        onChange={(e) => {
                            setDetails(e.target.value);
                            validateDetails(e.target.value);
                        }}
                    />
                    {detailsError && <div className='text-red-500'>{detailsError}</div>}
                </div>

                <div>
                    <label className='text-start text-xl text-[#1f3e72] font-sans'>Image Url</label>
                    <Input
                        size="md"
                        radius="md"
                        label="image"
                        placeholder="Enter property image url"
                        value={image}
                        onChange={(e) => {
                            setImage(e.target.value);
                            validateImage(e.target.value);
                        }}
                    />
                    {imageError && <div className='text-red-500'>{imageError}</div>}
                </div>
                <div>
                    <label className='text-start text-xl text-[#1f3e72] font-sans pb-8'>location</label>
                    <Input
                        size="md"
                        radius="md"
                        label="location"
                        placeholder="Enter property location quantity"
                        value={location}
                        onChange={(e) => {
                            setLocation(e.target.value);
                            validateLocation(e.target.value);
                        }}
                    />
                    {locationError && <div className='text-red-500'>{locationError}</div>}

                </div>
                <div>
                    <label className='text-start text-xl text-[#1f3e72] font-sans pb-8'>Price</label>
                    <Input
                        size="md"
                        radius="md"
                        label="Price"
                        placeholder="Enter property price"
                        type="number"
                        onChange={(e) => {
                            setPrice(e.target.value);
                            validatePrice(e.target.value);
                        }}
                    />
                    {priceError && <div className='text-red-500'>{priceError}</div>}

                </div>

                <div>
                    <label className='text-start text-xl text-[#1f3e72] font-sans pb-8'>Bathrooms</label>
                    <Input
                        size="md"
                        radius="md"
                        label="bathrooms"
                        placeholder="Enter property bathrooms quantity"
                        type="number"
                        value={bathrooms}
                        onChange={(e) => {
                            setBathrooms(e.target.value);
                            validateBathrooms(e.target.value);
                        }}
                    />
                    {bathroomsError && <div className='text-red-500'>{bathroomsError}</div>}

                </div>
                <div>
                    <label className='text-start text-xl text-[#1f3e72] font-sans pb-8'>Rooms</label>
                    <Input
                        size="md"
                        radius="md"
                        label="Rooms"
                        placeholder="Enter property Rooms quantity"
                        type="number"
                        value={rooms}
                        onChange={(e) => {
                            setRooms(e.target.value);
                            validateRooms(e.target.value);
                        }}
                    />
                    {roomsError && <div className='text-red-500'>{roomsError}</div>}

                </div>

            </div>
            <div className=' py-4'>
                <button onClick={handleSubmit} className="bg-[#1f3e72] w-80  text-white p-2 rounded-md hover:bg-blue-700"> Submit</button>
            </div>

        </div>
    );
};

export default AddProperty;