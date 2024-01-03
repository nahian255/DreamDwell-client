import { useLoaderData } from "react-router-dom";

const ProperitesDetails = () => {
    const data = useLoaderData();
    console.log(data)

    return (
        <div className="px-24">
            <div className="py-8">
                <img className="w-full rounded-xl" src={data.image} alt="" />
            </div>
            <h1 className="text-[#1f3e72] text-4xl font-bold">{data.name}</h1>
            <p>rest of the content here</p>
        </div>
    );
};

export default ProperitesDetails;