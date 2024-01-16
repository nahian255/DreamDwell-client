import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../authProvider/Provider';
import { Link } from 'react-router-dom';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';


// Function to truncate text to the first n words
const truncateText = (text, numWords) => {
    const words = text?.split(' ');
    const truncated = words?.slice(0, numWords).join(' ');
    return words?.length > numWords ? `${truncated}...` : truncated;
};


const BookingProperty = () => {
    const { user } = useContext(AuthContext)

    const [bookingData, setBookingData] = useState([]);
    // console.log(bookingData, bookingConfirmed);

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
    }, [user?.email]);


    const [searchQuery, setSearchQuery] = useState('');

    // Filter data based on the search query
    const filteredData = bookingData?.filter(item =>
        item.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(filteredData, bookingData);

    return (
        <div className='px-24 py-8'>
            <h1 className="text-4xl text-[#1f3e72] font-bold pb-4 text-center">Bookings Property</h1>

            {/* Search field */}
            <div className="mb-4 items-center flex justify-center">
                <input
                    type="text"
                    placeholder="Search by property name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-3 py-2 border-2 border-gray-500 rounded-md w-1/2"
                />
            </div>

            <div className='grid grid-cols-3 gap-4'>
                {filteredData?.map(item => (
                    <div key={item._id}>

                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src={item.image}
                                    height={160}
                                    alt="Norway"
                                />
                            </Card.Section>

                            <Group justify="space-between" mt="md" mb="xs">
                                <Text className='text-[#1f3e72] text-2xl ' fw={700}>{truncateText(item.name, 10)}</Text>
                                <Badge className='text-sm' color="orange">$ {item.price}</Badge>
                            </Group>

                            <Text size="sm" c="dimmed">
                                {truncateText(item.details, 10)}
                            </Text>


                            <Link to={`/properites/${item.dataId}`}>
                                <Button className='bg-[#1f3e72] hover:bg-blue-700' color="" fullWidth mt="md" radius="md">
                                    View Details
                                </Button>
                            </Link>
                        </Card>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookingProperty;