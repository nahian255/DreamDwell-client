// src/FaqItem.js
import { useState } from 'react';

function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-4">
            <div
                className="flex justify-between items-center bg-gray-200 p-4 cursor-pointer"
                onClick={toggleAccordion}
            >
                <div className="text-lg font-semibold">{question}</div>
                <div className={`text-xl ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                    &#9660;
                </div>
            </div>
            {isOpen && <div className="p-4 bg-white">{answer}</div>}
        </div>
    );
}

export default FaqItem;
