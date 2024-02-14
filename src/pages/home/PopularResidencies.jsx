import 'swiper/css';
import { useEffect, useState } from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
"../../assets/contact.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const PopularResidencies = () => {

    const [data, setData] = useState([]);
    const newData = data.filter((item, index) => index < 3)

    // Function to truncate text to the first n words
    const truncateText = (text, numWords) => {
        const words = text?.split(' ');
        const truncated = words?.slice(0, numWords).join(' ');
        return words?.length > numWords ? `${truncated}...` : truncated;
    };

    // console.log(newData);
    useEffect(() => {
        fetch('http://localhost:3000/properites')
            .then(res => res.json())
            .then(data => data(setData(data)))
    }, []);

    return (
        <div className="py-6">
            <h1 className="text-orange-500 font-sans text-2xl font-semibold"> Best choiess</h1>
            <h1 className="text-4xl font-sans text-[#1f3e72] font-bold"> Popular Residencies</h1>
            <div className='py-4'>
                <div className='grid lg:grid-cols-3 gap-4'>
                    {
                        newData?.map(item => (
                            // console.log(item.image)
                            <div key={item.price}>
                                <Card shadow="sm" padding="lg" radius="md" withBorder>
                                    <Card.Section>
                                        <Image
                                            src={item.image}
                                            height={160}
                                            alt="property image"
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
                        ))
                    }
                </div>


                {/* <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        // when window width is >= 768px (md)
                        768: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 1024px (lg)
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                </Swiper> */}
            </div>
        </div>
    );
};

export default PopularResidencies;