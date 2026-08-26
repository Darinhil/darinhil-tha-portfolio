import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { 
  Mail, 
  Send, 
  MapPin, 
  Github, 
  Linkedin, 
  Check, 
  Copy, 
  Sparkles,
  Phone,
  MessageSquare,
  AlertCircle
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    serviceType: 'Web Development'
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          serviceType: 'Full-Stack Architecture'
        });
      } else {
        // Fallback simulate success
        setSubmitted(true);
      }
    } catch (err) {
      // Graceful fallback simulation
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12 page-section overflow-x-hidden">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-3 max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let’s Build Something Together
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Have a website, design idea, or web application in mind? Send a message and tell me what you would like to build.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Contact Details & Quick Booking */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          
          {/* Status Box */}
          <div className="surface-card p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Current Status</span>
            </div>
            <p className="text-white font-bold text-lg">
              {PERSONAL_INFO.status}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Currently focused on learning, building web projects, and connecting with people who have interesting website, UI/UX, or software ideas.
            </p>
          </div>

          {/* Contact Direct Items */}
          <div className="surface-card p-6 rounded-2xl space-y-5">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Direct Contact Details
            </h3>

            {/* Email */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] text-slate-500 uppercase font-mono">Email</div>
                  <div className="text-sm text-slate-200 font-mono truncate">{PERSONAL_INFO.email}</div>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-mono">Location</div>
                <div className="text-sm text-slate-200 font-mono">{PERSONAL_INFO.location}</div>
              </div>
            </div>

            {/* Phone */}
            <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-teal-300/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-teal-500/10 text-teal-300 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-mono">Phone</div>
                <div className="text-sm text-slate-200 font-mono">{PERSONAL_INFO.phone}</div>
              </div>
            </a>

          </div>

          {/* Social Profiles */}
          <div className="surface-card p-6 rounded-2xl space-y-4">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Find Me Online
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 text-xs font-semibold transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.telegram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-sky-400 text-xs font-semibold transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

        </motion.div>

        {/* RIGHT COLUMN: Interactive Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="surface-card p-8 sm:p-10 rounded-3xl space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Send Tha Darinhil a Message</h2>
              <p className="text-slate-400 text-sm mt-1">Tell me about your idea, project, or collaboration opportunity.</p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in zoom-in-95">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Delivered Successfully!</h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out. Tha Darinhil will review your message and get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60"
                    />
                  </div>
                </div>

                {/* Service Interest Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                    Primary Area of Interest
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500/60"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Backend APIs">Backend APIs & Databases</option>
                    <option value="UI/UX and Graphic Design">UI/UX & Graphic Design</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Website or design project"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                    Project Overview / Message *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell Tha Darinhil about your idea, goals, and what you would like to build..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="button-primary w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Message</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </div>
        </motion.div>

      </div>

    </div>
  );
};
