import React, { useState, useContext, useRef } from 'react';
import { AuthContext } from '../../pages/auth/AuthContext';
import AnimasiAwal from './AnimasiAwal';
import axios from 'axios';

const PopupChatbot = () => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [started, setStarted] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const chatContainerRef = useRef(null);
  const isUserAtBottomRef = useRef(true); // track posisi scroll user

  // cek posisi scroll user
  const handleScroll = () => {
    const container = chatContainerRef.current;
    if (!container) return;
    const atBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 20;
    isUserAtBottomRef.current = atBottom;
  };

  // scroll ke bawah full
  const scrollToBottom = (smooth = false) => {
    const container = chatContainerRef.current;
    if (!container) return;
    if (smooth) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      container.scrollTop = container.scrollHeight;
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    // tambahkan pesan user
    setMessages(prev => [...prev, { text: input.trim(), user: true }]);
    setStarted(true);
    setInput('');

    // scroll ke bawah saat user mengirim
    scrollToBottom(true);

    setIsTyping(true);
    // placeholder titik-titik
    setMessages(prev => [...prev, { text: '', user: false, isLoading: true }]);

    try {
      const res = await axios.post(`${import.meta.env.VITE_CHATBOT_URL}/chat/query`, {
        query: input.trim()
      });
      const botResponse = res.data.data.response;

      // delay titik-titik sebelum mengetik
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
            // scroll sekali full smooth di akhir
            if (isUserAtBottomRef.current) scrollToBottom(true);
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

          // scroll instan per huruf jika user di bawah
          if (isUserAtBottomRef.current) scrollToBottom(false);

          index++;
        }, 25);
      }, 100); // delay titik-titik 100ms

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { text: 'Koneksi gagal', user: false }]);
      setIsTyping(false);
    }
  };

  return (
    <>
      <div
        ref={chatContainerRef}
        onScroll={handleScroll}
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
