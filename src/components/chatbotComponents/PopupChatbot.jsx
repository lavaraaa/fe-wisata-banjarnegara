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
  const isUserAtBottomRef = useRef(true);

  // cek posisi scroll user
  const handleScroll = () => {
    const container = chatContainerRef.current;
    if (!container) return;
    isUserAtBottomRef.current =
      container.scrollHeight - container.scrollTop - container.clientHeight < 20;
  };

  const scrollToBottom = (smooth = false) => {
    const container = chatContainerRef.current;
    if (!container) return;
    if (smooth) {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    } else {
      container.scrollTop = container.scrollHeight;
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');

    // pesan user
    setMessages(prev => [...prev, { text: userMessage, user: true }]);
    setStarted(true);
    setTimeout(() => scrollToBottom(true), 50);

    setIsTyping(true);

    // placeholder loading
    setMessages(prev => [...prev, { text: '', user: false, isLoading: true }]);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_CHATBOT_URL}/chat/query`,
        { query: userMessage }
      );

      // 🔒 PAKSA STRING
      const botResponse = String(res.data?.data?.response || '');

      // 🔥 MATIKAN LOADING SEKALI SAJA (BIAR HURUF PERTAMA GA ILANG)
      setMessages(prev =>
        prev.map((msg, idx) =>
          idx === prev.length - 1
            ? { ...msg, isLoading: false }
            : msg
        )
      );

      let index = 0;

      const typingInterval = setInterval(() => {
        const char = botResponse[index];

        // ⛔ STOP TEPAT SAAT HABIS (ANTI "undefined")
        if (char === undefined) {
          clearInterval(typingInterval);
          setIsTyping(false);
          if (isUserAtBottomRef.current) scrollToBottom(true);
          return;
        }

        setMessages(prev =>
          prev.map((msg, idx) =>
            idx === prev.length - 1
              ? { ...msg, text: (msg.text || '') + char }
              : msg
          )
        );

        if (isUserAtBottomRef.current) scrollToBottom(false);
        index++;
      }, 25);
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
              }}>
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
  style={{ flex: 1, padding: '8px', border: '1px solid #ccc', outline: 'none', borderRadius: 10,}}/>
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
      }}>
          <i className="bi bi-send-fill"></i>
        </button>
      </div>
    </>
  );
};

const TypingDots = () => (
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

export default PopupChatbot;
