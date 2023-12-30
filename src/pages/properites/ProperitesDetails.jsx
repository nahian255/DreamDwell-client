import { useLoaderData } from "react-router-dom";

const ProperitesDetails = () => {
    const data = useLoaderData();
    console.log(data)

    return (
        <div>
            <h1>this is properties deatailss {data.name}</h1>
        </div>
    );
};

export default ProperitesDetails;