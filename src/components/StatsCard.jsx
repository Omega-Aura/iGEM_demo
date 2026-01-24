import { motion } from 'framer-motion'

const StatsCard = ({ icon: Icon, value, label, description, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -3 }}
            className="bg-white text-center group p-6 border-3 border-secondary transition-all duration-200 hover:bg-pastel-mint/30"
        >
            {Icon && (
                <div className="w-16 h-16 mx-auto mb-4 bg-primary border-3 border-secondary flex items-center justify-center group-hover:bg-[#BFFF00] transition-all duration-200">
                    <Icon className="w-8 h-8 text-secondary" />
                </div>
            )}
            <div className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-2">
                {value}
            </div>
            <div className="text-lg font-heading font-semibold text-primary mb-1">{label}</div>
            {description && (
                <p className="text-sm text-secondary/60">{description}</p>
            )}
        </motion.div>
    )
}

export default StatsCard
