import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, Calendar, CheckSquare, Sparkles, Copy, Check, MessageSquare, AlertCircle } from 'lucide-react';
import { editorialGuides, EditorialGuide } from '../data/guidesData';
import FooterSection from '../components/FooterSection';

export default function GuideDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [guide, setGuide] = useState<EditorialGuide | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [reflections, setReflections] = useState<{ [key: string]: string }>({});
  const [savedStatus, setSavedStatus] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      const found = editorialGuides.find(g => g.id === id);
      if (found) {
        setGuide(found);
        // Load reflections from localStorage
        const saved = localStorage.getItem(`reflection-${id}`);
        if (saved) {
          try {
            setReflections(JSON.parse(saved));
          } catch (e) {
            console.error('Error parsing reflections data:', e);
          }
        }
      } else {
        // If not found, redirect to home
        navigate('/');
      }
    }
  }, [id, navigate]);

  // Handle reflection input changes
  const handleReflectionChange = (idx: number, val: string) => {
    const updated = { ...reflections, [idx]: val };
    setReflections(updated);
    localStorage.setItem(`reflection-${guide?.id}`, JSON.stringify(updated));
    setSavedStatus(true);
    const timer = setTimeout(() => setSavedStatus(false), 2000);
    return () => clearTimeout(timer);
  };

  // Copy a takeaway
  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (!guide) {
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black min-h-screen text-white/80 font-body relative overflow-hidden"
    >
      {/* Decorative ambient spots */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[50%] right-[5%] w-[500px] h-[500px] bg-neutral-900/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 relative z-10">
        
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-10 font-mono text-xs uppercase tracking-widest group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Episodes
        </Link>

        {/* Header Block */}
        <div className="mb-12 border-b border-white/5 pb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-white/5 rounded-full px-3 py-1 border border-white/10 text-white/60 font-mono text-[9px] tracking-widest uppercase flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Editorial Case Study
            </span>
            <span className="text-white/30 text-xs flex items-center gap-1.5 font-mono">
              <Clock className="w-3.5 h-3.5" /> {guide.duration} Study
            </span>
            <span className="text-white/30 text-xs flex items-center gap-1.5 font-mono">
              <Calendar className="w-3.5 h-3.5" /> Published {guide.publishDate}
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl text-white tracking-tight leading-tight mb-6">
            {guide.title}
          </h1>

          <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-2xl w-fit">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-sm text-white/60">
              {guide.guest.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-mono text-xs text-white/80 leading-none mb-1">{guide.guest}</p>
              <p className="font-mono text-[10px] text-white/40 leading-none">{guide.role}</p>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="liquid-glass rounded-3xl p-8 mb-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-start gap-4">
            <Sparkles className="w-6 h-6 text-red-500 shrink-0 mt-1" />
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-white/60 mb-3">Executive Summary</h3>
              <p className="font-display italic text-lg text-white/90 leading-relaxed">
                "{guide.executiveSummary}"
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-invert max-w-none mb-16">
          <h2 className="font-display text-2xl text-white mb-4">Introduction</h2>
          <p className="text-white/60 text-base leading-relaxed">
            {guide.introduction}
          </p>
        </div>

        {/* Core Analysis Sections */}
        <div className="space-y-12 mb-16">
          <h2 className="font-display text-2xl text-white border-b border-white/5 pb-4 mb-8 flex items-center gap-3">
            <span>01 /</span> Deep-Dive Chapter Breakdown
          </h2>
          {guide.coreAnalysis.map((section, idx) => (
            <div key={idx} className="bg-white/[0.01] border-l-2 border-red-500/20 hover:border-red-500 pl-6 py-2 transition-all duration-300">
              <h3 className="font-display text-lg text-white mb-3 tracking-tight">
                {section.title}
              </h3>
              <p className="text-white/50 text-sm md:text-base leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Actionable Takeaway Checklist */}
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 mb-16">
          <h2 className="font-display text-2xl text-white mb-6 flex items-center gap-3">
            <CheckSquare className="w-6 h-6 text-red-500" /> Actionable Worksheet Guidance
          </h2>
          <p className="text-white/40 text-xs mb-6 font-mono uppercase tracking-wider">
            Copy key implementation tasks below to execute this wisdom immediately:
          </p>
          <div className="space-y-4">
            {guide.actionableTakeaways.map((takeaway, idx) => (
              <div key={idx} className="flex items-start justify-between gap-4 p-4 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 transition-all group">
                <div className="flex gap-3">
                  <span className="font-mono text-xs text-red-500 shrink-0 mt-0.5">[{idx + 1}]</span>
                  <p className="text-white/70 text-sm leading-relaxed">{takeaway}</p>
                </div>
                <button
                  onClick={() => handleCopy(takeaway, idx)}
                  className="p-1 px-2 rounded bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all text-xs flex items-center gap-1 shrink-0"
                  title="Copy to clipboard"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-500" />
                      <span className="text-[10px] text-green-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )
                  }
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Critique & Analytical Assessment */}
        <div className="mb-16 border-t border-b border-white/5 py-12">
          <h2 className="font-display text-2xl text-white mb-6">Editorial Critique & Analytical Assessment</h2>
          <p className="text-white/50 leading-relaxed italic text-sm md:text-base">
            {guide.editorialReview}
          </p>
        </div>

        {/* Interactive Reflection Prompts */}
        <div className="bg-neutral-900/40 rounded-3xl p-8 mb-16 border border-white/5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl text-white flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-red-500" /> Interactive Reflection Prompts
            </h2>
            {savedStatus && (
              <span className="text-[10px] font-mono text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full animate-fade-in">
                Saved locally
              </span>
            )}
          </div>
          <p className="text-white/40 text-xs mb-8">
            Complete the questions below to develop your personal execution blueprints. Your responses are securely preserved in your local system's secure browser database (localStorage).
          </p>

          <div className="space-y-8">
            {guide.reflectionQuestions.map((question, idx) => (
              <div key={idx} className="space-y-3">
                <p className="font-mono text-xs text-white/80 leading-relaxed md:text-sm">
                  <span className="text-red-500 font-bold">Q{idx + 1}:</span> {question}
                </p>
                <textarea
                  value={reflections[idx] || ''}
                  onChange={(e) => handleReflectionChange(idx, e.target.value)}
                  placeholder="Type your reflection, insights or strategy here..."
                  className="w-full min-h-[100px] p-4 bg-black border border-white/10 rounded-2xl text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-red-500/50 transition-all font-body resize-y"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Policy Notice Callout */}
        <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-white/40 mb-16">
          <AlertCircle className="w-5 h-5 shrink-0 text-white/30" />
          <div className="space-y-1">
            <p className="font-mono text-[9px] uppercase tracking-wider text-white/50">Copyright & Quality Statement</p>
            <p className="text-xs leading-relaxed">
              This case study is an original educational analysis and review companion to the Figuring Out podcast. It contains commentary, scientific reviews, critical assessment and actionable workflow strategies created specifically by our editorial board. We do not host copyrighted translations or duplicate thin content.
            </p>
          </div>
        </div>

        {/* Video Embed Option */}
        <div className="bg-black border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-1">Still want to watch?</p>
            <h3 className="font-display text-lg text-white mb-2">Original Broadcast on YouTube</h3>
            <p className="text-white/40 text-xs">Access the video player directly. Direct licensing applies.</p>
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${guide.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 px-6 rounded-full bg-white text-black hover:bg-neutral-200 transition-all text-xs font-semibold shrink-0"
          >
            Watch Full Episode ↗
          </a>
        </div>

      </div>
      <FooterSection />
    </motion.div>
  );
}
