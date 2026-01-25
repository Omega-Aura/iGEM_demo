import { Link } from 'react-router-dom'
import { Github, Instagram, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        project: [
            { name: 'Description', path: '/description' },
            { name: 'Engineering', path: '/engineering' },
            { name: 'Results', path: '/results' },
        ],
        science: [
            { name: 'Experiments', path: '/experiments' },
            { name: 'Modeling', path: '/modeling' },
            { name: 'Software', path: '/software' },
        ],
        team: [
            { name: 'Members', path: '/team' },
            { name: 'Attributions', path: '/attributions' },
            { name: 'Human Practices', path: '/human-practices' },
        ],
    }

    return (
        <footer className="bg-secondary text-white relative overflow-hidden">
            {/* Grid pattern background */}
            <div className="absolute inset-0 grid-pattern-dark" />

            {/* Main Footer */}
            <div className="container-custom py-12 lg:py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center space-x-3 mb-4 group">
                            <div className="w-12 h-12 bg-primary border-3 border-white/20 flex items-center justify-center">
                                <img
                                    src="/logo.png"
                                    alt="TRE-Pod Logo"
                                    className="w-8 h-8 object-contain"
                                />
                            </div>
                            <span className="font-heading font-bold text-2xl tracking-tight group-hover:text-primary transition-colors">TRE-Pod</span>
                        </Link>
                        <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
                            Translational Rhythm Engineering for Programmed Dormancy.
                            Engineering reversible cellular dormancy through codon-specific
                            ribosomal stalling.
                        </p>
                        <div className="flex space-x-3">
                            <a
                                href="https://github.com/Omega-Aura"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 bg-white/10 border-2 border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-200"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/igem_vit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 bg-white/10 border-2 border-white/20 flex items-center justify-center hover:bg-[#BFFF00] hover:border-[#BFFF00] hover:text-secondary transition-all duration-200"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/igem-vit-vellore-team"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 bg-white/10 border-2 border-white/20 flex items-center justify-center hover:bg-[#0077B5] hover:border-[#0077B5] transition-all duration-200"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:aritrakanungo@gmail.com"
                                className="w-11 h-11 bg-white/10 border-2 border-white/20 flex items-center justify-center hover:bg-accent-text hover:border-accent-text transition-all duration-200"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Project Links */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-5 text-primary">Project</h4>
                        <ul className="space-y-3">
                            {footerLinks.project.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-white/70 hover:text-primary transition-colors font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Science Links */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-5 text-[#BFFF00]">Science</h4>
                        <ul className="space-y-3">
                            {footerLinks.science.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-white/70 hover:text-[#BFFF00] transition-colors font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Team Links */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-5 text-accent-text">Team</h4>
                        <ul className="space-y-3">
                            {footerLinks.team.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-white/70 hover:text-accent-text transition-colors font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* iGEM Attribution */}
            <div className="relative z-10">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-2 text-white/60 text-sm">
                            <span>© {currentYear} TRE-Pod Team. Built for</span>
                            <a
                                href="https://igem.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-1 text-primary hover:text-primary-light transition-colors font-semibold"
                            >
                                <span>iGEM 2026</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                        <div className="flex items-center gap-4 text-white/60 text-sm">
                            <Link to="/safety" className="hover:text-primary transition-colors font-medium">
                                Safety
                            </Link>
                            <span className="w-1 h-4 bg-white/20" />
                            <Link to="/attributions" className="hover:text-[#BFFF00] transition-colors font-medium">
                                Attributions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
