import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Card, Image, Text, Badge, Button, Group, Loader } from '@mantine/core';

// Function to truncate text to the first n words
const truncateText = (text, numWords) => {
    const words = text?.split(' ');
    const truncated = words?.slice(0, numWords).join(' ');
    return words?.length > numWords ? `${truncated}...` : truncated;
};

const Properites = () => {

    const [isLoading, setIsLoading] = useState(true);
    const data = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');

    // Simulate loading delay (remove this in production)
    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(delay);
    }, []);

    // Filter data based on the search query
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className=' px-8 md:px-20 py-8 min-h-screen'>

            {isLoading ?
                <>
                    <div className='items-center flex justify-center p-20'> <Loader color="pink" />
                    </div>
                </>
                :
                <>
                    <h1 className="text-4xl text-[#1f3e72] font-bold pb-4 text-center">All Property</h1>
                    <div className="mb-4 items-center flex justify-center">
                        <input
                            type="text"
                            placeholder="Search by property name..."
                            // value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="px-3 py-2 border-2 border-gray-500 rounded-md lg:w-1/2"
                        />
                    </div>
                    <div className='grid lg:grid-cols-3 gap-4'>
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


                                    <Link to={`/properites/${item._id}`}>
                                        <Button className='bg-[#1f3e72] hover:bg-blue-700' color="" fullWidth mt="md" radius="md">
                                            View Details
                                        </Button>
                                    </Link>
                                </Card>
                            </div>
                        ))}
                    </div>
                </>}

        </div>
    );
};

export default Properites;
