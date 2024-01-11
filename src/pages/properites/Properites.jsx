import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

// Function to truncate text to the first n words
const truncateText = (text, numWords) => {
    const words = text?.split(' ');
    const truncated = words?.slice(0, numWords).join(' ');
    return words?.length > numWords ? `${truncated}...` : truncated;
};

const Properites = () => {
    const data = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');

    // Filter data based on the search query
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(filteredData);

    // example code ...

    return (
        <div className=' px-8 md:px-20 py-8'>
            <h1 className="text-4xl text-[#1f3e72] font-bold pb-4 text-center">All Property</h1>

            {/* Search field */}
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
                        <Link to={`/properites/${item._id}`}>
                            <div className='hover:bg-blue-100 p-3 rounded-xl'>
                                <div>
                                    <img className='rounded-2xl h-[220px]' height={50} src={item.image} alt="" />
                                    <h1 className='text-xl py-1'><span className='text-orange-500 font-semibold'>$</span> {item.price}</h1>
                                </div>
                                <h1 className='text-[#1f3e72] text-2xl font-bold'>{truncateText(item.name, 10)}</h1>
                                <p className='text-sm py-2'>{truncateText(item.detail, 10)}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Properites;
