import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
    { name: 'Home', path: '/' },
    {
        name: 'Project',
        children: [
            { name: 'Description', path: '/description' },
            { name: 'Engineering Success', path: '/engineering' },
        ],
    },
    {
        name: 'Science',
        children: [
            { name: 'Experiments', path: '/experiments' },
            { name: 'Results', path: '/results' },
            { name: 'Parts', path: '/parts' },
            { name: 'Notebook', path: '/notebook' },
            { name: 'Safety', path: '/safety' },
        ],
    },
    {
        name: 'Computational',
        children: [
            { name: 'Modeling', path: '/modeling' },
            { name: 'Software', path: '/software' },
        ],
    },
    {
        name: 'Team',
        children: [
            { name: 'Members', path: '/team' },
            { name: 'Attributions', path: '/attributions' },
            { name: 'Human Practices', path: '/human-practices' },
        ],
    },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
        setActiveDropdown(null)
    }, [location])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/logo.png" alt="TRE-Pod Logo" className="w-10 h-10 rounded-lg" />
                        <span className={`font-heading font-bold text-xl ${scrolled ? 'text-deep-blue' : 'text-white'}`}>
                            TRE-Pod
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {item.children ? (
                                    <button
                                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-colors ${scrolled
                                            ? 'text-charcoal hover:text-deep-blue hover:bg-light-gray'
                                            : 'text-white/90 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        <span>{item.name}</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                                    </button>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${scrolled
                                            ? 'text-charcoal hover:text-deep-blue hover:bg-light-gray'
                                            : 'text-white/90 hover:text-white hover:bg-white/10'
                                            } ${location.pathname === item.path ? 'text-vibrant-green' : ''}`}
                                    >
                                        {item.name}
                                    </Link>
                                )}

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {item.children && activeDropdown === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl py-2 border border-light-gray"
                                        >
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.path}
                                                    to={child.path}
                                                    className={`block px-4 py-2.5 text-charcoal hover:bg-light-gray hover:text-deep-blue transition-colors ${location.pathname === child.path ? 'text-vibrant-green bg-light-gray' : ''
                                                        }`}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-charcoal hover:bg-light-gray' : 'text-white hover:bg-white/10'
                            }`}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-light-gray"
                    >
                        <div className="container-custom py-4 space-y-2">
                            {navItems.map((item) => (
                                <div key={item.name}>
                                    {item.children ? (
                                        <div>
                                            <button
                                                onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                                className="flex items-center justify-between w-full px-4 py-3 text-charcoal font-medium rounded-lg hover:bg-light-gray"
                                            >
                                                <span>{item.name}</span>
                                                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {activeDropdown === item.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="pl-4 space-y-1"
                                                    >
                                                        {item.children.map((child) => (
                                                            <Link
                                                                key={child.path}
                                                                to={child.path}
                                                                className="block px-4 py-2 text-charcoal-light hover:text-deep-blue rounded-lg"
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className="block px-4 py-3 text-charcoal font-medium rounded-lg hover:bg-light-gray"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
