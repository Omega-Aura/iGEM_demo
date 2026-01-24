import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  link,
  linkText = 'Learn more',
  delay = 0,
  variant = 'default' // 'default', 'highlighted', 'compact'
}) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3 }}
      className={`group h-full p-6 transition-all duration-200 border-3 border-secondary ${variant === 'highlighted'
        ? 'bg-[#BFFF00] hover:bg-[#d4ff33]'
        : 'bg-white hover:bg-pastel-mint/30'
        }`}
    >
      {Icon && (
        <div className={`w-14 h-14 mb-5 flex items-center justify-center border-3 border-secondary ${variant === 'highlighted'
          ? 'bg-primary text-secondary'
          : 'bg-primary text-secondary group-hover:bg-[#BFFF00]'
          } transition-all duration-200`}>
          <Icon className="w-7 h-7" />
        </div>
      )}

      <h3 className="text-xl font-heading font-bold text-secondary mb-3">
        {title}
      </h3>

      <p className="text-secondary/70 mb-5 leading-relaxed">
        {description}
      </p>

      {link && (
        <div className="mt-auto">
          <span className="inline-flex items-center font-heading font-bold transition-colors text-secondary group-hover:text-primary">
            {linkText}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
          </span>
        </div>
      )}
    </motion.div>
  )

  if (link) {
    return (
      <Link to={link} className="block h-full">
        {content}
      </Link>
    )
  }

  return content
}

export default FeatureCard
