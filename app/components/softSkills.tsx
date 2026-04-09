import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faBrain, 
  faUsers, 
  faMicrochip, 
  faCodeBranch 
} from '@fortawesome/free-solid-svg-icons';
import { faJs, faReact, faNodeJs, faDocker } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Définition de l'interface typée
interface Step {
  type: 'soft' | 'tech';
  title: string;
  desc: string;
  date?: string;
  icon: IconDefinition; // On utilise le type officiel de FontAwesome
  tech?: string[];
  color: string;
  glow: string;
}

export default function JourneyAndSoftSkills() {
  const steps: Step[] = [
    {
      type: 'soft',
      title: 'Adaptabilité & Agilité',
      desc: 'Capacité à monter en compétence rapidement sur des stacks variées, passant de frameworks legacy à des architectures modernes comme AdonisJS.',
      icon: faRocket,
      color: 'from-cyan-400 to-blue-500',
      glow: 'shadow-cyan-500/20',
    },
    {
      type: 'tech',
      title: 'Expertise Fullstack JS',
      date: '2021 - 2023',
      desc: "Développement d'applications web robustes. Spécialisation dans l'écosystème React/Next.js et la gestion de flux de données complexes.",
      icon: faCodeBranch,
      tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
      color: 'from-blue-400 to-blue-600',
      glow: 'shadow-blue-500/20',
    },
    {
      type: 'soft',
      title: 'Analyse & Résolution',
      desc: 'Approche scientifique du débogage et optimisation de la latence pour les applications critiques.',
      icon: faBrain,
      color: 'from-blue-500 to-purple-500',
      glow: 'shadow-blue-500/20',
    },
    {
      type: 'tech',
      title: 'Systèmes Audio Temps Réel',
      date: '2024 - Présent',
      desc: 'Ingénierie de solutions de communication intelligente : intégration ASR/TTS et protocoles WebRTC/WebSockets.',
      icon: faMicrochip,
      tech: ['WebRTC', 'Vosk', 'AdonisJS', 'Docker', 'Socket.io'],
      color: 'from-purple-400 to-purple-600',
      glow: 'shadow-purple-500/20',
    },
    {
      type: 'soft',
      title: 'Communication & Mentorat',
      desc: 'Facilitateur au sein d’équipes techniques et engagement dans l’orientation académique pour les futurs ingénieurs.',
      icon: faUsers,
      color: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/20',
    }
  ];

  return (
    <section id="journey" className="py-24 text-white bg-black scroll-mt-24">
      <div className="text-center mb-24 px-6">
        <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.4)] uppercase tracking-tighter">
          Parcours & Mindset
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Rail central minimaliste */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50"></div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start md:items-center">
              
              {/* Icône flottante sur le rail */}
              <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/10 z-20 ${step.glow} shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                <FontAwesomeIcon icon={step.icon} className={`text-lg bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} style={{ color: 'transparent', backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                {/* Fallback color si le gradient text ne s'applique pas à l'icône */}
                <FontAwesomeIcon icon={step.icon} className={`text-lg absolute opacity-50 text-blue-400`} />
              </div>

              {/* Contenu avec design "Open-Air" (sans carte fermée) */}
              <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                <div className="relative group">
                  {step.type === 'tech' && (
                    <span className="text-[10px] font-bold tracking-[0.3em] text-blue-500/80 uppercase">
                      {step.date}
                    </span>
                  )}
                  
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 text-white/90 group-hover:text-white transition-colors italic">
                    {step.title}
                  </h3>
                  
                  <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed font-light">
                    {step.desc}
                  </p>

                  {step.tech && (
                    <div className={`flex flex-wrap gap-3 mt-6 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                      {step.tech.map((t) => (
                        <span key={t} className="text-[10px] px-3 py-1 border border-white/5 bg-white/[0.02] text-gray-300 rounded-sm hover:border-blue-500/30 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
