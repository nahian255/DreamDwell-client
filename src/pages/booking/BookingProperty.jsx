import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../authProvider/Provider';
import { Link } from 'react-router-dom';

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
                        <Link to={{
                            pathname: `/properites/${item.dataId}`,
                            state: { bookingData: item }
                        }}>
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

export default BookingProperty;