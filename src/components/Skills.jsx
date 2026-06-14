import { motion } from 'framer-motion'
import { FaJava, FaPython, FaJs, FaPhp, FaHtml5, FaDatabase } from 'react-icons/fa'

const categories = [
  {
    nom: 'Langages',
    competences: [
      { nom: 'Java', niveau: 85, icon: <FaJava /> },
      { nom: 'Python', niveau: 80, icon: <FaPython /> },
      { nom: 'JavaScript', niveau: 75, icon: <FaJs /> },
      { nom: 'PHP', niveau: 72, icon: <FaPhp /> },
      { nom: 'C#', niveau: 70, icon: <span className="font-bold text-xs">C#</span> },
      { nom: 'HTML & CSS', niveau: 85, icon: <FaHtml5 /> },
      { nom: 'SQL', niveau: 75, icon: <FaDatabase /> },
      { nom: 'Langage C', niveau: 65, icon: <span className="font-bold text-xs">C</span> },
    ],
  },
  {
    nom: 'Outils & Soft Skills',
    competences: [
      { nom: 'Word & ACCESS', niveau: 80, icon: <span className="text-xs font-bold">W</span> },
      { nom: 'Cisco Packet Tracer', niveau: 65, icon: <span className="text-xs font-bold">📡</span> },
      { nom: 'Leadership', niveau: 90, icon: <span className="text-xs">👑</span> },
      { nom: 'Communication', niveau: 85, icon: <span className="text-xs">💬</span> },
      { nom: 'Gestion du temps', niveau: 80, icon: <span className="text-xs">⏱</span> },
    ],
  },
]

function Bar({ nom, niveau, icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-2 text-gray-300 text-sm">
          <span className="text-violet-400 text-base">{icon}</span>
          {nom}
        </span>
        <span className="text-violet-400 text-xs font-mono">{niveau}%</span>
      </div>
      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${niveau}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-500"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm tracking-widest uppercase mb-2">Ce que je sais faire</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Compétences</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((cat) => (
            <div key={cat.nom}>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-white font-semibold mb-6 flex items-center gap-2"
              >
                <span className="w-1.5 h-4 bg-violet-500 rounded-full inline-block" />
                {cat.nom}
              </motion.h3>
              <div className="space-y-4">
                {cat.competences.map((c, i) => (
                  <Bar key={c.nom} {...c} delay={i * 0.07} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
