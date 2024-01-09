import { useLoaderData } from "react-router-dom";
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
// map 
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const ProperitesDetails = () => {
    const data = useLoaderData();
    console.log(data)

    const position = [51.505, -0.09];
    const [value, setValue] = useState(null);

    return (
        <div className="px-24">
            <div className="py-8">
                <img className="w-full rounded-xl" src={data.image} alt="" />
            </div>

            <div className="flex gap-28">
                <h1 className="text-[#1f3e72] text-4xl font-bold">{data.name}</h1>
                <h1 className='text-xl py-1'><span className='text-orange-500 font-semibold'>$</span> {data.price}</h1>
            </div>
            <div className="flex gap-5">
                <section className=" w-1/2 ">

                    <div className="flex gap-3 py-4">
                        <p>{data.bathroom} bathroom </p>
                        <p> parking </p>
                        <p>{data.rooms} bathroom </p>
                    </div>
                    <div>
                        <p className="text-lg py-2 text-[#8c8b8b]">{data.detail}</p>
                        <p className="text-lg py-2 text-[#8c8b8b]">Location</p>
                        <button
                            type="submit"
                            className="bg-[#1f3e72] text-white p-2 rounded-md hover:bg-blue-700"
                        >
                            Booking Now
                        </button>

                        <div>
                            <DatePicker allowDeselect value={value} onChange={setValue} />
                        </div>
                    </div>

                </section>
                {/* map section */}
                <section className=" w-1/2">
                    <h1>map here</h1>

                    <MapContainer center={position} zoom={13} style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; OpenStreetMap contributors'
                        />
                        <Marker position={position} >
                            <Popup>
                                A marker with a popup.
                            </Popup>
                        </Marker>
                    </MapContainer>

                </section>
            </div>

        </div>
    );
};

export default ProperitesDetails;