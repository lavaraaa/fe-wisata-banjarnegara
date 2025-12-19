import React, { useState, useContext, useRef, useEffect } from 'react';
import { AuthContext } from '../../pages/auth/AuthContext';
import AnimasiAwal from './AnimasiAwal';
import axios from 'axios';

const PopupChatbot = () => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [started, setStarted] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input.trim(), user: true }]);
    setStarted(true);
    const userMessage = input.trim();
    setInput('');

    setIsTyping(true);

    // tambahkan pesan placeholder untuk animasi titik-titik
    setMessages(prev => [...prev, { text: '', user: false, isLoading: true }]);

    try {
      const res = await axios.post(`${import.meta.env.VITE_CHATBOT_URL}/chat/query`, {
        query: userMessage
      });
      const botResponse = res.data.data.response;

      // mulai animasi mengetik setelah 800ms (titik-titik muncul dulu)
      setTimeout(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
          if (index === botResponse.length) {
            clearInterval(typingInterval);
            setIsTyping(false);
            // hapus flag isLoading
            setMessages(prev => {
              const updated = [...prev];
              const last = updated[updated.length - 1];
              if (last.isLoading) last.isLoading = false;
              return updated;
            });
            return;
          }

          setMessages(prev => {
            const updated = [...prev];
            const last = updated[updated.length - 1];
            if (last.isLoading) {
              last.text = botResponse[index];
              last.isLoading = false;
            } else {
              last.text += botResponse[index];
            }
            return updated;
          });
          index++;
        }, 25);
      }, 300); // titik-titik selama 800ms

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { text: 'Koneksi gagal', user: false }]);
      setIsTyping(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
          height: '300px',
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
                fontStyle: msg.isLoading ? 'italic' : 'normal',
              }}
            >
              {msg.isLoading ? <TypingDots /> : msg.text}
            </div>
          ))}
        <div ref={chatEndRef} />
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

// Komponen animasi titik-titik
const TypingDots = () => {
  return (
    <span style={{ display: 'inline-block' }}>
      <span className="dot">.</span>
      <span className="dot">.</span>
      <span className="dot">.</span>
      <style>{`
        .dot {
          animation: blink 1.4s infinite both;
          margin-right: 2px;
        }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes blink {
          0%, 80%, 100% { opacity: 0; }
          40% { opacity: 1; }
        }
      `}</style>
    </span>
  );
};

export default PopupChatbot;
