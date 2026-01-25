import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search } from 'lucide-react'
import FloatingShapes from '../components/FloatingShapes'

const NotFound = () => {
    return (
        <div className="min-h-screen bg-accent flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 grid-pattern-light opacity-50" />

            {/* Floating shapes */}
            <FloatingShapes variant="error" />

            {/* Main content */}
            <motion.div
                className="relative z-10 text-center max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* 404 Display */}
                <motion.div
                    className="mb-8"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className="text-[150px] md:text-[200px] font-comic leading-none text-secondary">
                        4
                        <motion.span
                            className="inline-block text-primary"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            0
                        </motion.span>
                        4
                    </h1>
                </motion.div>

                {/* Message */}
                <motion.div
                    className="bg-white border-3 border-secondary p-8 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h2 className="text-2xl md:text-3xl font-comic text-secondary mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-secondary/70 text-lg mb-2">
                        Looks like this experiment didn't go as planned!
                    </p>
                    <p className="text-secondary/60">
                        The page you're looking for might have been moved, deleted, or never existed.
                    </p>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link
                        to="/"
                        className="btn-primary inline-flex items-center justify-center gap-2"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="btn-outline inline-flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </motion.div>

                {/* Helpful links */}
                <motion.div
                    className="mt-12 pt-8 border-t-2 border-secondary/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <p className="text-secondary/60 mb-4 flex items-center justify-center gap-2">
                        <Search className="w-4 h-4" />
                        Try one of these pages:
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { label: 'Description', path: '/description' },
                            { label: 'Team', path: '/team' },
                            { label: 'Experiments', path: '/experiments' },
                            { label: 'Results', path: '/results' },
                        ].map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="px-4 py-2 bg-pastel-mint border-2 border-secondary text-secondary font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default NotFound
