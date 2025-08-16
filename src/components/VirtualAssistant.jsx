import React, { useState } from 'react';
import './VirtualAssistant.css';

export const VirtualAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      // Build history for context (optional)
      // For now, send empty array as per your example
      const body = {
        message: input,
        history: [],
      };

      const res = await fetch('https://rimro-rogbot.hf.space/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      const botReply = data.response;

      setMessages([...newMessages, { sender: 'bot', text: botReply }]);
    } catch (err) {
      setMessages([...newMessages, { sender: 'bot', text: '❌ Bot unavailable' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="virtual-assistant-container">
      <button
        className="chat-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Assistant"
      >
        🤖
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="message bot">🕐 RogBot is typing...</div>}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask RogBot something..."
            />
            <button onClick={sendMessage} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
