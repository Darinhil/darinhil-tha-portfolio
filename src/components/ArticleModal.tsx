import React, { useState } from 'react';
import { BlogPost } from '../types';
import { 
  X, 
  Clock, 
  Calendar, 
  Heart, 
  Share2, 
  Bookmark, 
  Check, 
  BookOpen, 
  ArrowLeft 
} from 'lucide-react';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose }) => {
  const [likes, setLikes] = useState(post ? post.likes : 0);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!post) return null;

  const handleLike = () => {
    if (!liked) {
      setLikes(prev => prev + 1);
      setLiked(true);
    } else {
      setLikes(prev => prev - 1);
      setLiked(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
      <div className="surface-card bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full my-8 overflow-hidden shadow-2xl relative">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-slate-900/90 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Articles</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all ${
                liked
                  ? 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>{likes}</span>
            </button>

            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-1.5 rounded-lg border transition-all ${
                bookmarked
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
              }`}
              title={bookmarked ? 'Remove Bookmark' : 'Bookmark Article'}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-amber-400' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Article Body */}
        <div className="p-6 sm:p-12 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Header Metadata */}
          <div className="space-y-4 border-b border-slate-800 pb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold">
                {post.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              {post.title}
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed font-light">
              {post.subtitle}
            </p>

            {/* Author card */}
            <div className="flex items-center gap-3 pt-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-700"
              />
              <div>
                <div className="text-sm font-bold text-white">{post.author.name}</div>
                <div className="text-xs text-slate-400 font-mono">{post.author.role}</div>
              </div>
            </div>
          </div>

          {/* Article Markdown Content Body */}
          <div className="max-w-none space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            {post.contentMarkdown.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={idx} className="text-2xl font-bold text-white pt-4">{paragraph.replace('# ', '')}</h1>;
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={idx} className="text-xl font-bold text-cyan-400 pt-3">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('```')) {
                const codeLines = paragraph.replace(/```[a-z]*/g, '').trim();
                return (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto my-4">
                    <pre>{codeLines}</pre>
                  </div>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={idx} className="list-disc list-inside space-y-1 text-slate-300">
                    {paragraph.split('\n').map((line, i) => (
                      <li key={i}>{line.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>

          {/* Bottom Tags & Engagement */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg bg-slate-950 text-xs font-mono text-slate-400 border border-slate-800">
                  #{t}
                </span>
              ))}
            </div>

            <button
              onClick={handleLike}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 font-mono text-xs font-bold transition-all"
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>Applaud Essay ({likes})</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
