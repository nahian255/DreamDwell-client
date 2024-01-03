import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from "../../utils/slider.json"
"../../assets/contact.jpg"
const PopularResidencies = () => {
    console.log(data);
    return (
        <div className="px-28 py-6">
            <h1 className="text-orange-500 font-sans text-2xl font-semibold"> Best choiess</h1>
            <h1 className="text-4xl font-sans text-[#1f3e72] font-bold"> Popular Residencies</h1>
            <div className='py-4 '>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    {
                        data.map(item => (
                            // console.log(item.image)
                            <div key={item.price}>
                                <SwiperSlide>
                                    <div className='hover:bg-blue-100 p-3 rounded-xl'>
                                        <div className=''>
                                            <img className='rounded-2xl h-[220px]' height={50} src={item.image} alt="" />
                                            <h1 className='text-xl py-1'><span className='text-orange-500 font-semibold '>$</span> {item.price}</h1>
                                        </div>
                                        <h1 className='text-[#1f3e72] text-2xl font-bold'>{item.name}</h1>
                                        <p className='text-sm py-2'>{item.detail}</p>
                                    </div>
                                </SwiperSlide>

                            </div>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default PopularResidencies;