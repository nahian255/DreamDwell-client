import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import { AspectRatio, Avatar, Modal, } from '@mantine/core';
import locationImg from '../../assets/location.jpg'
import bathImg from '../../assets/bathroom.jpg'
import roomImg from '../../assets/rr.png'
import parkImg from '../../assets/parking.png'
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { AuthContext } from "../../authProvider/Provider";
import Swal from "sweetalert2";

const ProperitesDetails = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const data = useLoaderData();
    const { bathroom, details, image, name, price, rooms, _id, location } = data


    // bookingData .....
    const [bookingData, setBookingData] = useState([]);
    const filteredBookingData = bookingData?.filter(item => item?.dataId === _id)
    console.log(bookingData, 'filter', _id);
    const bookingId = filteredBookingData[0]?._id
    const isBookingConfirmed = filteredBookingData.length > 0;
    console.log(isBookingConfirmed, 'booking');


    useEffect(() => {
        // Assuming user.email is available in your component's state or props
        if (user?.email) {
            fetch(`http://localhost:3000/api/booking-properites?email=${user?.email}`)
                .then(response => response.json())
                .then(data => {
                    // Update state with the received booking data
                    setBookingData(data);
                })
                .catch(error => {
                    console.error('Error retrieving booking data:', error);
                });
        }
    }, [user?.email, _id]);

    const [value, setValue] = useState(null);
    const [opened, { open, close }] = useDisclosure(false)

    const addBooking = async () => {
        // Check if user is authenticated
        if (!user) {
            Swal.fire({
                icon: "error",
                title: "Login first",
            });
            return;
        }
        try {
            // const bookingData = { email: user?.email, bathroom, details, image, name, price, rooms, _id }
            const bookingData = {
                dataId: _id,
                name: name,
                details: details,
                image: image,
                email: user?.email,
                price: price,
                bathroom: bathroom,
                rooms: rooms,
                bookingConfirmed: true
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
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Booking Succesfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/booking-properites')
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

    // delete booking property
    const cancelBooking = async () => {
        const confirmationResult = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });
        if (confirmationResult.isConfirmed) {
            try {
                const response = await fetch(`http://localhost:3000/api/delete-booking-property/${bookingId}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json', },
                });
                if (response.ok) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Booking Cancels",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/booking-properites');
                } else {
                    Swal.fire({
                        icon: "error",
                        text: `Deletion failed ${response.statusText}`,
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    text: ` ${error.message}`,
                });
            }
        }
    };

    return (
        <div className="px-6 md:px-10 lg:px-24">
            <div className="py-8 flex justify-center items-center">
                <img className="w-full rounded-xl" src={data.image} alt="" />
            </div>
            <div className="flex gap-28">
                <h1 className="text-[#1f3e72] text-2xl lg:text-4xl font-bold">{data.name}</h1>
                <h1 className='text-xl py-1'><span className='text-orange-500 font-semibold'>$</span> {data.price}</h1>
            </div>
            <div className="md:flex gap-5">
                <section className=" md:w-1/2 ">
                    <div className="flex gap-3 py-4">
                        <div className="flex gap-1">
                            <Avatar radius="xl" size="1.3rem" className="mt-" src={roomImg} alt="it's me" />
                            <p>{bathroom} <span className="text-[#8c8b8b]"> Rooms</span> </p>
                        </div>
                        <div className="flex">
                            <Avatar radius="xl" size="1.3rem" className="mt-1" src={parkImg} alt="it's me" />
                            <p className="text-[#8c8b8b]"> parking </p>
                        </div>
                        <div className="flex gap-1">
                            <Avatar radius="xl" size="1.3rem" className="mt-" src={bathImg} alt="it's me" />
                            <p>{rooms} <span className="text-[#8c8b8b]"> bathrooms</span> </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm py-2 text-[#8c8b8b]">{details}</p>
                        <div className="flex">
                            <Avatar radius="xl" size="1.8rem" className="mt-2" src={locationImg} alt="it's me" />
                            <p className="text-lg py-2 text-[#8c8b8b]">
                                {location}</p>
                        </div>

                        <div className="py-2">
                            <button
                                type="submit"
                                className={`bg-[#1f3e72] text-white w-full p-2 rounded-md hover:bg-blue-700
                             ${isBookingConfirmed ? 'hidden' : ''}`}
                                onClick={open}
                            >
                                Booking Now
                            </button>
                            <button
                                type="button"
                                className={`bg-red-500  text-white w-full p-2 rounded-md hover:bg-red-700
                             ${isBookingConfirmed ? '' : 'hidden'}`}
                                onClick={cancelBooking}
                            >
                                Cancel Booking
                            </button>
                        </div>
                        {/* ${bookingConfirmed ? 'hidden' : ''} */}
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
                <section className=" md:w-1/2">
                    <AspectRatio ratio={19 / 9}>
                        <iframe
                            src={`https://www.google.com/maps/embed?pb=`}
                            title="Google map"
                            style={{ border: 0 }}
                        />
                    </AspectRatio>
                </section>
            </div>
        </div>
    );
};

export default ProperitesDetails;