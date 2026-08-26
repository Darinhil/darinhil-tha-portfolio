import React, { useEffect, useState } from 'react';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  Check, 
  Video, 
  Sparkles,
  User,
  Mail,
  CheckCircle2
} from 'lucide-react';

interface ScheduleCallModalProps {
  onClose: () => void;
}

export const ScheduleCallModal: React.FC<ScheduleCallModalProps> = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState('Tomorrow (10:00 AM PST)');
  const [selectedTopic, setSelectedTopic] = useState('Full-Stack & Cloud Architecture');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [booked, setBooked] = useState(false);

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

  const dates = [
    'Tomorrow (10:00 AM PST)',
    'Tomorrow (2:30 PM PST)',
    'Thursday, Oct 12 (11:00 AM PST)',
    'Friday, Oct 13 (1:00 PM PST)',
    'Monday, Oct 16 (9:30 AM PST)'
  ];

  const topics = [
    'Full-Stack & Cloud Architecture',
    'Gemini AI & RAG Pipeline Advisory',
    'Distributed Systems / Rust & Go',
    'Senior Technical Hiring Inquiry'
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setBooked(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in" role="presentation">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full max-h-[calc(100dvh-2rem)] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative" role="dialog" aria-modal="true" aria-labelledby="schedule-modal-title">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 id="schedule-modal-title" className="text-xl font-bold text-slate-900 dark:text-white">Book a 30-Min Call</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">1-on-1 Discovery with Tha Darinhil</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {booked ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in zoom-in-95">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 dark:text-emerald-400 mx-auto" />
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Call Scheduled!</h4>
            <div className="text-xs font-mono text-slate-700 dark:text-slate-300 space-y-1 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-left">
              <div><strong className="text-slate-500 dark:text-slate-400">Host:</strong> Tha Darinhil</div>
              <div><strong className="text-slate-500 dark:text-slate-400">Attendee:</strong> {name} ({email})</div>
              <div><strong className="text-slate-500 dark:text-slate-400">Slot:</strong> {selectedDate}</div>
              <div><strong className="text-slate-500 dark:text-slate-400">Topic:</strong> {selectedTopic}</div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              A calendar invite with Google Meet video link has been sent to your email address.
            </p>
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleBook} className="space-y-4 text-xs">
            
            {/* Slot selector */}
            <div className="space-y-1.5">
              <label className="font-mono text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Select Available Slot
              </label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:border-cyan-500/60"
              >
                {dates.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Topic selector */}
            <div className="space-y-1.5">
              <label className="font-mono text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Discussion Topic
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:border-cyan-500/60"
              >
                {topics.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div className="space-y-1.5">
              <label className="font-mono text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Your Name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Morgan"
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:border-cyan-500/60"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="font-mono text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Your Work Email *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. alex@company.com"
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:border-cyan-500/60"
              />
            </div>

            {/* Notes */}
            <div className="space-y-1.5">
              <label className="font-mono text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Brief Context / Objectives (Optional)
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Share any background details or links..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:border-cyan-500/60"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
            >
              Confirm & Request Calendar Invite
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
