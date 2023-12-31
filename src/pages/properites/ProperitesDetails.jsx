import { useLoaderData } from "react-router-dom";
import { useContext, useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
// map 
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { AuthContext } from "../../authProvider/Provider";

const ProperitesDetails = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData();
    const { bathroom, detail, image, name, price, rooms, _id } = data
    // console.log(bathroom, detail, image, name, price, rooms, _id);
    // console.log(data, user?.email)


    const position = [51.505, -0.09];
    const [value, setValue] = useState(null);
    const [opened, { open, close }] = useDisclosure(false)

    const addBooking = async () => {
        // Check if user is authenticated
        if (!user) {
            alert('login first')
            return;
        }
        try {
            // Prepare booking data
            // const bookingData = { email: user?.email, bathroom, detail, image, name, price, rooms, _id }
            const bookingData = {
                dataId: _id,
                name: name,
                detail: detail,
                image: image,
                email: user?.email,
                price: price,
                bathroom: bathroom,
                rooms: rooms
            };
            // Send POST request to the booking API endpoint
            const response = await fetch('http://localhost:3000/api/add-bookingProperty', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // You may need to include an authentication token here
                    // 'Authorization': `Bearer ${yourAuthToken}`,
                },
                body: JSON.stringify(bookingData),
            });

            if (response.ok) {
                console.log('Booking successful');
                // Additional logic after successful booking
            } else {
                console.error('Booking failed:', response.statusText);
                // Handle the error accordingly
            }
        } catch (error) {
            console.error('Error during booking:', error.message);
            // Handle the error accordingly
        } finally {
            // Close the modal regardless of success or failure
            close();
        }
    };


    return (
        <div className="px-24">
            <div className="py-8">
                <img className="w-full rounded-xl" src={data.image} alt="" />
            </div>
            <div className="flex gap-28">
                <h1 className="text-[#1f3e72] text-4xl font-bold">{data.name}</h1>
                <h1 className='text-xl py-1'><span className='text-orange-500 font-semibold'>$</span> {data.price}</h1>
            </div>
            <div className="flex gap-5">
                <section className=" w-1/2 ">
                    <div className="flex gap-3 py-4">
                        <p>{data.bathroom} bathroom </p>
                        <p> parking </p>
                        <p>{data.rooms} bathroom </p>
                    </div>
                    <div>
                        <p className="text-lg py-2 text-[#8c8b8b]">{data.detail}</p>
                        <p className="text-lg py-2 text-[#8c8b8b]">Location</p>
                        <button type="submit"
                            className="bg-[#1f3e72] text-white p-2 rounded-md hover:bg-blue-700"
                            onClick={open}  >
                            Booking Now
                        </button>
                        <>
                            <Modal className="" opened={opened} onClose={close} title="">
                                {/* Modal content */}
                                <DatePicker className="bg-red-30 text-center" allowDeselect value={value} onChange={setValue} />
                                <button className="bg-[#1f3e72] text-white p-2 rounded-md hover:bg-blue-700" onClick={addBooking} >
                                    Booking Confrime
                                </button>
                            </Modal>
                        </>
                        <div>
                        </div>
                    </div>
                </section>
                {/* map section */}
                <section className=" w-1/2">
                    <h1>map here</h1>

                    <MapContainer center={position} zoom={13} style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; OpenStreetMap contributors'
                        />
                        <Marker position={position} >
                            <Popup>
                                A marker with a popup.
                            </Popup>
                        </Marker>
                    </MapContainer>

                </section>
            </div>

        </div>
    );
};

export default ProperitesDetails;