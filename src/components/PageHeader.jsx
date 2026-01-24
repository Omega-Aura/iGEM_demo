import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PageHeader = ({ title, subtitle, breadcrumb, gridColor = 'primary' }) => {
    // Map grid color to class
    const gridPatternClass = {
        primary: 'grid-pattern-primary',
        accent: 'grid-pattern-accent',
        lime: 'grid-pattern-lime',
        light: 'grid-pattern-light',
    }[gridColor] || 'grid-pattern-primary'

    return (
        <section className="relative bg-accent pt-32 pb-16 overflow-hidden border-b-3 border-secondary">
            {/* Grid pattern background */}
            <div className={`absolute inset-0 ${gridPatternClass}`} />

            {/* Floating geometric shapes */}
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-24 right-20 w-8 h-8 bg-primary border-3 border-secondary"
            />
            <motion.div
                animate={{
                    y: [0, 12, 0],
                    rotate: [0, -8, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 left-16 w-6 h-6 bg-[#BFFF00] border-3 border-secondary"
            />
            <motion.div
                animate={{
                    y: [0, -20, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-1/3 w-10 h-10 bg-accent-text border-3 border-secondary"
            />

            <div className="container-custom relative z-10">
                {breadcrumb && (
                    <motion.nav
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-secondary/60 text-sm mb-4 font-medium"
                    >
                        {breadcrumb.map((item, index) => (
                            <span key={index}>
                                {index > 0 && <span className="mx-2 text-secondary/40">›</span>}
                                {item.link ? (
                                    <Link to={item.link} className="hover:text-primary transition-colors">
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-secondary font-semibold">{item.label}</span>
                                )}
                            </span>
                        ))}
                    </motion.nav>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary mb-4"
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-secondary/70 max-w-2xl leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    )
}

export default PageHeader
