import { motion } from 'framer-motion'

const SectionHeader = ({
    title,
    subtitle,
    description,
    centered = true,
    tag
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}
        >
            {tag && (
                <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                    <span className="w-1.5 h-1.5 bg-accent-text rounded-full" />
                    <span className="text-primary text-sm font-medium">{tag}</span>
                </div>
            )}
            <h2 className="section-title">{title}</h2>
            {subtitle && (
                <p className="text-xl text-primary-light font-medium mb-2">{subtitle}</p>
            )}
            {description && (
                <p className="section-subtitle">{description}</p>
            )}
        </motion.div>
    )
}

export default SectionHeader
