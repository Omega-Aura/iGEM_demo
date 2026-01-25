import { memo } from 'react'
import { motion } from 'framer-motion'

const StatsCard = memo(({ icon: Icon, value, label, description, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay, type: "spring", bounce: 0.4 }}
            whileHover={{
                scale: 1.02,
                rotate: -1,
                transition: { duration: 0.15, ease: "easeOut" }
            }}
            className="bg-white text-center group p-6 border-[3px] border-black transition-all duration-200 hover:bg-pastel-mint/30"
            style={{
                borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
                boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)"
            }}
        >
            {Icon && (
                <div className="w-16 h-16 mx-auto mb-4 bg-primary border-[3px] border-black flex items-center justify-center group-hover:bg-festival-lime transition-all duration-200">
                    <Icon className="w-8 h-8 text-secondary" />
                </div>
            )}
            <div className="text-4xl md:text-5xl font-comic tracking-wide text-secondary mb-2">
                {value}
            </div>
            <div className="text-lg font-comic tracking-wide text-primary mb-1">{label}</div>
            {description && (
                <p className="text-sm text-secondary/60 font-medium">{description}</p>
            )}
        </motion.div>
    )
})

StatsCard.displayName = 'StatsCard'

export default StatsCard
