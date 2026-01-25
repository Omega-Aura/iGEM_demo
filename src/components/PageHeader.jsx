import { memo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FloatingShapes from './FloatingShapes'

const PageHeader = memo(({ title, subtitle, breadcrumb, gridColor = 'primary' }) => {
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
            <FloatingShapes variant="header" />

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
})

PageHeader.displayName = 'PageHeader'

export default PageHeader
