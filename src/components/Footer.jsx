import { Link } from 'react-router-dom'
import { Github, Twitter, Mail, ExternalLink } from 'lucide-react'

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
        <footer className="bg-secondary text-white">
            {/* Main Footer */}
            <div className="container-custom py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <img
                                src="/logo.png"
                                alt="TRE-Pod Logo"
                                className="w-10 h-10 object-contain"
                            />
                            <span className="font-heading font-bold text-xl">TRE-Pod</span>
                        </Link>
                        <p className="text-secondary-text mb-6 max-w-sm">
                            Translational Rhythm Engineering for Programmed Dormancy.
                            Engineering reversible cellular dormancy through codon-specific
                            ribosomal stalling.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-secondary-light rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-secondary-light rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:team@tre-pod.org"
                                className="w-10 h-10 bg-secondary-light rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Project Links */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-4">Project</h4>
                        <ul className="space-y-3">
                            {footerLinks.project.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-secondary-text hover:text-accent-text transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Science Links */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-4">Science</h4>
                        <ul className="space-y-3">
                            {footerLinks.science.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-secondary-text hover:text-accent-text transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Team Links */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-4">Team</h4>
                        <ul className="space-y-3">
                            {footerLinks.team.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-secondary-text hover:text-accent-text transition-colors"
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
            <div className="border-t border-secondary-light">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-2 text-secondary-text text-sm">
                            <span>© {currentYear} TRE-Pod Team. Built for</span>
                            <a
                                href="https://igem.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-1 text-accent-text hover:text-accent transition-colors"
                            >
                                <span>iGEM 2026</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                        <div className="text-secondary-text text-sm">
                            <Link to="/safety" className="hover:text-white transition-colors">
                                Safety
                            </Link>
                            <span className="mx-2">•</span>
                            <Link to="/attributions" className="hover:text-white transition-colors">
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
