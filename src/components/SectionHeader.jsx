import { memo } from 'react'
import { motion } from 'framer-motion'

const SectionHeader = memo(({ title, subtitle, description, centered = true, tag }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}
        >
            {tag && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center space-x-2 bg-primary px-5 py-2 mb-5 border-3 border-secondary"
                >
                    <span className="w-2 h-2 bg-secondary" />
                    <span className="text-secondary text-sm font-comic tracking-wider uppercase">{tag}</span>
                </motion.div>
            )}
            <h2 className="text-3xl md:text-4xl font-comic tracking-wide text-secondary mb-4">{title}</h2>
            {subtitle && (
                <p className="text-xl text-primary font-comic tracking-wide mb-2">{subtitle}</p>
            )}
            {description && (
                <p className="text-lg text-secondary/60 leading-relaxed font-comic-body">{description}</p>
            )}
        </motion.div>
    )
})

SectionHeader.displayName = 'SectionHeader'

export default SectionHeader
