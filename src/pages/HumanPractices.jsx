import { motion } from 'framer-motion'
import {
    Users,
    MessageSquare,
    Globe,
    Leaf,
    GraduationCap,
    Building,
    ArrowRight
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const HumanPractices = () => {
    const breadcrumb = [
        { label: 'Home', link: '/' },
        { label: 'Team', link: '#' },
        { label: 'Human Practices' }
    ]

    const practices = [
        {
            icon: Users,
            title: 'Stakeholder Engagement',
            description: 'Engaging with biotech industry professionals, researchers, and end-users to understand preservation challenges.',
            activities: [
                'Interviews with biotech companies',
                'Surveys on preservation needs',
                'Expert consultations'
            ]
        },
        {
            icon: GraduationCap,
            title: 'Education & Outreach',
            description: 'Sharing synthetic biology knowledge with the public and inspiring the next generation of scientists.',
            activities: [
                'School workshops on synthetic biology',
                'Social media science communication',
                'Public lectures and demonstrations'
            ]
        },
        {
            icon: Leaf,
            title: 'Sustainability Assessment',
            description: 'Evaluating the environmental impact and sustainability benefits of TRE-Pod technology.',
            activities: [
                'Life cycle analysis',
                'Cold-chain energy comparison',
                'SDG alignment assessment'
            ]
        },
        {
            icon: Building,
            title: 'Policy & Ethics',
            description: 'Engaging with policymakers and ethicists to ensure responsible development.',
            activities: [
                'Biosafety policy review',
                'Ethical considerations workshop',
                'Regulatory pathway analysis'
            ]
        }
    ]

    return (
        <>
            <PageHeader
                title="Human Practices"
                subtitle="Engaging with society to ensure responsible innovation"
                breadcrumb={breadcrumb}
            />

            <section className="py-16">
                <div className="container-custom">
                    <SectionHeader
                        tag="Integrated"
                        title="Integrated Human Practices"
                        description="How we engage with stakeholders and society to shape our project responsibly."
                    />

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {practices.map((practice, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                    <practice.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-heading font-semibold text-secondary mb-2">
                                    {practice.title}
                                </h3>
                                <p className="text-secondary-light mb-4">{practice.description}</p>
                                <ul className="space-y-2">
                                    {practice.activities.map((activity, i) => (
                                        <li key={i} className="flex items-center text-sm text-secondary-light">
                                            <ArrowRight className="w-4 h-4 mr-2 text-accent-text" />
                                            {activity}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact */}
            <section className="py-16 bg-accent">
                <div className="container-custom">
                    <SectionHeader
                        tag="Impact"
                        title="Addressing Global Challenges"
                        description="TRE-Pod aligns with UN Sustainable Development Goals."
                    />

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { sdg: '3', title: 'Good Health', desc: 'Accessible cell therapy preservation' },
                            { sdg: '6', title: 'Clean Water', desc: 'Deployable bioremediation strains' },
                            { sdg: '9', title: 'Industry & Innovation', desc: 'Platform technology for global biotech' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card text-center"
                            >
                                <div className="w-16 h-16 bg-accent-text rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-heading font-bold text-xl">{item.sdg}</span>
                                </div>
                                <h4 className="font-heading font-semibold text-secondary mb-1">SDG {item.sdg}</h4>
                                <p className="text-primary font-medium mb-2">{item.title}</p>
                                <p className="text-sm text-secondary-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HumanPractices
