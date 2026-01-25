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
      transition={{ duration: 0.5, delay, type: "spring", bounce: 0.4 }}
      whileHover={{
        scale: 1.02,
        rotate: 1,
        transition: { duration: 0.15, ease: "easeOut" }
      }}
      className={`group h-full p-6 transition-all duration-200 border-[3px] border-black ${variant === 'highlighted'
        ? 'bg-[#BFFF00] hover:bg-[#d4ff33]'
        : 'bg-white hover:bg-pastel-mint/30'
        }`}
      style={{
        borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
        boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)"
      }}
    >
      {Icon && (
        <div className={`w-14 h-14 mb-5 flex items-center justify-center border-[3px] border-black ${variant === 'highlighted'
          ? 'bg-primary text-secondary'
          : 'bg-primary text-secondary group-hover:bg-[#BFFF00]'
          } transition-all duration-200`}>
          <Icon className="w-7 h-7" />
        </div>
      )}

      <h3 className="text-xl font-['Bangers'] tracking-wide text-secondary mb-3">
        {title}
      </h3>

      <p className="text-secondary/70 mb-5 leading-relaxed font-medium">
        {description}
      </p>

      {link && (
        <div className="mt-auto">
          <span className="inline-flex items-center font-['Bangers'] tracking-wide transition-colors text-secondary group-hover:text-primary">
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
