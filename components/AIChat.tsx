
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: 'Hi! I am the Portafo AI. How can I help you with your portfolio today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await getGeminiResponse([...messages, userMessage]);
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-80 h-[450px] rounded-2xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden mb-4 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#191c1f] text-white p-4 flex justify-between items-center">
            <span className="font-bold uppercase tracking-widest text-xs">Portafo AI</span>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-xs leading-relaxed ${msg.role === 'user' ? 'bg-[#191c1f] text-white' : 'bg-white text-gray-800 shadow-sm border border-gray-100'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-[10px] text-gray-400 italic">Thinking...</div>}
          </div>
          <div className="p-4 border-t bg-white flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about templates..."
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-xs outline-none focus:ring-2 ring-gray-200"
            />
            <button onClick={handleSend} className="bg-[#191c1f] text-white p-2 rounded-full hover:scale-110 transition-transform">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#191c1f] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all active:scale-95"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        </button>
      )}
    </div>
  );
};

export default AIChat;
