import { motion } from 'framer-motion'
import photo from '../assets/photo.png'

const formations = [
  { annee: '2023–2025', titre: '2ème Année Licence (EMIT)', lieu: 'Université Fianarantsoa' },
  { annee: '2022–2023', titre: '1ère Année Licence (EMIT)', lieu: 'Université Fianarantsoa' },
  { annee: '2025', titre: 'Baccalauréat', lieu: 'Lycée Loterana Rakoto Andrianarijaona' },
  { annee: '2019–2020', titre: 'BEPC', lieu: 'Lycée Raherivelo Ramamonjy' },
]

const experiences = [
  { annee: '2025', titre: 'Stage — Maintenance Software', lieu: 'Cyber Fa Services Ivory' },
  { annee: '2025', titre: 'Stage', lieu: 'BOA (Bank Of Africa) Fianarantsoa · 2 mois' },
  { annee: '2022–2025', titre: 'Leader Scout', lieu: 'F.L.M Soatsihadino — SCOUT' },
]

function Timeline({ items }) {
  return (
    <div className="relative border-l border-gray-800 pl-6 space-y-6">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative"
        >
          <span className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-violet-600 border-2 border-gray-950" />
          <p className="text-violet-400 text-xs font-mono mb-1">{item.annee}</p>
          <p className="text-white font-medium text-sm">{item.titre}</p>
          <p className="text-gray-500 text-xs">{item.lieu}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm tracking-widest uppercase mb-2">Qui suis-je ?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">À Propos</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">

                {/* Photo de profil */}
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-violet-600 shadow-md shadow-violet-900/30 flex-shrink-0">
                  <img
                    src={photo}
                    alt="Avotriniaina Miadanarivo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-white font-semibold">Avotriniaina Miadanarivo</h3>
                  <p className="text-violet-400 text-sm">Développeur d'Application</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Étudiant en 2ème année de Licence à l'EMIT (Université Fianarantsoa), passionné par le développement d'applications. Je maîtrise plusieurs langages de programmation et j'ai réalisé des projets concrets en Java, Python, PHP et JavaScript.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 text-xs mb-1">Email</p>
                  <p className="text-gray-300">Avotra0403@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs mb-1">Localisation</p>
                  <p className="text-gray-300">Fianarantsoa, Madagascar</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs mb-1">Langues</p>
                  <p className="text-gray-300">Malgache · Français · Anglais</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs mb-1">Certification</p>
                  <p className="text-gray-300">PIX ✓</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timelines */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-violet-500 rounded-full inline-block" />
                Formation
              </h4>
              <Timeline items={formations} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-indigo-500 rounded-full inline-block" />
                Expérience
              </h4>
              <Timeline items={experiences} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
