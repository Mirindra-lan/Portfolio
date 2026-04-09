import React from 'react';

export default function JourneyAndSoftSkills() {
  const steps = [
    {
      type: 'soft',
      title: 'Adaptabilité & Apprentissage Rapide',
      desc: 'Capacité à pivoter rapidement entre les technos (ex: de CodeIgniter à AdonisJS) et à maîtriser de nouveaux outils.',
      icon: '🚀',
      color: 'from-cyan-400 to-blue-500',
      shadow: 'shadow-cyan-500/40',
    },
    {
      type: 'tech',
      title: 'Fondations Fullstack JavaScript',
      date: '2021 - 2022',
      desc: 'Maîtrise de l\'écosystème moderne : React, Next.js, Node.js. Développement d\'APIs RESTful et gestion de bases de données.',
      tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind'],
      color: 'from-blue-400 to-blue-600',
      shadow: 'shadow-blue-500/40',
    },
    {
      type: 'soft',
      title: 'Résolution de Problèmes Complexes',
      desc: 'Approche analytique pour le débogage et l\'optimisation de la performance (réduction de latence).',
      icon: '🧠',
      color: 'from-blue-500 to-purple-500',
      shadow: 'shadow-blue-500/40',
    },
    {
      type: 'tech',
      title: 'Spécialisation Audio & Temps Réel',
      date: '2023 - Présent',
      desc: 'Conception d\'architectures complexes intégrant ASR (Vosk), TTS et communication basse latence (WebRTC, WebSocket).',
      tech: ['AdonisJS', 'WebRTC', 'WebSocket', 'Vosk (ASR)', 'Docker'],
      color: 'from-purple-400 to-purple-600',
      shadow: 'shadow-purple-500/40',
    },
    {
      type: 'soft',
      title: 'Communication & Mentorat',
      desc: 'Vulgarisation de concepts techniques et partage de connaissances (expérience académique/associative).',
      icon: '🤝',
      color: 'from-purple-500 to-pink-500',
      shadow: 'shadow-purple-500/40',
    }
  ];

  return (
    <section id="journey" className="py-24 text-white bg-black scroll-mt-24">
      {/* Titre avec le même style que "My Skills" */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]">
          Parcours & Essence
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          L'évolution de mes compétences techniques fusionnée avec mes aptitudes humaines.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Ligne centrale décorative (Le Chemin Neural) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30"></div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center group">
              
              {/* Point de connexion central lumineux */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${step.color} border-4 border-black z-10 ${step.shadow} shadow-lg group-hover:scale-125 transition-transform duration-300`}></div>

              {/* Contenu - Alternance gauche/droite */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 ml-auto text-left'}`}>
                
                {/* Structure "Non-Card" : Fond transparent, flou et bordure subtile */}
                <div className={`p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 ${index % 2 === 0 ? 'hover:-translate-x-2' : 'hover:translate-x-2'}`}>
                  
                  {step.type === 'soft' ? (
                    // Design pour Soft Skill
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                      <span className="text-4xl">{step.icon}</span>
                      <div>
                        <h3 className={`text-xl font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          {step.title}
                        </h3>
                        <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Design pour Parcours Technique
                    <div>
                      <span className="text-sm text-gray-500 uppercase tracking-widest">{step.date}</span>
                      <h3 className="text-2xl font-bold mt-1 text-white group-hover:text-cyan-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 mt-3 text-base leading-relaxed">
                        {step.desc}
                      </p>
                      
                      {/* Badges tech - comme dans votre section Skills */}
                      <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                        {step.tech.map(t => (
                          <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-cyan-200">
                            {t}
                          </span>
                        ))}
                      </div>
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
