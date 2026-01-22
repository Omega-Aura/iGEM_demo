import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PageHeader = ({ title, subtitle, breadcrumb }) => {
    return (
        <section className="relative bg-hero-gradient pt-32 pb-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent-text/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                {breadcrumb && (
                    <motion.nav
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-white/60 text-sm mb-4"
                    >
                        {breadcrumb.map((item, index) => (
                            <span key={index}>
                                {index > 0 && <span className="mx-2">/</span>}
                                {item.link ? (
                                    <Link to={item.link} className="hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-white">{item.label}</span>
                                )}
                            </span>
                        ))}
                    </motion.nav>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-white/80 max-w-2xl"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    )
}

export default PageHeader
