import React, { useState, useContext } from 'react';
import { AuthContext } from '../../pages/auth/AuthContext';
import AnimasiAwal from './AnimasiAwal';
import axios from 'axios';

const PopupChatbot = () => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [started, setStarted] = useState(false);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input.trim(), user: true }]);
    setStarted(true);    
    const userMessage = input.trim();
    setInput('');
    try {
      const res = await axios.post(`${import.meta.env.VITE_CHATBOT_URL}/chat/query`, {
        query: userMessage
      });
      const botResponse = res.data.data.response;
      setMessages((prev) => [...prev, { text: botResponse, user: false }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { text: 'Koneksi gagal', user: false },
      ]);
    }
  };

  return (
    <>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: started ? 'flex-start' : 'center',
          alignItems: 'center',
          position: 'relative',
          overflowY: 'auto',
          padding: '8px',
        }}
      >
        {!started && <AnimasiAwal />}
        {started &&
          messages.map((msg, i) => (
            <div
              key={i}
              style={{
                alignSelf: msg.user ? 'flex-end' : 'flex-start',
                backgroundColor: msg.user ? '#015E78' : '#e0e0e0',
                color: msg.user ? '#fff' : '#000',
                padding: '5px 10px',
                borderRadius: '13px',
                margin: '4px 2px',
                maxWidth: '80%',
                wordBreak: 'break-word',
              }}
            >
              {msg.text}
            </div>
          ))}
      </div>

      <div style={{ display: 'flex', padding: '10px', gap: '6px' }}>
        <input
          type="text"
          placeholder="Ketik pesan..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
          style={{
            flex: 1,
            padding: '8px',
            border: '1px solid #ccc',
            outline: 'none',
            borderRadius: 10,
          }}
        />
        <button
          onClick={handleSend}
          style={{
            backgroundColor: '#015E78',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '5px 10px',
            cursor: 'pointer',
            fontSize: '18px',
          }}
        >
          <i className="bi bi-send-fill"></i>
        </button>
      </div>
    </>
  );
};

export default PopupChatbot;
