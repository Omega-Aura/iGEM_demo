import { motion } from 'framer-motion'

const StatsCard = ({ icon: Icon, value, label, description, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="card text-center group hover:border-accent-text border-2 border-transparent"
        >
            {Icon && (
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center group-hover:from-accent-text group-hover:to-primary transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                </div>
            )}
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2 group-hover:text-accent-text transition-colors">
                {value}
            </div>
            <div className="text-lg font-semibold text-secondary mb-1">{label}</div>
            {description && (
                <p className="text-sm text-secondary-light">{description}</p>
            )}
        </motion.div>
    )
}

export default StatsCard
