'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, GraduationCap, ShieldCheck, ArrowRight, 
  Phone, MapPin, CheckCircle, Users, Trophy, Zap 
} from 'lucide-react';

// Animation variants pour la fluidité
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

export default function LandingPage() {
  const [formData, setFormData] = useState({ parentName: '', phone: '', childClass: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const myPhone = "22952454379"; // Ton numéro WhatsApp
    const message = `Bonjour EL-SHADDAÏ, je suis ${formData.parentName}. Je souhaite une pré-inscription en ${formData.childClass}.`;
    window.open(`https://wa.me/${myPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-[#0d1b2a] text-white selection:bg-shaddai-pink/30">
      
      {/* AMBIANCE : GLOWING ORBS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-shaddai-pink/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      {/* HEADER : GLASS DESIGN */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0d1b2a]/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-shaddai-pink to-pink-800 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-shaddai-pink/20">
              ES
            </div>
            <span className="text-2xl font-bold tracking-tighter uppercase">EL-SHADDAÏ</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#vision" className="hover:text-shaddai-pink transition-colors">Vision</a>
            <a href="#cursus" className="hover:text-shaddai-pink transition-colors">Cursus</a>
            <a href="#stats" className="hover:text-shaddai-pink transition-colors">Chiffres</a>
          </div>
          <a href="#inscription" className="bg-white/5 border border-white/10 px-5 py-2 rounded-full text-sm hover:bg-shaddai-pink transition-all duration-500">
            Portail Parents
          </a>
        </div>
      </nav>

      {/* HERO SECTION : L'ACCROCHE STRATÉGIQUE */}
      <section className="relative pt-40 pb-20 px-6 z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-shaddai-pink/10 border border-shaddai-pink/20 text-shaddai-pink text-xs font-bold mb-6">
              <Zap size={14} /> LE FUTUR DE L'ÉDUCATION À COTONOU
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              Bâtir l'Elite <br /> par la Rigueur.
            </h1>
            <p className="text-xl text-gray-400 max-w-lg mb-10 leading-relaxed">
              Le Complexe Scolaire EL-SHADDAÏ fusionne discipline traditionnelle et outils numériques de pointe pour révéler le plein potentiel de chaque enfant.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-shaddai-pink rounded-xl font-bold hover:shadow-[0_0_30px_rgba(216,27,96,0.4)] transition-all flex items-center gap-2">
                Réserver une place <ArrowRight size={20} />
              </button>
              <div className="flex -space-x-3 items-center">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0d1b2a] bg-gray-800" />
                ))}
                <span className="pl-6 text-sm text-gray-400 font-medium">+200 parents nous font confiance</span>
              </div>
            </div>
          </motion.div>

          {/* ELEMENT VISUEL : GLASS CARD DYNAMIQUE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-shaddai-pink/20 blur-[100px] rounded-full" />
            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[40px] shadow-2xl">
              <div className="flex justify-between items-start mb-12">
                <div className="space-y-1">
                  <p className="text-shaddai-pink font-bold">ERP EL-SHADDAÏ</p>
                  <p className="text-xs text-gray-400 text-uppercase">Tracking Scolaire en Temps Réel</p>
                </div>
                <div className="p-2 bg-white/10 rounded-lg"><Trophy className="text-yellow-500" /></div>
              </div>
              <div className="space-y-6">
                {[
                  { label: "Taux de réussite BAC", val: "98%" },
                  { label: "Moyenne Générale École", val: "15.4" },
                  { label: "Assiduité Élèves", val: "99.2%" }
                ].map((s, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm"><span className="text-gray-400">{s.label}</span><span>{s.val}</span></div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: s.val }} transition={{ delay: 1, duration: 1.5 }} className="h-full bg-shaddai-pink" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION : POUR TON PROFIL DE STATISTICIEN */}
      <section id="stats" className="py-20 border-y border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { n: "15+", t: "Ans d'Excellence", i: <ShieldCheck /> },
            { n: "100%", t: "Digitalisé (ERP)", i: <Zap /> },
            { n: "25", t: "Élèves par classe", i: <Users /> },
            { n: "1ère", t: "Place Concours", i: <Trophy /> }
          ].map((stat, idx) => (
            <div key={idx} className="text-center space-y-2">
              <div className="flex justify-center text-shaddai-pink mb-2 opacity-50">{stat.i}</div>
              <div className="text-4xl font-bold text-white">{stat.n}</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BENTO GRID DES ATOUTS */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Pourquoi EL-SHADDAÏ ?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-10 rounded-[30px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 group hover:border-shaddai-pink/40 transition-all">
             <GraduationCap className="text-shaddai-pink mb-6" size={40} />
             <h3 className="text-2xl font-bold mb-4">Pédagogie de l'Action</h3>
             <p className="text-gray-400 leading-relaxed">Nous ne nous contentons pas d'enseigner. Nous formons des penseurs critiques. Nos programmes intègrent les dernières innovations éducatives pour préparer vos enfants aux défis de demain.</p>
          </div>
          <div className="p-10 rounded-[30px] bg-white/5 border border-white/10 flex flex-col justify-end">
             <MapPin className="text-blue-400 mb-6" size={40} />
             <h3 className="text-2xl font-bold mb-4">Cadre Sécurisé</h3>
             <p className="text-gray-400 text-sm italic">Situé au cœur de Cotonou, un environnement calme et propice à l'étude.</p>
          </div>
        </div>
      </section>

      {/* FORMULAIRE : LE POINT CRUCIAL POUR TA SOUTENANCE */}
      <section id="inscription" className="py-32 px-6">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-shaddai-pink/20 rounded-full blur-[80px]" />
          <div className="relative bg-[#0d1b2a] border border-white/10 rounded-[40px] p-8 md:p-16 overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-shaddai-pink to-transparent" />
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Pré-inscription 2026</h2>
              <p className="text-gray-400">Prenez une longueur d'avance. Un conseiller vous rappellera sous 24h.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Nom du Parent</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-shaddai-pink focus:bg-white/10 outline-none transition-all"
                    placeholder="Géniel Gandaho"
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Numéro WhatsApp</label>
                  <input 
                    type="tel" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-shaddai-pink focus:bg-white/10 outline-none transition-all"
                    placeholder="+229 00 00 00 00"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-6 flex flex-col">
                <div className="space-y-2 flex-grow">
                  <label className="text-xs font-bold text-gray-500 uppercase">Classe de l'enfant</label>
                  <select 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-shaddai-pink outline-none transition-all appearance-none"
                    onChange={(e) => setFormData({...formData, childClass: e.target.value})}
                  >
                    <option value="">Sélectionner...</option>
                    <option value="Primaire">Cycle Primaire</option>
                    <option value="Collège">Cycle Collège</option>
                    <option value="Lycée">Cycle Lycée</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-5 bg-gradient-to-r from-shaddai-pink to-pink-700 rounded-2xl font-bold text-lg shadow-xl shadow-shaddai-pink/20 hover:scale-[1.02] transition-transform">
                  Valider ma demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER PREMIUM */}
      <footer className="py-20 border-t border-white/5 text-center px-6">
        <p className="text-gray-500 text-sm mb-4">© 2026 Complexe Scolaire EL-SHADDAÏ. Tous droits réservés.</p>
        <div className="flex justify-center gap-6 text-xs font-bold text-gray-600 uppercase tracking-widest">
           <span>Cotonou</span>
           <span>•</span>
           <span>Excellence</span>
           <span>•</span>
           <span>Discipline</span>
        </div>
      </footer>
    </div>
  );
}