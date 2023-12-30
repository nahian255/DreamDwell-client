import { useState, useEffect } from 'react';


const Properites = () => {

    const [properties, setProperties] = useState([]);
    console.log(properties)

    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetch('http://localhost:3000/api/properites')
            .then(response => response.json())
            .then(data => setProperties(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

    return (
        <div className='px-24 py-8'>
            <h1> this is properites page</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    properties.map(item => (
                        // console.log(item.image)
                        <div key={item.price}>

                            <div className='hover:bg-blue-100 p-3 rounded-xl'>
                                <div className=''>
                                    <img className='rounded-2xl h-[220px]' height={50} src={item.image} alt="" />
                                    <h1 className='text-xl py-1'><span className='text-orange-500 font-semibold '>$</span> {item.price}</h1>
                                </div>
                                <h1 className='text-[#1f3e72] text-2xl font-bold'>{item.name}</h1>
                                <p className='text-sm py-2'>{item.detail}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Properites;