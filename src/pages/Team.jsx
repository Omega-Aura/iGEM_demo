import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    User,
    Mail,
    Linkedin,
    Github,
    GraduationCap,
    Award
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const Team = () => {
    const breadcrumb = [
        { label: 'Home', link: '/' },
        { label: 'Team', link: '#' },
        { label: 'Members' }
    ]

    const teamMembers = [
        {
            name: 'Aritra Das Kanungo',
            role: 'TBD',
            image: null, // Placeholder
            bio: 'Leading the TRE-Pod project with expertise in synthetic biology and translational control mechanisms. Responsible for overall project direction, experimental design, and integration of computational and wet lab approaches.',
            expertise: ['Synthetic Biology', 'Translational Control', 'Project Management'],
            social: {
                email: 'aritra@example.com',
                linkedin: '#',
                github: '#'
            }
        }
    ]

    const advisors = [
        {
            name: 'Faculty Advisor',
            role: 'Principal Investigator',
            affiliation: 'Department of Biological Sciences',
            contribution: 'Provides scientific guidance, laboratory access, and mentorship for the project. Expertise in microbial physiology and metabolic engineering.',
            image: null
        },
        {
            name: 'Technical Advisor',
            role: 'Computational Biology Expert',
            affiliation: 'Department of Bioinformatics',
            contribution: 'Guides computational modeling approaches, machine learning implementation, and software development aspects of the project.',
            image: null
        }
    ]

    const roles = [
        { role: 'Wet Lab', count: 'TBD', color: 'primary' },
        { role: 'Dry Lab', count: 'TBD', color: 'accent-text' },
        { role: 'Human Practices', count: 'TBD', color: 'secondary' },
        { role: 'Wiki/Design', count: 'TBD', color: 'primary-light' }
    ]

    return (
        <>
            <PageHeader
                title="Our Team"
                subtitle="Meet the people behind TRE-Pod"
                breadcrumb={breadcrumb}
            />

            {/* Team Overview */}
            <section className="py-16">
                <div className="container-custom">
                    <SectionHeader
                        tag="About Us"
                        title="The TRE-Pod Team"
                        description="A passionate team combining expertise in synthetic biology, computational modeling, and biotechnology to engineer reversible cellular dormancy."
                    />

                    {/* Role Distribution */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto">
                        {roles.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card text-center"
                            >
                                <div className={`text-2xl font-heading font-bold text-${item.color} mb-1`}>
                                    {item.count}
                                </div>
                                <div className="text-sm text-secondary-light">{item.role}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-16 bg-accent">
                <div className="container-custom">
                    <SectionHeader
                        tag="Members"
                        title="Team Members"
                    />

                    <div className="max-w-4xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="card mb-6"
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Photo */}
                                    <div className="md:w-48 flex-shrink-0">
                                        <div className="w-48 h-48 mx-auto md:mx-0 bg-primary border-3 border-secondary rounded-2xl flex items-center justify-center">
                                            {member.image ? (
                                                <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-2xl" />
                                            ) : (
                                                <User className="w-20 h-20 text-white/50" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-heading font-bold text-secondary mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-primary font-semibold mb-3">{member.role}</p>
                                        <p className="text-secondary-light mb-4 leading-relaxed">{member.bio}</p>

                                        {/* Expertise Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {member.expertise.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Social Links */}
                                        <div className="flex space-x-3">
                                            {member.social.email && (
                                                <a href={`mailto:${member.social.email}`} className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                                    <Mail className="w-5 h-5" />
                                                </a>
                                            )}
                                            {member.social.linkedin && (
                                                <a href={member.social.linkedin} className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                                    <Linkedin className="w-5 h-5" />
                                                </a>
                                            )}
                                            {member.social.github && (
                                                <a href={member.social.github} className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Placeholder for additional team members */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card border-2 border-dashed border-accent-dark text-center py-12"
                        >
                            <User className="w-16 h-16 text-accent-dark mx-auto mb-4" />
                            <h4 className="text-xl font-heading font-semibold text-secondary-light mb-2">
                                Team Expanding
                            </h4>
                            <p className="text-secondary-light max-w-md mx-auto">
                                Additional team members will be added as the project grows.
                                Check back for updates on our growing team.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Advisors */}
            <section className="py-16">
                <div className="container-custom">
                    <SectionHeader
                        tag="Mentors"
                        title="Advisors"
                        description="Expert guidance supporting our research and development."
                    />

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {advisors.map((advisor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 bg-primary border-3 border-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                        <GraduationCap className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-semibold text-secondary">{advisor.name}</h4>
                                        <p className="text-primary text-sm font-medium">{advisor.role}</p>
                                        <p className="text-secondary-light text-xs mb-2">{advisor.affiliation}</p>
                                        <p className="text-secondary-light text-sm">{advisor.contribution}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Acknowledgments */}
            <section className="py-16 bg-primary">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Award className="w-12 h-12 text-accent-text mx-auto mb-4" />
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">
                            Acknowledgments
                        </h2>
                        <p className="text-white/80 max-w-2xl mx-auto mb-8">
                            We extend our gratitude to our university, sponsors, and the iGEM community
                            for their support in making this project possible.
                        </p>
                        <Link to="/attributions" className="btn-primary">
                            View Full Attributions
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Team
