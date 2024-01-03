import { Link, useLoaderData, } from 'react-router-dom';

const Properites = () => {
    const data = useLoaderData()
    // console.log(data._id)
    return (
        <div className='px-24 py-8'>
            <div className='grid grid-cols-3 gap-4'>
                {data.map(item => (
                    // console.log(item._id)
                    <div key={item._id}>
                        <Link to={`/properites/${item._id}`}>
                            <div className='hover:bg-blue-100 p-3 rounded-xl'>
                                <div className=''>
                                    <img className='rounded-2xl h-[220px]' height={50} src={item.image} alt="" />
                                    <h1 className='text-xl py-1'><span className='text-orange-500 font-semibold'>$</span> {item.price}</h1>
                                </div>
                                <h1 className='text-[#1f3e72] text-2xl font-bold'>{item.name}</h1>
                                <p className='text-sm py-2'>{item.detail}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Properites;