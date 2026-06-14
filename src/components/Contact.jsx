import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const infos = [
  { icon: <FaEnvelope />, label: 'Email', valeur: 'Avotra0403@gmail.com', href: 'mailto:Avotra0403@gmail.com' },
  { icon: <FaPhone />, label: 'Téléphone', valeur: '+261 38 78 18 507', href: 'tel:+261387818507' },
  { icon: <FaGithub />, label: 'GitHub', valeur: 'github.com/Miadanarivo', href: 'https://github.com/Miadanarivo' },
  { icon: <FaLinkedin />, label: 'LinkedIn', valeur: 'miadanarivo0403', href: 'https://www.linkedin.com/in/miadanarivo0403/' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm tracking-widest uppercase mb-2">Travaillons ensemble</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Disponible pour des opportunités, stages ou collaborations. N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {infos.map((info, i) => (
            <motion.a
              key={info.label}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-4 p-5 bg-gray-900 border border-gray-800 hover:border-violet-700 rounded-2xl transition-all duration-200 group"
            >
              <span className="text-violet-400 text-xl group-hover:scale-110 transition-transform duration-200">
                {info.icon}
              </span>
              <div>
                <p className="text-gray-500 text-xs mb-0.5">{info.label}</p>
                <p className="text-gray-200 text-sm font-medium">{info.valeur}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="mailto:Avotra0403@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-700/30"
          >
            <FaEnvelope /> Envoyer un message
          </a>
        </motion.div>

        <p className="text-center text-gray-700 text-xs mt-16">
          © 2025 Avotriniaina Miadanarivo · Développeur d'Application
        </p>
      </div>
    </section>
  )
}
