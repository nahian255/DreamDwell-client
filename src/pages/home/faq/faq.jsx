
import FaqItem from './FaqItem'; // Create a separate component for FAQ items

const faqData = [
    {
        question: 'Best interest rates on the market?',
        answer: 'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.',
    },
    {
        question: 'Prevent unstable prices',
        answer: 'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.',
    },
    {
        question: 'Best price on the market',
        answer: 'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.',
    },
    // Add more FAQ items as needed
];

function App() {
    return (
        <div className="container mx-auto mt-8">
            <div>
                {faqData.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
}

export default App;
