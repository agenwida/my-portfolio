
// import React, { useState, useRef, useEffect } from 'react';
// import { getChatResponse } from '../services/geminiService';
// import { ChatMessage } from '../types';

// interface AIAssistantProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
//   const [messages, setMessages] = useState<ChatMessage[]>([
//     { role: 'assistant', content: "Hello! I'm Alex's AI assistant. Ask me anything about his experience, skills, or professional journey." }
//   ]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const handleSend = async (e?: React.FormEvent) => {
//     e?.preventDefault();
//     if (!input.trim() || isLoading) return;

//     const userMessage = input.trim();
//     setInput('');
//     setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
//     setIsLoading(true);

//     const history = messages.map(m => ({
//       role: m.role === 'user' ? 'user' as const : 'model' as const,
//       parts: [{ text: m.content }]
//     }));

//     const response = await getChatResponse(userMessage, history);
//     setMessages(prev => [...prev, { role: 'assistant', content: response }]);
//     setIsLoading(false);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
//       <div className="w-full max-w-md bg-card-dark border border-card-border rounded-2xl shadow-2xl flex flex-col h-[600px] overflow-hidden">
//         {/* Header */}
//         <div className="p-4 border-b border-card-border flex items-center justify-between bg-background-dark/50">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
//               <span className="material-symbols-outlined">smart_toy</span>
//             </div>
//             <div>
//               <h3 className="font-bold text-white">Alex AI Assistant</h3>
//               <p className="text-xs text-primary">Online • Ready to help</p>
//             </div>
//           </div>
//           <button onClick={onClose} className="p-2 text-gray-400 hover:text-white transition-colors">
//             <span className="material-symbols-outlined">close</span>
//           </button>
//         </div>

//         {/* Chat Body */}
//         <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
//           {messages.map((msg, i) => (
//             <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//               <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
//                 msg.role === 'user' 
//                   ? 'bg-primary text-black rounded-tr-none' 
//                   : 'bg-gray-800 text-text-silver rounded-tl-none border border-card-border'
//               }`}>
//                 {msg.content}
//               </div>
//             </div>
//           ))}
//           {isLoading && (
//             <div className="flex justify-start">
//               <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none border border-card-border">
//                 <div className="flex gap-1">
//                   <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce"></div>
//                   <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce delay-75"></div>
//                   <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce delay-150"></div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Footer */}
//         <form onSubmit={handleSend} className="p-4 border-t border-card-border bg-background-dark/50 flex gap-2">
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Ask about Alex's skills..."
//             className="flex-1 bg-gray-800 border border-card-border rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-primary transition-colors"
//           />
//           <button 
//             type="submit"
//             disabled={isLoading || !input.trim()}
//             className="w-10 h-10 bg-primary text-black rounded-lg flex items-center justify-center disabled:opacity-50 hover:bg-cyan-300 transition-colors"
//           >
//             <span className="material-symbols-outlined">send</span>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
