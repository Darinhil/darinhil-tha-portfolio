import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  RefreshCw, 
  Code2, 
  Briefcase,
  Layers
} from 'lucide-react';

interface AiAssistantModalProps {
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

const getLocalProfileAnswer = (question: string): string | null => {
  const lowerQuestion = question.toLowerCase();

  if (lowerQuestion.includes('project')) {
    return "Tha Darinhil's projects include the Student Leave Management System, Student Management System, Product API CRUD, Best Anime Shop, Expense Tracker, and Fitness App. These projects demonstrate CRUD features, REST APIs, database integration, responsive web design, and UI/UX work.";
  }

  if (lowerQuestion.includes('study') || lowerQuestion.includes('pnc') || lowerQuestion.includes('education')) {
    return "Tha Darinhil is studying Web Programming at Passerelles Numériques Cambodia in Phnom Penh, from 2025 to the present. The program includes frontend development, backend development, databases, APIs, UI/UX, Git, Linux, and team projects.";
  }

  if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology') || lowerQuestion.includes('tech stack')) {
    return "Tha Darinhil's skills include HTML, CSS, JavaScript, Vue.js, Tailwind CSS, PHP, Laravel, Node.js, Express, REST APIs, MySQL, PostgreSQL, Figma, Git, GitHub, and Linux.";
  }

  if (lowerQuestion.includes('contact') || lowerQuestion.includes('email') || lowerQuestion.includes('reach')) {
    return "You can contact Tha Darinhil at darinhil.tha@student.passerellesnumeriques.org or through the Contact section of this portfolio.";
  }

  return null;
};

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hello! I am Tha Darinhil's AI Twin. Ask me about Tha Darinhil's web programming studies, projects, skills, or UI/UX work!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "What are Tha Darinhil's featured projects?",
    "What is Tha Darinhil studying at PNC?",
    "What web development skills does Tha Darinhil have?",
    "How can I contact Tha Darinhil?"
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.slice(-6).map(({ sender, text }) => ({ sender, text }))
        })
      });

      const data = await res.json();
      const profileFallback = "Tha Darinhil is currently studying Web Programming at Passerelles Numériques Cambodia, with skills in frontend development, backend development, UI/UX design, REST APIs, databases, Git/GitHub, and Linux.";
      const localAnswer = getLocalProfileAnswer(query);
      const hasIncorrectProfile = typeof data.reply === 'string' && /full-stack developer|distributed microservices|rust, go|nexus analytics|cognitive core|velocity cli|45,000/i.test(data.reply);
      const replyText = localAnswer || !data.reply || hasIncorrectProfile ? localAnswer || profileFallback : data.reply;

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: "Tha Darinhil is a Web Programming student at Passerelles Numériques Cambodia, building responsive web applications, REST APIs, database projects, and UI/UX designs. Explore the Projects and Experience sections for more details!",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in" role="presentation">
      <div className="bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-500/30 rounded-3xl max-w-2xl w-full h-[min(600px,calc(100dvh-2rem))] flex flex-col overflow-hidden shadow-2xl relative" role="dialog" aria-modal="true" aria-labelledby="ai-modal-title">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-100 via-indigo-50 to-slate-100 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 border-b border-indigo-100 dark:border-indigo-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 id="ai-modal-title" className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Ask Darinhil's AI Twin
                <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-[10px] font-mono border border-indigo-500/30">
                  Gemini 2.5
                </span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">Interactive portfolio & background assistant</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMessages([{
                id: '1',
                sender: 'ai',
                text: "Chat reset! What else would you like to know about Darinhil's portfolio?",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              }])}
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title="Reset Chat"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Feed */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-950/60">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-300 shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[80%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed space-y-1 ${
                  m.sender === 'user'
                    ? 'bg-cyan-500 text-slate-950 font-medium rounded-tr-none shadow-md shadow-cyan-500/10'
                    : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-tl-none shadow-xs dark:shadow-none'
                }`}
              >
                <div className="whitespace-pre-wrap">{m.text}</div>
                <div className={`text-[10px] text-right ${m.sender === 'user' ? 'text-slate-900/70 font-mono' : 'text-slate-400 dark:text-slate-500 font-mono'}`}>
                  {m.time}
                </div>
              </div>

              {m.sender === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-300 shrink-0">
                <Sparkles className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 p-3 rounded-2xl text-xs font-mono border border-slate-200 dark:border-slate-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-ping" />
                <span>Darinhil AI Twin is generating response...</span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Suggestion Chips */}
        <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto text-xs">
          {suggestions.map((s, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(s)}
              className="px-3 py-1 rounded-full bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-indigo-500/50 border border-slate-200 dark:border-slate-800 whitespace-nowrap shrink-0 transition-colors shadow-2xs dark:shadow-none"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Darinhil AI twin a question..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500/60"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all disabled:opacity-40 shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
