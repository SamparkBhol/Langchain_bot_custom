import React, { useState } from 'react';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleSendMessage = async () => {
        if (!message.trim()) return;

        const newChatHistory = [...chatHistory, { message, from: 'user' }];
        setChatHistory(newChatHistory);
        setMessage('');

        try {
            const response = await fetch('http://localhost:8000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            const data = await response.json();
            setChatHistory([...newChatHistory, { message: data.response, from: 'bot' }]);
        } catch (error) {
            console.error("Error sending message:", error);
            setChatHistory([...newChatHistory, { message: 'Error sending message', from: 'bot' }]);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">LangChain Chatbot</div>
                <div className="card-body" style={{ height: '400px', overflowY: 'scroll' }}>
                    {chatHistory.map((chat, index) => (
                        <div key={index} className={`mb-2 ${chat.from === 'user' ? 'text-end' : 'text-start'}`}>
                            <span className={`badge ${chat.from === 'user' ? 'bg-primary' : 'bg-secondary'}`}>
                                {chat.message}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="card-footer">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <button className="btn btn-primary" onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
