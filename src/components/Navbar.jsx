import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, BookOpen, FlaskConical, Settings, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
    {
        name: 'Project',
        icon: BookOpen,
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
        icon: Settings,
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
                    {/* Floating navbar with items */}
                    <div className="flex items-center gap-0">
                        {/* Logo - Cyan box with thick border */}
                        <Link
                            to="/"
                            className="flex items-center gap-2 px-4 py-2.5 bg-primary border-3 border-secondary text-secondary font-heading font-bold hover:bg-primary-light transition-all duration-200"
                        >
                            <img src="/logo.png" alt="TRE-Pod Logo" className="w-5 h-5" />
                            <span className="text-base tracking-tight">TRE-Pod</span>
                        </Link>

                        {/* Desktop Navigation - Dark background items */}
                        <div className="hidden lg:flex items-center">
                            {navItems.map((item) => {
                                const Icon = item.icon
                                const active = isActive(item)

                                return (
                                    <div
                                        key={item.name}
                                        className="relative"
                                        onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <button
                                            className={`flex items-center gap-2 px-4 py-2.5 font-heading font-medium transition-all duration-200 border-y-3 border-r-3 border-secondary ${active
                                                ? 'bg-[#BFFF00] text-secondary'
                                                : 'bg-secondary/90 text-white hover:bg-secondary hover:text-primary'
                                                }`}
                                        >
                                            <Icon className={`w-4 h-4 ${active ? 'text-secondary' : 'text-primary'}`} />
                                            <span className="text-sm">{item.name}</span>
                                        </button>

                                        {/* Dropdown - Sharp rectangular styling */}
                                        <AnimatePresence>
                                            {item.children && activeDropdown === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 5 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="absolute top-full left-0 mt-0 w-56 bg-white py-1 border-3 border-secondary shadow-xl"
                                                >
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.path}
                                                            to={child.path}
                                                            className={`block px-4 py-2.5 font-medium transition-all text-sm ${location.pathname === child.path
                                                                ? 'text-secondary bg-primary border-l-4 border-secondary'
                                                                : 'text-secondary hover:bg-[#BFFF00] hover:border-l-4 hover:border-secondary'
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
                            className="lg:hidden p-2.5 bg-secondary border-3 border-secondary text-white hover:text-primary transition-colors"
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
                        className="lg:hidden mt-2 mx-4 pb-4"
                    >
                        <div className="bg-white shadow-xl border-3 border-secondary p-2">
                            {/* Mobile Home Link */}
                            <Link
                                to="/"
                                className={`flex items-center gap-2 px-4 py-3 font-heading font-semibold transition-colors ${location.pathname === '/'
                                    ? 'bg-primary text-secondary'
                                    : 'text-secondary hover:bg-[#BFFF00]'
                                    }`}
                            >
                                <img src="/logo.png" alt="TRE-Pod Logo" className="w-4 h-4" />
                                <span>Home</span>
                            </Link>

                            {navItems.map((item) => {
                                const Icon = item.icon
                                return (
                                    <div key={item.name}>
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                            className={`flex items-center justify-between w-full px-4 py-3 font-heading font-semibold hover:bg-[#BFFF00] transition-colors ${isActive(item) ? 'bg-primary text-secondary' : 'text-secondary'
                                                }`}
                                        >
                                            <div className="flex items-center gap-2">
                                                <Icon className="w-4 h-4 text-secondary" />
                                                <span>{item.name}</span>
                                            </div>
                                            <ChevronDown className={`w-4 h-4 text-secondary transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {activeDropdown === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="pl-4 space-y-1 overflow-hidden border-l-3 border-secondary ml-4"
                                                >
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.path}
                                                            to={child.path}
                                                            className={`block px-4 py-2 font-medium transition-colors ${location.pathname === child.path
                                                                ? 'text-secondary bg-primary'
                                                                : 'text-secondary/70 hover:text-secondary hover:bg-[#BFFF00]'
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
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
