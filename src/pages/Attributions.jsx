import { motion } from 'framer-motion'
import {
    Award,
    Users,
    Building,
    BookOpen,
    Heart
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const Attributions = () => {
    const breadcrumb = [
        { label: 'Home', link: '/' },
        { label: 'Team', link: '#' },
        { label: 'Attributions' }
    ]

    const attributions = [
        {
            category: 'Project Leadership',
            icon: Users,
            items: [
                {
                    name: 'Aritra Das Kanungo',
                    role: 'Project Lead',
                    contribution: 'Overall project conception, design, and coordination'
                }
            ]
        },
        {
            category: 'Advisors & Mentors',
            icon: Award,
            items: [
                {
                    name: 'Faculty Advisor',
                    role: 'Principal Investigator',
                    contribution: 'Scientific guidance and laboratory oversight'
                },
                {
                    name: 'Technical Advisor',
                    role: 'Computational Expert',
                    contribution: 'Modeling and software development guidance'
                }
            ]
        },
        {
            category: 'Institutional Support',
            icon: Building,
            items: [
                {
                    name: 'Vellore Institute of Technology, Vellore',
                    role: 'Host Institution',
                    contribution: 'Laboratory facilities, equipment, and administrative support'
                }
            ]
        },
        {
            category: 'Resources & References',
            icon: BookOpen,
            items: [
                {
                    name: 'iGEM Foundation',
                    role: 'Competition Organization',
                    contribution: 'Competition framework and community support'
                },
                {
                    name: 'Literature Authors',
                    role: 'Scientific Foundation',
                    contribution: 'Worpenberg et al., Wu et al., Bollen et al., and others whose research enabled TRE-Pod'
                }
            ]
        }
    ]

    return (
        <>
            <PageHeader
                title="Attributions"
                subtitle="Acknowledging everyone who contributed to TRE-Pod"
                breadcrumb={breadcrumb}
            />

            <section className="py-16">
                <div className="container-custom">
                    <SectionHeader
                        tag="Credits"
                        title="Project Attributions"
                        description="TRE-Pod would not be possible without the support and contributions of many individuals and organizations."
                    />

                    <div className="max-w-4xl mx-auto space-y-8">
                        {attributions.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="card"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                                        <section.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-heading font-semibold text-secondary">
                                        {section.category}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {section.items.map((item, i) => (
                                        <div key={i} className="pl-4 border-l-2 border-accent-text">
                                            <h4 className="font-semibold text-secondary">{item.name}</h4>
                                            <p className="text-primary text-sm font-medium">{item.role}</p>
                                            <p className="text-secondary-light text-sm">{item.contribution}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Thank You */}
            <section className="py-16 bg-primary">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Heart className="w-12 h-12 text-accent-text mx-auto mb-4" />
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">
                            Thank You
                        </h2>
                        <p className="text-white/80 max-w-2xl mx-auto">
                            We extend our heartfelt gratitude to everyone who has supported the TRE-Pod project.
                            Your contributions, whether through direct involvement, guidance, or encouragement,
                            have been invaluable to our work.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Attributions
