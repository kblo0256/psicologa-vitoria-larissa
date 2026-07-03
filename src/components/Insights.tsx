import React, { useState, useEffect } from "react";
import { Sparkles, Heart, Share2, ArrowRight, BookOpen, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { INSIGHTS } from "../data";
import { Insight } from "../types";

export default function Insights() {
  const categories = ["Todos", "Medo", "Autoconhecimento", "Processo Terapêutico", "Superação", "Ideias sobre a Vida"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [activeInsight, setActiveInsight] = useState<Insight>(INSIGHTS[0]);
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [hasLiked, setHasLiked] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Initialize random/preset likes on mount
  useEffect(() => {
    const initialLikes: Record<string, number> = {};
    const likedState: Record<string, boolean> = {};
    
    INSIGHTS.forEach((ins) => {
      // retrieve from local storage if exists
      const storedLike = localStorage.getItem(`like-${ins.id}`);
      const hasLikedStored = localStorage.getItem(`hasLiked-${ins.id}`) === "true";
      
      // Default baseline likes
      const baseLikes = ins.id === "insight-1" ? 42 : ins.id === "insight-2" ? 31 : ins.id === "insight-3" ? 27 : 19;
      initialLikes[ins.id] = storedLike ? parseInt(storedLike, 10) : baseLikes;
      likedState[ins.id] = hasLikedStored;
    });
    
    setLikes(initialLikes);
    setHasLiked(likedState);
  }, []);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const isLiked = hasLiked[id];
    const currentLikes = likes[id] || 0;
    const newLikes = isLiked ? currentLikes - 1 : currentLikes + 1;
    const newLikedState = !isLiked;

    setLikes((prev) => ({ ...prev, [id]: newLikes }));
    setHasLiked((prev) => ({ ...prev, [id]: newLikedState }));

    localStorage.setItem(`like-${id}`, String(newLikes));
    localStorage.setItem(`hasLiked-${id}`, String(newLikedState));
  };

  const handleShare = (insight: Insight, e: React.MouseEvent) => {
    e.stopPropagation();
    const shareText = `"${insight.title}" - Vitória Larissa (Psicóloga). O extraordinário vem depois do medo. Acesse: ${window.location.origin}`;
    
    navigator.clipboard.writeText(shareText).then(() => {
      setCopiedId(insight.id);
      setTimeout(() => setCopiedId(null), 2500);
    });
  };

  const filteredInsights = selectedCategory === "Todos"
    ? INSIGHTS
    : INSIGHTS.filter(ins => ins.category === selectedCategory);

  // Update active insight if the current one gets filtered out
  useEffect(() => {
    if (filteredInsights.length > 0 && !filteredInsights.includes(activeInsight)) {
      setActiveInsight(filteredInsights[0]);
    }
  }, [selectedCategory, filteredInsights, activeInsight]);

  return (
    <section id="ideias" className="py-20 bg-brand-warm-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-brand-terracotta" />
              <span className="font-sans text-xs tracking-widest text-brand-terracotta uppercase font-semibold">
                Ideias sobre a Vida
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-sage-800 tracking-tight leading-tight mt-3">
              Reflexões clínicas e <span className="italic font-normal">perspectivas</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-brand-sage-700/90 font-light mt-3">
              Escritos criados para aproximar a psicologia do cotidiano, trazendo insights acolhedores sobre medos, processos, expectativas e autoaceitação.
            </p>
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap gap-2 mb-8 justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`font-sans text-xs font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-brand-sage-800 text-brand-beige"
                  : "bg-brand-beige hover:bg-brand-sage-50 text-brand-sage-800 border border-brand-sage-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Interactive Layout: List on left, active reading card on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Insight selector cards (4 columns) */}
          <div className="lg:col-span-5 space-y-4 max-h-[550px] overflow-y-auto pr-2 scrollbar-thin">
            <div className="space-y-3.5">
              {filteredInsights.map((insight) => {
                const isActive = activeInsight.id === insight.id;
                return (
                  <div
                    key={insight.id}
                    onClick={() => setActiveInsight(insight)}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                      isActive
                        ? "bg-white border-brand-sage-600 shadow-md ring-1 ring-brand-sage-200"
                        : "bg-brand-beige/55 hover:bg-white border-brand-sage-100 shadow-sm"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-sans text-[10px] uppercase font-bold text-brand-terracotta tracking-wider">
                        {insight.category}
                      </span>
                      <span className="font-sans text-[10px] text-brand-sage-600/80">
                        {insight.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-semibold text-brand-sage-800 group-hover:text-brand-terracotta transition-colors line-clamp-2">
                      {insight.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-sage-700/80 font-light mt-1.5 line-clamp-2">
                      {insight.text}
                    </p>
                    
                    {/* Tiny footer with icon and interaction stats */}
                    <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-brand-sage-50/50">
                      <span className="font-sans text-[10px] text-brand-sage-600/80 flex items-center gap-1">
                        <BookOpen className="w-3 h-3" /> Ler texto completo
                      </span>
                      
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-[10px] text-brand-sage-600/80 flex items-center gap-1">
                          <Heart className={`w-3 h-3 ${hasLiked[insight.id] ? "fill-brand-terracotta text-brand-terracotta" : ""}`} />
                          {likes[insight.id] || 0}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {filteredInsights.length === 0 && (
                <div className="p-8 text-center bg-brand-beige/40 rounded-2xl border border-dashed border-brand-sage-200">
                  <p className="font-sans text-sm text-brand-sage-700">Nenhuma reflexão encontrada nesta categoria.</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Active Reader Display (7 columns) */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInsight.id}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col justify-between bg-white p-6 sm:p-8 rounded-3xl border border-brand-sage-200/80 shadow-md flex-grow text-left relative overflow-hidden h-full"
              >
                {/* Visual geometric accent background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-sage-100/30 rounded-full blur-2xl -z-10" />
                
                <div>
                  {/* Category and Read Time */}
                  <div className="flex items-center justify-between border-b border-brand-sage-50 pb-4 mb-6">
                    <span className="font-sans text-xs bg-brand-warm-gray-100 text-brand-terracotta uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                      📍 {activeInsight.category}
                    </span>
                    <span className="font-sans text-xs text-brand-sage-600 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      {activeInsight.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-brand-sage-800 leading-tight mb-5">
                    {activeInsight.title}
                  </h3>

                  {/* Primary text content */}
                  <p className="font-sans text-base text-brand-sage-800/90 leading-relaxed font-light mb-8 whitespace-pre-wrap">
                    {activeInsight.text}
                  </p>

                  {/* Highlighting quote block if present */}
                  {activeInsight.quote && (
                    <blockquote className="border-l-2 border-brand-terracotta bg-brand-beige/60 p-5 rounded-r-2xl font-serif text-base italic text-brand-sage-800 leading-relaxed mb-6">
                      “ {activeInsight.quote} ”
                    </blockquote>
                  )}
                </div>

                {/* Reader Footer Buttons */}
                <div className="flex items-center justify-between border-t border-brand-sage-50 pt-6 mt-4">
                  {/* Author Signature */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-sage-100 flex items-center justify-center font-serif text-xs font-semibold text-brand-sage-800">
                      VL
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold text-brand-sage-800">Vitória Larissa</p>
                      <p className="font-sans text-[10px] text-brand-sage-600/80">CRP: 06/200154</p>
                    </div>
                  </div>

                  {/* Interaction buttons */}
                  <div className="flex items-center gap-3">
                    {/* Like button */}
                    <button
                      onClick={(e) => handleLike(activeInsight.id, e)}
                      className={`inline-flex items-center gap-1.5 text-xs font-sans font-medium px-3.5 py-2 rounded-full border transition-all cursor-pointer ${
                        hasLiked[activeInsight.id]
                          ? "bg-brand-terracotta/10 text-brand-terracotta border-brand-terracotta/30"
                          : "bg-white text-brand-sage-700 hover:bg-brand-sage-50 border-brand-sage-100"
                      }`}
                      title={hasLiked[activeInsight.id] ? "Desmarcar inspirador" : "Marcar como inspirador"}
                    >
                      <Heart className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        hasLiked[activeInsight.id] 
                          ? "fill-brand-terracotta text-brand-terracotta scale-110 animate-bounce" 
                          : "text-brand-sage-600"
                      }`} />
                      <span>{likes[activeInsight.id] || 0}</span>
                    </button>

                    {/* Share Button */}
                    <button
                      onClick={(e) => handleShare(activeInsight, e)}
                      className="inline-flex items-center justify-center p-2 rounded-full border border-brand-sage-100 hover:bg-brand-sage-50 text-brand-sage-700 transition-all cursor-pointer relative"
                      title="Copiar texto para compartilhar"
                    >
                      <AnimatePresence>
                        {copiedId === activeInsight.id ? (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-sage-800 text-white font-sans text-[10px] px-2 py-1 rounded shadow-md whitespace-nowrap"
                          >
                            Texto Copiado!
                          </motion.span>
                        ) : null}
                      </AnimatePresence>
                      {copiedId === activeInsight.id ? <Check className="w-4 h-4 text-brand-sage-600" /> : <Share2 className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
