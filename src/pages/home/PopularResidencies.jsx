import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
"../../assets/contact.jpg"

const PopularResidencies = () => {
    const [data, setData] = useState([]);

    // Function to truncate text to the first n words
    const truncateText = (text, numWords) => {
        const words = text?.split(' ');
        const truncated = words?.slice(0, numWords).join(' ');
        return words?.length > numWords ? `${truncated}...` : truncated;
    };

    console.log(data);
    useEffect(() => {
        fetch('http://localhost:3000/api/properites')
            .then(res => res.json())
            .then(data => data(setData(data)))
    }, []);

    return (
        <div className="py-6">
            <h1 className="text-orange-500 font-sans text-2xl font-semibold"> Best choiess</h1>
            <h1 className="text-4xl font-sans text-[#1f3e72] font-bold"> Popular Residencies</h1>
            <div className='py-4'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <div className=''>
                        {
                            data?.map(item => (
                                // console.log(item.image)
                                <div key={item.price}>
                                    <SwiperSlide>
                                        <div className='hover:bg-blue-100 p-3 rounded-xl'>
                                            <div className=''>
                                                <img className='rounded-2xl h-20 w-20 lg:h-[220px]' src={item.image} alt="" />
                                                <h1 className='text-xl py-1'><span className='text-orange-500 font-semibold '>$</span> {item.price}</h1>
                                            </div>
                                            <h1 className='text-[#1f3e72] text-2xl font-bold'>{truncateText(item.name, 10)}</h1>
                                            <p className='text-sm py-2'>{truncateText(item.detail, 10)}</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            ))
                        }
                    </div>

                </Swiper>
            </div>
        </div>
    );
};

export default PopularResidencies;