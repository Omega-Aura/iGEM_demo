import { motion } from 'framer-motion'

const Hero = ({
    title,
    subtitle,
    description,
    primaryAction,
    secondaryAction,
    backgroundVariant = 'gradient' // 'gradient', 'image', 'particles'
}) => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-hero-gradient">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Floating circles */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-vibrant-green/10 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            opacity: [0.1, 0.15, 0.1]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-stasis-violet/10 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.05, 0.1, 0.05]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-atp-gold/5 rounded-full blur-3xl"
                    />
                </div>

                {/* Grid overlay */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 pt-20">
                <div className="max-w-4xl">
                    {subtitle && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                        >
                            <span className="w-2 h-2 bg-vibrant-green rounded-full animate-pulse" />
                            <span className="text-white/90 text-sm font-medium">{subtitle}</span>
                        </motion.div>
                    )}

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight"
                    >
                        {title}
                    </motion.h1>

                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
                        >
                            {description}
                        </motion.p>
                    )}

                    {(primaryAction || secondaryAction) && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            {primaryAction && (
                                <a href={primaryAction.href} className="btn-primary">
                                    {primaryAction.label}
                                </a>
                            )}
                            {secondaryAction && (
                                <a href={secondaryAction.href} className="btn-outline border-white text-white hover:bg-white hover:text-deep-blue">
                                    {secondaryAction.label}
                                </a>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
