import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/Provider";
import { Link } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import Swal from "sweetalert2";


// Function to truncate text to the first n words
const truncateText = (text, numWords) => {
    const words = text?.split(' ');
    const truncated = words?.slice(0, numWords).join(' ');
    return words?.length > numWords ? `${truncated}...` : truncated;
};

const MyProperty = () => {

    const { user } = useContext(AuthContext)

    const [myProperty, setMyProperty] = useState([]);
    console.log(myProperty);

    useEffect(() => {
        // Assuming user.email is available in your component's state or props
        if (user?.email) {
            fetch(`https://anothertry-q9vd.onrender.com/api/myadded-properites?email=${user?.email}`)
                .then(response => response.json())
                .then(data => {
                    // Update state with the received booking data
                    setMyProperty(data);
                })
                .catch(error => {
                    console.error('Error retrieving booking data:', error);
                });
        }
    }, [user?.email]);

    const [searchQuery, setSearchQuery] = useState('');

    // Filter data based on the search query
    const filteredData = myProperty?.filter(item =>
        item.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // fack delete poperty
    const deleteProperty = async (id) => {
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
                const response = await fetch(`https://anothertry-q9vd.onrender.com/api/delete-add-property/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Property Delete Succesfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    window.location.reload();
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
        <>
            {
                myProperty && myProperty.length > 0 ?
                    <div className=' px-8 md:px-20 py-8'>
                        <h1 className="text-4xl text-[#1f3e72] font-bold pb-4 text-center">My Property</h1>
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

                        <div className='grid lg:grid-cols-3 gap-4'>
                            {filteredData?.map(item => (
                                // console.log(item)
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


                                        <Link to={`/properites/${item._id}`}>
                                            <Button className='bg-[#1f3e72] hover:bg-blue-700' color="" fullWidth mt="md" radius="md">
                                                View Details
                                            </Button>
                                        </Link>
                                        <Button onClick={() => deleteProperty(item._id)} className='bg-[#f33b41] hover:bg-red-700' color="" fullWidth mt="md" radius="md">
                                            Delete Property
                                        </Button>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                    : <div className="px-24 py-8">
                        <h1 className="text-4xl text-[#1f3e72] font-bold pb-4 text-center">My Property</h1>

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
                        <h1 className="text-4xl text-[#1f3e72] font-bold pb-4 text-center">Don&apos;t Add any property yet</h1>
                    </div>
            }
        </>

    );
};

export default MyProperty;