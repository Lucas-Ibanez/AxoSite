import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Routes, Route, Link } from 'react-router-dom';
import Privacidade from './pages/Privacidade';
import Termos from './pages/Termos';
import { 
  Settings, Monitor, TrendingUp, Building2, 
  HeartPulse, ArrowRight, Instagram, Linkedin, 
  Phone, Mail, CheckCircle2, Rocket, MessageCircle,
  Loader2, X
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const mainRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Estados do Formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    nicho: '',
    mensagem: ''
  });
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closePopup = () => {
    setFormStatus({ loading: false, success: false, error: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false });
    
    try {
      // URL real do Google Apps Script fornecida pelo usuário
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx5phodEx4n9TDA7bbcZHn4dV6hKTcYZiwaFaLkiYJicgwQ8prhZf7ITzd7HBZogCTQ/exec'; 

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setFormStatus({ loading: false, success: true, error: false });
      setFormData({ nome: '', email: '', whatsapp: '', nicho: '', mensagem: '' });
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setFormStatus({ loading: false, success: false, error: true });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.hero-text-part', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );

      // Fade up sections
      gsap.utils.toArray('.fade-up-section').forEach(section => {
        gsap.from(section, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Bar Chart Growth
      gsap.utils.toArray('.bar-grow').forEach(bar => {
        gsap.from(bar, {
          height: '0%',
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 85%",
          }
        });
      });

      // Staggered cards
      gsap.utils.toArray('.stagger-cards').forEach((container) => {
        const cards = container.querySelectorAll('.card-item');
        gsap.fromTo(cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
            }
          }
        );
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servico' },
    { name: 'Sucesso', href: '#sucesso' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <div ref={mainRef} className="relative w-full">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-transparent py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1000px] mx-auto px-6 md:px-0 flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="text-axo-white font-sparo font-bold text-5xl tracking-tighter flex items-baseline w-[200px]">
            axo<span className="text-axo-orange">.</span>
          </a>
          
          {/* Desktop Nav (Center Pill) */}
          <div className="hidden md:flex items-center gap-8 bg-black/40 backdrop-blur-xl border border-white/5 rounded-full px-8 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-axo-muted hover:text-axo-white text-[14px] font-medium transition-colors duration-200">
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Right */}
          <div className="hidden md:flex justify-end w-[200px]">
            <a href="#contato" className="magnetic-btn bg-[#050505] text-white font-medium py-3 px-8 rounded-full border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_15px_25px_-10px_rgba(252,102,37,0.6)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_20px_30px_-10px_rgba(252,102,37,0.8)] hover:border-white/20 transition-all duration-300 text-[15px] flex items-center gap-2">
              Entrar em Contato
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display font-medium text-white hover:text-axo-orange transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#050505] border border-white/10 shadow-[0_4px_24px_rgba(252,102,37,0.2)] text-white font-bold py-3 px-8 rounded-full text-lg mt-4">
            Entrar em Contato
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[100dvh] flex items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-axo-orange/5 rounded-full blur-[120px]"></div>
          {/* Subtle grid to simulate Sparo's rounded squares */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
        </div>

        <div className="max-w-[1000px] w-full mx-auto relative z-10 flex flex-col items-center text-center">
          
          {/* Tag like Sparo */}
          <div className="hero-text-part flex items-center gap-2 mb-8 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <Rocket size={14} className="text-axo-muted" />
            <span className="text-axo-muted text-xs font-medium tracking-wide">Automação Inteligente</span>
          </div>
          
          {/* Headline like Sparo */}
          <h1 className="font-sparo font-medium text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-tight mb-6">
            <span className="hero-text-part block text-axo-white uppercase tracking-normal">O SEU NEGÓCIO</span>
            <span className="hero-text-part block text-axo-orange font-serif italic text-[48px] md:text-[64px] lg:text-[76px] pr-2 -mt-2">no Piloto Automático</span>
          </h1>
          
          <p className="hero-text-part text-axo-muted text-base md:text-lg font-normal max-w-[500px] mx-auto mb-10 leading-relaxed">
            Implementamos as automações inteligentes que seu negócio precisa para crescer de forma escalável.
          </p>
          
          <div className="hero-text-part flex items-center justify-center">
            {/* Dark CTA button similar to Sparo */}
            <a href="#contato" className="sparo-btn text-white text-lg">
              <span className="sparo-btn-inner py-4 px-10">Entrar em Contato</span>
            </a>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servico" className="py-[120px] px-6 relative fade-up-section">
        {/* Decorator line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-axo-orange to-transparent opacity-50"></div>
        
        <div className="max-w-[1000px] mx-auto stagger-cards">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-[40px] md:text-[52px] leading-tight mb-4">
              <span className="block">O que</span>
              <span className="block text-axo-orange italic font-medium">Oferecemos</span>
            </h2>
            <p className="text-axo-muted text-lg max-w-2xl mx-auto">
              Três pilares fundamentais para estruturar, digitalizar e escalar o seu negócio com previsibilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="card-item glass-panel p-8 group hover:border-axo-orange/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(252,102,37,0.1)]">
              <div className="w-14 h-14 bg-axo-orange/10 rounded-lg flex items-center justify-center mb-6">
                <Settings className="text-axo-orange" size={28} />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Automações Inteligentes</h3>
              <p className="text-axo-muted mb-8 leading-relaxed">
                Automatizamos os processos internos da sua empresa — desde atendimento ao cliente até fluxos operacionais — para você ganhar tempo e escalar sem aumentar custos.
              </p>
              <div className="flex flex-wrap gap-2">
                {['CRM', 'WhatsApp', 'IA', 'Workflows'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/5 text-axo-muted text-[11px] uppercase tracking-wider rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2 */}
            <div className="card-item glass-panel p-8 group hover:border-axo-orange/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(252,102,37,0.1)]">
              <div className="w-14 h-14 bg-axo-orange/10 rounded-lg flex items-center justify-center mb-6">
                <Monitor className="text-axo-orange" size={28} />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Sites de Alta Conversão</h3>
              <p className="text-axo-muted mb-8 leading-relaxed">
                Criamos sites institucionais e landing pages estratégicas, otimizadas para SEO e focadas em converter visitantes em clientes reais.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Landing Page', 'SEO', 'UX', 'Institucional'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/5 text-axo-muted text-[11px] uppercase tracking-wider rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3 */}
            <div className="card-item glass-panel p-8 group hover:border-axo-orange/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(252,102,37,0.1)]">
              <div className="w-14 h-14 bg-axo-orange/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-axo-orange" size={28} />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Estratégias de Expansão</h3>
              <p className="text-axo-muted mb-8 leading-relaxed">
                Desenvolvemos campanhas e estratégias digitais completas para posicionar sua marca, produto ou serviço e conquistar novos mercados.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Tráfego Pago', 'Social', 'Branding', 'Growth'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/5 text-axo-muted text-[11px] uppercase tracking-wider rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sucesso Section (Orbital Design) */}
      <section id="sucesso" className="py-[120px] px-6 relative bg-[#050505] overflow-hidden fade-up-section min-h-[700px] flex items-center">
        
        {/* Right Side: Orbital Graphics - Absolute to section, pushed to the right */}
        <div className="absolute top-1/2 right-[-250px] md:right-[-100px] lg:right-[5%] xl:right-[10%] -translate-y-1/2 w-[600px] h-[600px] z-0 hidden md:block pointer-events-none">
          
          {/* Concentric Rings - Centered in this container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5 border-dashed [animation:orbit-slow_60s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 [animation:orbit-reverse_45s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-white/5"></div>
          
          {/* Floating Card 1: Escalabilidade (Top Right) */}
          <div className="absolute top-[8%] right-[-5%] w-[260px] md:w-[280px] bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-20 animate-float backdrop-blur-md pointer-events-auto">
            <h3 className="text-white text-sm font-medium mb-6 text-center">Escalabilidade Previsível</h3>
            <div className="flex items-end justify-between h-[130px] gap-2">
              {[30, 40, 55, 70, 85, 100].map((height, i) => (
                <div key={i} className="w-full bg-white/5 rounded-t-sm relative h-full flex items-end">
                  <div 
                    className={`w-full rounded-t-sm bar-grow ${i >= 4 ? 'bg-[#FC6625]' : 'bg-white/20'}`} 
                    style={{ height: `${height}%` }}>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Card 2: Redução Custos (Middle Left) */}
          <div className="absolute top-[42%] left-[18%] w-[160px] bg-[#0A0A0A] border border-white/10 rounded-2xl p-5 shadow-[0_15px_30px_rgba(0,0,0,0.8)] z-30 animate-float-delayed backdrop-blur-md flex flex-col items-center pointer-events-auto">
            <div className="w-10 h-10 rounded-full border border-white/10 bg-[#111] flex items-center justify-center mb-4 shadow-inner">
              <TrendingUp size={16} className="text-white" />
            </div>
            <span className="text-3xl font-display font-bold text-white mb-1">87%</span>
            <span className="text-axo-muted text-xs text-center">Redução de Custos</span>
          </div>

          {/* Floating Card 3: Aumento Lucratividade (Bottom Right) */}
          <div className="absolute bottom-[10%] right-[10%] w-[230px] bg-[#0A0A0A] border border-white/10 rounded-2xl p-5 shadow-[0_15px_30px_rgba(0,0,0,0.8)] z-20 animate-float backdrop-blur-md pointer-events-auto">
            <span className="text-white text-sm font-medium block mb-2 text-center">Aumento na Lucratividade</span>
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl font-display font-bold text-white">87%</span>
            </div>
            {/* SVG Line Chart like Sparo, using Axo Orange */}
            <div className="w-full h-[50px] relative overflow-hidden rounded-b-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-[#FC6625]/20 to-transparent opacity-50"></div>
              <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,35 L20,25 L40,30 L60,15 L80,25 L100,5" fill="none" stroke="#FC6625" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="0" cy="35" r="2" fill="#FC6625" />
                <circle cx="20" cy="25" r="2" fill="#FC6625" />
                <circle cx="40" cy="30" r="2" fill="#FC6625" />
                <circle cx="60" cy="15" r="2" fill="#FC6625" />
                <circle cx="80" cy="25" r="2" fill="#FC6625" />
                <circle cx="100" cy="5" r="2" fill="#FC6625" />
              </svg>
            </div>
          </div>

          {/* Decorative Nodes on Orbits */}
          <div className="absolute top-[20%] left-[20%] w-10 h-10 rounded-full border border-white/10 bg-[#0A0A0A] flex items-center justify-center z-10 animate-float-delayed shadow-inner">
            <Building2 size={14} className="text-white/50" />
          </div>
          
        </div>

        <div className="max-w-[1000px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Left Side: Text */}
          <div className="max-w-[480px]">
            <div className="inline-flex items-center gap-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              <span className="text-axo-muted text-xs font-medium tracking-wide">Porque Escolher a Axo</span>
            </div>
            
            <h2 className="font-sparo font-medium text-[42px] md:text-[56px] leading-[1.1] tracking-tight mb-6">
              <span className="block text-axo-white">O seu Sucesso</span>
              <span className="block text-axo-orange font-serif italic pr-2 -mt-1 text-[52px] md:text-[68px]">é a Nossa Métrica</span>
            </h2>
            
            <p className="text-axo-muted text-lg font-normal mb-10 leading-relaxed max-w-[450px]">
              Na Axo, não vendemos apenas automação; criamos parcerias que geram crescimento real. Nosso compromisso é com o impacto tangível: otimizar seus processos, reduzir custos e impulsionar a lucratividade. Seu sucesso é o único indicador que realmente importa para nós.
            </p>
            
            <a href="#contato" className="magnetic-btn inline-block bg-transparent text-white font-medium py-3 px-8 rounded-full border border-white/20 hover:border-white transition-colors duration-300">
              Saber Mais
            </a>
          </div>
          
          {/* Empty div for grid layout spacing on mobile/tablet */}
          <div className="hidden lg:block"></div>

        </div>
      </section>

      {/* Resultados Section */}
      <section id="resultados" className="py-[80px] px-6 relative fade-up-section">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-axo-orange to-transparent opacity-50"></div>
        
        <div className="max-w-[1000px] mx-auto stagger-cards">
          <div className="text-center mb-10">
            <h2 className="font-sparo font-medium text-[40px] md:text-[48px] leading-tight mb-2">
              <span className="block text-axo-white">Resultados que</span>
              <span className="block text-axo-orange italic font-serif -mt-1 text-[48px] md:text-[56px]">Falam por Si</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                tag: 'AUTOMAÇÃO',
                title: '-85% de Carga Manual',
                desc: 'Automação de Fluxo de Dados e CRM',
                metrics: 'Processamento em 24h → Processamento em Segundos'
              },
              {
                tag: 'WEB',
                title: '3.5x Mais Agendamentos',
                desc: 'Landing Page Otimizada para Clínicas',
                metrics: 'Site Institucional → Máquina de Conversão'
              },
              {
                tag: 'GROWTH',
                title: '+210% de Leads Qualificados',
                desc: 'Estratégia Digital e Aquisição de Clientes',
                metrics: 'Alcance Orgânico → Escala Previsível'
              },
              {
                tag: 'AUTOMAÇÃO',
                title: '98% de Retenção de Contatos',
                desc: 'Automação de Resposta em Tempo Real',
                metrics: 'Perda de Leads → Resposta Instantânea'
              }
            ].map((res, i) => (
              <div key={i} className="card-item relative overflow-hidden rounded-[12px] bg-[#0A0A0A] border border-white/10 p-6 group hover:border-axo-orange/30 transition-colors">
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-axo-orange/0 group-hover:bg-axo-orange/5 transition-colors duration-500 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <span className="self-start px-2 py-1 bg-axo-orange/10 text-axo-orange text-[9px] uppercase font-bold tracking-widest rounded mb-4">
                    {res.tag}
                  </span>
                  
                  <h3 className="font-sparo font-bold text-2xl md:text-[26px] leading-tight mb-2 text-white">
                    {res.title}
                  </h3>
                  <p className="text-axo-white/70 font-medium text-[13px] mb-4">
                    {res.desc}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-axo-muted group-hover:text-axo-white transition-colors">
                    <span className="text-xs font-medium">{res.metrics}</span>
                    <ArrowRight className="text-axo-orange shrink-0 ml-2 transform group-hover:translate-x-1 transition-transform" size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-[120px] px-6 relative fade-up-section bg-[#050505]">
        <div className="max-w-[1100px] mx-auto">
          
          {/* Centered Title */}
          <div className="text-center mb-16">
            <h2 className="font-sparo font-medium text-[40px] md:text-[48px] leading-tight mb-2">
              <span className="block text-axo-white">Entre em Contato</span>
              <span className="block text-axo-orange italic font-serif -mt-1 text-[48px] md:text-[56px]">Agora Mesmo!</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Esquerda - Formulário (Styled like Sparo) */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-[24px] p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              <h3 className="text-white text-2xl font-sparo font-bold mb-2">Como Podemos Ajudar?</h3>
              <p className="text-axo-muted text-sm mb-8">Descreva o seu desafio ou objetivo, e nossa equipe desenhará a solução ideal sob medida.</p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-axo-white text-sm mb-2 font-medium">Nome Completo</label>
                    <input type="text" name="nome" value={formData.nome} onChange={handleFormChange} required placeholder="Seu nome completo" className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-axo-muted/50 focus:outline-none focus:border-axo-orange/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-axo-white text-sm mb-2 font-medium">E-mail</label>
                    <input type="email" name="email" value={formData.email} onChange={handleFormChange} required placeholder="Seu e-mail" className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-axo-muted/50 focus:outline-none focus:border-axo-orange/50 transition-all" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-axo-white text-sm mb-2 font-medium">WhatsApp</label>
                    <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleFormChange} required placeholder="Seu WhatsApp" className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-axo-muted/50 focus:outline-none focus:border-axo-orange/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-axo-white text-sm mb-2 font-medium">Nicho</label>
                    <input type="text" name="nicho" value={formData.nicho} onChange={handleFormChange} required placeholder="Ex: Construção; Saúde" className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-axo-muted/50 focus:outline-none focus:border-axo-orange/50 transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-axo-white text-sm mb-2 font-medium">Mensagem</label>
                  <textarea name="mensagem" value={formData.mensagem} onChange={handleFormChange} required placeholder="Conte-nos mais sobre o seu projeto..." rows="4" className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-axo-muted/50 focus:outline-none focus:border-axo-orange/50 transition-all resize-none"></textarea>
                </div>
                
                <div className="flex items-center gap-4 mt-2">
                  <button type="submit" disabled={formStatus.loading} className="magnetic-btn w-[200px] bg-[#050505] border border-white/10 shadow-[0_4px_24px_rgba(252,102,37,0.15)] hover:border-axo-orange/50 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2 transition-all text-sm shrink-0">
                    {formStatus.loading ? (
                      <><Loader2 size={16} className="animate-spin" /> Enviando...</>
                    ) : (
                      <>Enviar Mensagem <ArrowRight size={16} /></>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Direita - 3-step flow da Jornada */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-[24px] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              
              {/* Efeito de brilho de fundo na direita */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-axo-orange/5 blur-[80px] rounded-full pointer-events-none"></div>

              <h3 className="text-white text-3xl font-sparo font-bold mb-12 relative z-10">Próximos Passos</h3>
              
              <div className="space-y-12 relative before:content-[''] before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10 z-10">
                
                {/* Step 1 */}
                <div className="relative flex gap-8">
                  <div className="w-12 h-12 rounded-full bg-[#050505] border border-axo-orange flex items-center justify-center shrink-0 z-10 shadow-[0_0_15px_rgba(252,102,37,0.2)]">
                    <span className="text-axo-orange font-bold text-lg">1</span>
                  </div>
                  <div className="pt-1">
                    <h4 className="text-white font-bold text-xl mb-2">Preencha o formulário</h4>
                    <p className="text-axo-muted text-sm leading-relaxed max-w-[320px]">Forneça os detalhes iniciais. É rápido e nos ajuda a entender melhor o contexto do seu negócio.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex gap-8">
                  <div className="w-12 h-12 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center shrink-0 z-10">
                    <span className="text-white/40 font-bold text-lg">2</span>
                  </div>
                  <div className="pt-1">
                    <h4 className="text-white font-bold text-xl mb-2">Análise cuidadosa</h4>
                    <p className="text-axo-muted text-sm leading-relaxed max-w-[320px]">Nossa equipe interna revisa suas informações para formular a melhor estratégia antes da nossa conversa.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex gap-8">
                  <div className="w-12 h-12 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center shrink-0 z-10">
                    <span className="text-white/40 font-bold text-lg">3</span>
                  </div>
                  <div className="pt-1">
                    <h4 className="text-white font-bold text-xl mb-2">Contato especializado</h4>
                    <p className="text-axo-muted text-sm leading-relaxed max-w-[320px]">Nós entraremos em contato para apresentar as possibilidades e desenhar a automação perfeita para você.</p>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#020202] pt-20 pb-8 px-6 border-t border-white/5">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <a href="/" className="text-axo-white font-sparo font-bold text-4xl tracking-tighter flex items-baseline mb-4">
              axo<span className="text-axo-orange">.</span>
            </a>
            <p className="text-axo-muted mb-6">Automação Inteligente e Estratégias Digitais para o seu negócio.</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/axo.growth/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-axo-orange hover:text-white transition-colors border border-white/10">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/lucas-gabriel-ibanez/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors border border-white/10">
                <Linkedin size={18} />
              </a>
              <a href="https://wa.link/vikc4e" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors border border-white/10">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-axo-muted hover:text-axo-orange transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Políticas</h4>
            <ul className="space-y-3">
              <li><Link to="/privacidade" className="text-axo-muted hover:text-axo-orange transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos" className="text-axo-muted hover:text-axo-orange transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contato</h4>
            <ul className="space-y-3">
              <li><a href="https://wa.link/vikc4e" target="_blank" rel="noopener noreferrer" className="text-axo-muted hover:text-axo-orange transition-colors">WhatsApp</a></li>
              <li><a href="mailto:axo.solucoes@gmail.com" className="text-axo-muted hover:text-axo-orange transition-colors">E-mail</a></li>
            </ul>
          </div>

        </div>

        <div className="max-w-[1000px] mx-auto pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-axo-muted text-sm">
            © {new Date().getFullYear()} Axo. Todos os direitos reservados.
          </p>
          <a href="#inicio" className="text-axo-muted text-sm hover:text-white transition-colors flex items-center gap-1">
            Voltar ao topo ↑
          </a>
        </div>
      </footer>

      {/* Modal de Status do Formulário */}
      {(formStatus.loading || formStatus.success || formStatus.error) && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
          onClick={formStatus.loading ? undefined : closePopup}
        >
          <div
            className="relative bg-[#0D0D0D] border border-white/10 rounded-[2rem] p-10 max-w-sm w-full flex flex-col items-center gap-6 shadow-[0_32px_80px_rgba(0,0,0,0.8)]"
            style={{ animation: 'modalIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Efeito glow de fundo */}
            <div
              className="absolute inset-0 rounded-[2rem] pointer-events-none"
              style={{
                background: formStatus.success
                  ? 'radial-gradient(ellipse at center, rgba(34,197,94,0.07) 0%, transparent 70%)'
                  : formStatus.error
                  ? 'radial-gradient(ellipse at center, rgba(239,68,68,0.07) 0%, transparent 70%)'
                  : 'radial-gradient(ellipse at center, rgba(252,102,37,0.07) 0%, transparent 70%)'
              }}
            />

            {/* Ícone de estado */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: formStatus.success
                  ? 'rgba(34,197,94,0.1)'
                  : formStatus.error
                  ? 'rgba(239,68,68,0.1)'
                  : 'rgba(252,102,37,0.1)',
                border: `1px solid ${formStatus.success ? 'rgba(34,197,94,0.3)' : formStatus.error ? 'rgba(239,68,68,0.3)' : 'rgba(252,102,37,0.3)'}`
              }}
            >
              {formStatus.loading && (
                <Loader2 size={36} className="animate-spin" style={{ color: '#FC6625' }} />
              )}
              {formStatus.success && (
                <CheckCircle2 size={36} style={{ color: '#22c55e' }} />
              )}
              {formStatus.error && (
                <X size={36} style={{ color: '#ef4444' }} />
              )}
            </div>

            {/* Texto */}
            <div className="text-center relative z-10">
              {formStatus.loading && (
                <>
                  <h3 className="text-white font-bold text-xl mb-2">Enviando sua mensagem</h3>
                  <p className="text-axo-muted text-sm">Aguarde um momento...</p>
                </>
              )}
              {formStatus.success && (
                <>
                  <h3 className="text-white font-bold text-xl mb-2">Mensagem enviada!</h3>
                  <p className="text-axo-muted text-sm">Nossa equipe recebeu seu contato e entrará em breve para entender como podemos ajudar.</p>
                </>
              )}
              {formStatus.error && (
                <>
                  <h3 className="text-white font-bold text-xl mb-2">Erro ao enviar</h3>
                  <p className="text-axo-muted text-sm">Ocorreu um problema. Por favor, tente novamente.</p>
                </>
              )}
            </div>

            {/* Botão fechar (apenas quando não está loading) */}
            {!formStatus.loading && (
              <button
                onClick={closePopup}
                className="magnetic-btn px-8 py-3 rounded-xl border font-bold text-sm transition-all"
                style={{
                  background: 'transparent',
                  color: formStatus.success ? '#22c55e' : '#ef4444',
                  borderColor: formStatus.success ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'
                }}
              >
                {formStatus.success ? 'Fechar' : 'Tentar Novamente'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacidade" element={<Privacidade />} />
      <Route path="/termos" element={<Termos />} />
    </Routes>
  );
}
