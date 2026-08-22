import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  Heart, 
  ArrowRight, 
  Sparkles, 
  Mail, 
  Check, 
  Share2,
  Tag
} from 'lucide-react';

interface BlogSectionProps {
  onSelectArticle: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [postLikes, setPostLikes] = useState<Record<string, number>>({
    'post-1': 142,
    'post-2': 219,
    'post-3': 184,
    'post-4': 96
  });

  const categories = ['All', 'Architecture', 'AI', 'Rust', 'React', 'DevOps'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  const featuredPost = BLOG_POSTS[0];

  const handleLike = (e: React.MouseEvent, postId: string) => {
    e.stopPropagation();
    setPostLikes(prev => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1
    }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="space-y-12 py-8 sm:py-12 overflow-x-hidden">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-3 max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Technical Articles</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Technical Insights & Essays
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          In-depth articles covering distributed systems, WebAssembly performance, AI RAG agents, and modern frontend architecture.
        </p>
      </motion.div>

      {/* FEATURED POST BANNER */}
      {selectedCategory === 'All' && !searchQuery && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onClick={() => onSelectArticle(featuredPost)}
          className="cursor-pointer rounded-3xl bg-slate-900 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900/90 dark:to-indigo-950/40 border border-slate-800 p-8 sm:p-10 transition-all hover:shadow-2xl hover:shadow-indigo-950/20 group relative overflow-hidden text-white"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-400">
                  Featured Article
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {featuredPost.date} • {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                {featuredPost.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {featuredPost.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-950 text-xs font-mono text-slate-300 border border-slate-800">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 shrink-0">
              <span>Read Full Essay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Control Bar: Filters & Search */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800"
      >
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const count = cat === 'All' ? BLOG_POSTS.length : BLOG_POSTS.filter(p => p.category === cat).length;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>{cat}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  isActive ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-900 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles & topics..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 transition-colors"
          />
        </div>

      </motion.div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (index % 2) * 0.1 }}
            onClick={() => onSelectArticle(post)}
            className="cursor-pointer rounded-2xl bg-slate-900 border border-slate-800/90 hover:border-slate-700 transition-all p-6 space-y-4 hover:-translate-y-1 group flex flex-col justify-between shadow-lg shadow-black/20"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-950 text-cyan-400 border border-slate-800 font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {post.tags.map((t) => (
                  <span key={t} className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-6 h-6 rounded-full object-cover border border-slate-700"
                />
                <span className="font-medium text-slate-300">{post.author.name}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>

              <button
                onClick={(e) => handleLike(e, post.id)}
                className="flex items-center gap-1.5 text-rose-400 hover:text-rose-300 transition-colors bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/20"
              >
                <Heart className="w-3.5 h-3.5 fill-rose-500/30 text-rose-400" />
                <span className="font-mono font-bold">{postLikes[post.id] || post.likes}</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Newsletter Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
      >
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
            <Mail className="w-4 h-4" />
            <span>Developer Newsletter</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Stay updated on engineering essays</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Get quarterly updates on Rust microservices, Gemini AI integrations, and developer tooling directly in your inbox. No spam ever.
          </p>
        </div>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto min-w-[320px]">
          <input
            type="email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            placeholder="Enter your email address..."
            required
            className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 grow"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all whitespace-nowrap shrink-0 flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20"
          >
            {subscribed ? (
              <>
                <Check className="w-4 h-4 text-slate-950" />
                <span>Subscribed!</span>
              </>
            ) : (
              <span>Subscribe</span>
            )}
          </button>
        </form>
      </motion.div>

    </div>
  );
};
