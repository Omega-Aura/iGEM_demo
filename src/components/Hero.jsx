import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FloatingShapes from './FloatingShapes'

const Hero = ({
    title,
    subtitle,
    description,
    primaryAction,
    secondaryAction
}) => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-accent">
            {/* Background with grid pattern */}
            <div className="absolute inset-0">
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(#1a1a1a 2px, transparent 2px),
                                          linear-gradient(90deg, #1a1a1a 2px, transparent 2px)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Floating geometric shapes - Sharp rectangles */}
                <FloatingShapes variant="hero" />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 pt-20">
                <div className="max-w-4xl">
                    {subtitle && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center space-x-2 bg-primary px-5 py-2.5 mb-6 border-3 border-secondary"
                        >
                            <span className="w-2.5 h-2.5 bg-secondary" />
                            <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider">{subtitle}</span>
                        </motion.div>
                    )}

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-secondary mb-6 leading-tight"
                    >
                        {title}
                    </motion.h1>

                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg sm:text-xl md:text-2xl text-secondary/70 mb-8 max-w-2xl leading-relaxed"
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
                                primaryAction.href.startsWith('/') ? (
                                    <Link to={primaryAction.href} className="btn-primary">
                                        {primaryAction.label}
                                    </Link>
                                ) : (
                                    <a href={primaryAction.href} className="btn-primary">
                                        {primaryAction.label}
                                    </a>
                                )
                            )}
                            {secondaryAction && (
                                secondaryAction.href.startsWith('/') ? (
                                    <Link to={secondaryAction.href} className="btn-secondary">
                                        {secondaryAction.label}
                                    </Link>
                                ) : (
                                    <a href={secondaryAction.href} className="btn-secondary">
                                        {secondaryAction.label}
                                    </a>
                                )
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
                    className="w-8 h-12 border-3 border-secondary flex justify-center pt-2 bg-white"
                >
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-3 bg-primary"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
