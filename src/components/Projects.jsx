import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projets = [
  {
    titre: 'Gestion de Boulangerie',
    description: 'Application complète de gestion d\'une boulangerie avec interface multi-langages. Gestion des stocks, commandes et clients.',
    techs: ['Java', 'PHP', 'C#', 'JavaScript'],
    couleur: 'from-violet-600/20 to-indigo-600/10',
    border: 'border-violet-800/40',
    github: 'https://github.com/Miadanarivo',
  },
  {
    titre: 'Gestion de Magasin',
    description: 'Système de gestion de magasin développé en Python avec suivi des ventes, inventaire et rapports.',
    techs: ['Python'],
    couleur: 'from-indigo-600/20 to-blue-600/10',
    border: 'border-indigo-800/40',
    github: 'https://github.com/Miadanarivo',
  },
  {
    titre: 'Gestion de Moto',
    description: 'Application web de gestion d\'une flotte de motos, avec suivi des locations et état du parc.',
    techs: ['HTML', 'CSS'],
    couleur: 'from-purple-600/20 to-violet-600/10',
    border: 'border-purple-800/40',
    github: 'https://github.com/Miadanarivo',
  },
  {
    titre: 'Gestion de Contact',
    description: 'Application de gestion de contacts avec algorithme de recherche et tri optimisé.',
    techs: ['Algorithme', 'Python'],
    couleur: 'from-blue-600/20 to-indigo-600/10',
    border: 'border-blue-800/40',
    github: 'https://github.com/Miadanarivo',
  },
  {
    titre: 'Base de Données Boulangerie',
    description: 'Conception et implémentation d\'une base de données relationnelle pour la gestion d\'une boulangerie.',
    techs: ['ACCESS', 'SQL'],
    couleur: 'from-teal-600/20 to-green-600/10',
    border: 'border-teal-800/40',
    github: 'https://github.com/Miadanarivo',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm tracking-widest uppercase mb-2">Ce que j'ai réalisé</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projets</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projets.map((p, i) => (
            <motion.div
              key={p.titre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group relative bg-gradient-to-br ${p.couleur} border ${p.border} rounded-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-violet-900/20`}
            >
              <h3 className="text-white font-semibold text-lg mb-2">{p.titre}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.techs.map(t => (
                  <span key={t} className="px-2.5 py-1 bg-gray-900/60 border border-gray-700 text-violet-300 text-xs rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors"
                >
                  <FaGithub /> Code
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
