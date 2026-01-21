import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Home, Beaker, FlaskConical, Cpu, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
    { name: 'Home', path: '/', icon: Home },
    {
        name: 'Project',
        icon: Beaker,
        children: [
            { name: 'Description', path: '/description' },
            { name: 'Engineering Success', path: '/engineering' },
        ],
    },
    {
        name: 'Science',
        icon: FlaskConical,
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
        icon: Cpu,
        children: [
            { name: 'Modeling', path: '/modeling' },
            { name: 'Software', path: '/software' },
        ],
    },
    {
        name: 'Team',
        icon: Users,
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

    const isActive = (item) => {
        if (item.path) return location.pathname === item.path
        if (item.children) return item.children.some(child => location.pathname === child.path)
        return false
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 py-4">
            <div className="container-custom">
                <div className="flex items-center justify-center">
                    {/* Pill-shaped navbar container */}
                    <div className={`flex items-center gap-1 p-1.5 rounded-full transition-all duration-300 border border-white/20 ${scrolled
                        ? 'bg-white/90 backdrop-blur-md shadow-lg ring-1 ring-black/5'
                        : 'bg-white/70 backdrop-blur-sm shadow-sm'
                        }`}>
                        {/* Logo - inside pill */}
                        <Link
                            to="/"
                            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${location.pathname === '/'
                                ? 'bg-primary/5 text-primary shadow-sm'
                                : 'hover:bg-primary/5'
                                }`}
                        >
                            <img src="/logo.png" alt="TRE-Pod Logo" className="w-6 h-6 rounded-md" />
                            <span className="font-heading font-semibold text-secondary">
                                TRE-Pod
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.slice(1).map((item) => {
                                const Icon = item.icon
                                const active = isActive(item)

                                return (
                                    <div
                                        key={item.name}
                                        className="relative"
                                        onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        {item.children ? (
                                            <button
                                                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${active
                                                    ? 'bg-primary text-white shadow-md'
                                                    : 'text-secondary hover:bg-primary/5 hover:text-primary'
                                                    }`}
                                            >
                                                <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-primary'}`} />
                                                <span>{item.name}</span>
                                            </button>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${active
                                                    ? 'bg-primary text-white shadow-md'
                                                    : 'text-secondary hover:bg-primary/5 hover:text-primary'
                                                    }`}
                                            >
                                                <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-primary'}`} />
                                                <span>{item.name}</span>
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
                                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-xl py-2 border border-gray-100"
                                                >
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.path}
                                                            to={child.path}
                                                            className={`block px-4 py-2.5 text-secondary hover:bg-accent hover:text-primary transition-colors ${location.pathname === child.path ? 'text-primary bg-accent' : ''
                                                                }`}
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-full text-secondary hover:bg-primary/5 transition-colors"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="lg:hidden mt-2 mx-4"
                    >
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2">
                            {navItems.map((item) => {
                                const Icon = item.icon
                                return (
                                    <div key={item.name}>
                                        {item.children ? (
                                            <div>
                                                <button
                                                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                                    className={`flex items-center justify-between w-full px-4 py-3 text-secondary font-medium rounded-xl hover:bg-accent transition-colors ${isActive(item) ? 'bg-accent text-primary' : ''
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <Icon className="w-4 h-4 text-primary" />
                                                        <span>{item.name}</span>
                                                    </div>
                                                    <ChevronDown className={`w-4 h-4 text-primary transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                                                </button>
                                                <AnimatePresence>
                                                    {activeDropdown === item.name && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="pl-4 space-y-1 overflow-hidden"
                                                        >
                                                            {item.children.map((child) => (
                                                                <Link
                                                                    key={child.path}
                                                                    to={child.path}
                                                                    className={`block px-4 py-2 rounded-lg transition-colors ${location.pathname === child.path
                                                                        ? 'text-primary bg-accent'
                                                                        : 'text-secondary/70 hover:text-primary'
                                                                        }`}
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
                                                className={`flex items-center gap-2 px-4 py-3 font-medium rounded-xl transition-colors ${location.pathname === item.path
                                                    ? 'bg-accent text-primary'
                                                    : 'text-secondary hover:bg-accent'
                                                    }`}
                                            >
                                                <Icon className="w-4 h-4 text-primary" />
                                                <span>{item.name}</span>
                                            </Link>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
