import { useState, useEffect } from "react"; 

export const Form = () => {
    const [replies, setReplies] = useState('Your replies will appear here...');
    const [message, setMessage] = useState('');

    // Fetch initial data when the component mounts
    useEffect(() => {
        fetch('/api')
            .then(res => res.json())
            .then(data => {
                setReplies(data.input);
            });
    }, []);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const message = document.getElementById('message').value;
        fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        })
        .then(res => res.json()) // Parse the JSON response
        .then(data => {
            console.log('Response data:', data); // Log the response data
            setReplies(data.replies); // Update replies with the response data
            document.getElementById('message').value = ''; // Clear the input field after submission
        })
        .catch(error => {
            console.error('Error:', error); // Log any errors
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-teal-500" id="form">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Start Chatting</h2>

                {/* Form to submit a message */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Type your message (up to 20 words)</label>
                        <textarea
                            id="message"
                            className="w-full h-24 px-3 py-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            placeholder="Type your message here..."
                            maxLength={140} // Approx. 20 words
                        />
                    </div>

                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Submit Message
                        </button>
                    </div>
                </form>

                {/* Display replies */}
                <div className="mt-6">
                    <h3 className="text-lg font-bold text-gray-800">Replies:</h3>
                    <div className="border border-gray-300 rounded-lg p-4 h-32 overflow-y-auto">
                        <p className="text-gray-600">{replies}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;