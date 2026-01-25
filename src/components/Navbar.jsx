import { useState, useEffect, useRef, useCallback } from 'react'
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
    const [activeDropdown, setActiveDropdown] = useState(null)
    const location = useLocation()
    const navRef = useRef(null)
    const dropdownRefs = useRef({})

    useEffect(() => {
        setIsOpen(false)
        setActiveDropdown(null)
    }, [location])

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e, item) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setActiveDropdown(activeDropdown === item.name ? null : item.name)
        } else if (e.key === 'Escape') {
            setActiveDropdown(null)
        } else if (e.key === 'ArrowDown' && activeDropdown === item.name) {
            e.preventDefault()
            const firstLink = dropdownRefs.current[item.name]?.querySelector('a')
            firstLink?.focus()
        }
    }, [activeDropdown])

    // Handle dropdown item keyboard navigation
    const handleDropdownKeyDown = useCallback((e, itemName, childIndex, childrenLength) => {
        if (e.key === 'Escape') {
            setActiveDropdown(null)
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            const links = dropdownRefs.current[itemName]?.querySelectorAll('a')
            const nextIndex = (childIndex + 1) % childrenLength
            links?.[nextIndex]?.focus()
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            const links = dropdownRefs.current[itemName]?.querySelectorAll('a')
            const prevIndex = childIndex === 0 ? childrenLength - 1 : childIndex - 1
            links?.[prevIndex]?.focus()
        }
    }, [])

    const isActive = (item) => {
        if (item.path) return location.pathname === item.path
        if (item.children) return item.children.some(child => location.pathname === child.path)
        return false
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 py-4" role="navigation" aria-label="Main navigation">
            {/* Skip to content link for accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-secondary focus:border-3 focus:border-secondary"
            >
                Skip to main content
            </a>

            <div className="container-custom">
                <div className="flex items-center justify-center">
                    {/* Floating navbar with items */}
                    <div className="flex items-center gap-0" ref={navRef}>
                        {/* Logo - Cyan box with thick border */}
                        <Link
                            to="/"
                            className="flex items-center gap-2 px-4 py-2.5 bg-primary border-3 border-secondary text-secondary font-heading font-bold hover:bg-primary-light transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            aria-label="TRE-Pod Home"
                        >
                            <img src="/logo.png" alt="" className="w-5 h-5" aria-hidden="true" />
                            <span className="text-base tracking-tight">TRE-Pod</span>
                        </Link>

                        {/* Desktop Navigation - Dark background items */}
                        <div className="hidden lg:flex items-center" role="menubar">
                            {navItems.map((item) => {
                                const Icon = item.icon
                                const active = isActive(item)

                                return (
                                    <div
                                        key={item.name}
                                        className="relative"
                                        onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                        role="none"
                                    >
                                        <button
                                            className={`flex items-center gap-2 px-4 py-2.5 font-heading font-medium transition-all duration-200 border-y-3 border-r-3 border-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary ${active
                                                ? 'bg-festival-lime text-secondary'
                                                : 'bg-secondary/90 text-white hover:bg-secondary hover:text-primary'
                                                }`}
                                            aria-expanded={activeDropdown === item.name}
                                            aria-haspopup="true"
                                            aria-controls={`dropdown-${item.name}`}
                                            onKeyDown={(e) => handleKeyDown(e, item)}
                                            onFocus={() => item.children && setActiveDropdown(item.name)}
                                            role="menuitem"
                                        >
                                            <Icon className={`w-4 h-4 ${active ? 'text-secondary' : 'text-primary'}`} aria-hidden="true" />
                                            <span className="text-sm">{item.name}</span>
                                            {item.children && (
                                                <ChevronDown
                                                    className={`w-3 h-3 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                                                    aria-hidden="true"
                                                />
                                            )}
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
                                                    id={`dropdown-${item.name}`}
                                                    role="menu"
                                                    aria-label={`${item.name} submenu`}
                                                    ref={(el) => dropdownRefs.current[item.name] = el}
                                                >
                                                    {item.children.map((child, childIndex) => (
                                                        <Link
                                                            key={child.path}
                                                            to={child.path}
                                                            className={`block px-4 py-2.5 font-medium transition-all text-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary ${location.pathname === child.path
                                                                ? 'text-secondary bg-primary border-l-4 border-secondary'
                                                                : 'text-secondary hover:bg-festival-lime hover:border-l-4 hover:border-secondary'
                                                                }`}
                                                            role="menuitem"
                                                            onKeyDown={(e) => handleDropdownKeyDown(e, item.name, childIndex, item.children.length)}
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
                            className="lg:hidden p-2.5 bg-secondary border-3 border-secondary text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
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
                        id="mobile-menu"
                        role="menu"
                    >
                        <div className="bg-white shadow-xl border-3 border-secondary p-2">
                            {/* Mobile Home Link */}
                            <Link
                                to="/"
                                className={`flex items-center gap-2 px-4 py-3 font-heading font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary ${location.pathname === '/'
                                    ? 'bg-primary text-secondary'
                                    : 'text-secondary hover:bg-festival-lime'
                                    }`}
                                role="menuitem"
                            >
                                <img src="/logo.png" alt="" className="w-4 h-4" aria-hidden="true" />
                                <span>Home</span>
                            </Link>

                            {navItems.map((item) => {
                                const Icon = item.icon
                                return (
                                    <div key={item.name} role="none">
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                            className={`flex items-center justify-between w-full px-4 py-3 font-heading font-semibold hover:bg-festival-lime transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary ${isActive(item) ? 'bg-primary text-secondary' : 'text-secondary'
                                                }`}
                                            aria-expanded={activeDropdown === item.name}
                                            aria-controls={`mobile-dropdown-${item.name}`}
                                            role="menuitem"
                                        >
                                            <div className="flex items-center gap-2">
                                                <Icon className="w-4 h-4 text-secondary" aria-hidden="true" />
                                                <span>{item.name}</span>
                                            </div>
                                            <ChevronDown className={`w-4 h-4 text-secondary transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} aria-hidden="true" />
                                        </button>
                                        <AnimatePresence>
                                            {activeDropdown === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="pl-4 space-y-1 overflow-hidden border-l-3 border-secondary ml-4"
                                                    id={`mobile-dropdown-${item.name}`}
                                                    role="menu"
                                                >
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.path}
                                                            to={child.path}
                                                            className={`block px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary ${location.pathname === child.path
                                                                ? 'text-secondary bg-primary'
                                                                : 'text-secondary/70 hover:text-secondary hover:bg-festival-lime'
                                                                }`}
                                                            role="menuitem"
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
