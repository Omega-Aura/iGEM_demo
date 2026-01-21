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
      className={`card group h-full ${variant === 'highlighted'
          ? 'border-2 border-accent-text bg-gradient-to-br from-white to-accent-text/5'
          : 'hover:border-primary border-2 border-transparent'
        }`}
    >
      {Icon && (
        <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${variant === 'highlighted'
            ? 'bg-accent-text text-white'
            : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
          } transition-all duration-300`}>
          <Icon className="w-6 h-6" />
        </div>
      )}

      <h3 className="text-xl font-heading font-semibold text-secondary mb-3">
        {title}
      </h3>

      <p className="text-secondary-light mb-4 leading-relaxed">
        {description}
      </p>

      {link && (
        <div className="mt-auto">
          <span className="inline-flex items-center text-primary font-medium group-hover:text-accent-text transition-colors">
            {linkText}
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
