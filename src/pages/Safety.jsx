import { motion } from 'framer-motion'
import {
    Shield,
    FlaskConical,
    AlertTriangle,
    CheckCircle2,
    Users,
    Trash2,
    BookOpen,
    FileText
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const Safety = () => {
    const breadcrumb = [
        { label: 'Home', link: '/' },
        { label: 'Science', link: '#' },
        { label: 'Safety' }
    ]

    const safetyMeasures = [
        {
            icon: FlaskConical,
            title: 'Host Organism',
            items: [
                'Escherichia coli K-12 MG1655 laboratory strain',
                'Biosafety Level 1 (BSL-1) classification',
                'Non-pathogenic, well-characterized strain',
                'Extensive safety record in synthetic biology',
                'Disabled for survival outside laboratory'
            ]
        },
        {
            icon: Users,
            title: 'Training & Personnel',
            items: [
                'All team members completed institutional biosafety training',
                'Training in aseptic technique and sterile handling',
                'Emergency response procedures certification',
                'Regular safety meetings and protocol reviews',
                'Supervised access to laboratory facilities'
            ]
        },
        {
            icon: Shield,
            title: 'Physical Containment',
            items: [
                'Work performed in certified BSL-1 facilities',
                'Proper personal protective equipment (PPE)',
                'Dedicated workspace with controlled access',
                'Biosafety cabinet for aerosol-generating procedures',
                'No food or drink in laboratory spaces'
            ]
        },
        {
            icon: Trash2,
            title: 'Waste Disposal',
            items: [
                'Autoclave sterilization of all biological waste',
                'Chemical disinfection of work surfaces (70% ethanol)',
                'Proper sharps disposal in designated containers',
                'Documented waste disposal protocols',
                'Regular autoclave validation testing'
            ]
        }
    ]

    const riskAssessment = [
        {
            risk: 'Unintended release',
            level: 'Low',
            mitigation: 'E. coli K-12 cannot survive outside lab; all waste autoclaved'
        },
        {
            risk: 'Horizontal gene transfer',
            level: 'Low',
            mitigation: 'Engineered sequences provide no selective advantage; non-conjugative plasmids'
        },
        {
            risk: 'Personnel exposure',
            level: 'Low',
            mitigation: 'Standard PPE; K-12 is non-pathogenic; training protocols in place'
        },
        {
            risk: 'Dual-use concern',
            level: 'Minimal',
            mitigation: 'Dormancy mechanism has no weaponization potential; transparent research'
        }
    ]

    const ethicalConsiderations = [
        {
            title: 'Responsible Innovation',
            description: 'We engage with biosafety experts, ethicists, and the public to ensure our research addresses societal needs while minimizing risks.'
        },
        {
            title: 'Environmental Considerations',
            description: 'TRE-Pod aims to reduce energy-intensive cryogenic preservation, contributing to more sustainable biotechnology practices.'
        },
        {
            title: 'Accessibility Goals',
            description: 'By eliminating cold-chain requirements, we aim to make cell preservation accessible to resource-limited settings globally.'
        },
        {
            title: 'Open Science',
            description: 'All protocols, sequences, and data will be shared openly through the iGEM Registry and public repositories.'
        }
    ]

    return (
        <>
            <PageHeader
                title="Safety"
                subtitle="Responsible research practices and biosafety protocols"
                breadcrumb={breadcrumb}
            />

            {/* Overview */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            tag="Commitment"
                            title="Safety First"
                            description="TRE-Pod is committed to conducting research responsibly, following all institutional, national, and international biosafety guidelines."
                            centered={false}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card border-l-4 border-vibrant-green mb-8"
                        >
                            <p className="text-lg text-charcoal leading-relaxed">
                                All TRE-Pod research is conducted under <strong className="text-deep-blue">Biosafety Level 1 (BSL-1)</strong> conditions
                                using the well-characterized, non-pathogenic <strong className="text-deep-blue">Escherichia coli K-12 MG1655</strong> strain.
                                Our team has completed comprehensive biosafety training and follows strict protocols for handling, containment, and disposal.
                            </p>
                        </motion.div>

                        {/* Key Safety Points */}
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { label: 'Biosafety Level', value: 'BSL-1', icon: Shield },
                                { label: 'Host Organism', value: 'E. coli K-12', icon: FlaskConical },
                                { label: 'Risk Category', value: 'Minimal', icon: AlertTriangle }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card text-center"
                                >
                                    <item.icon className="w-8 h-8 text-deep-blue mx-auto mb-2" />
                                    <p className="text-sm text-charcoal-light">{item.label}</p>
                                    <p className="text-xl font-heading font-bold text-charcoal">{item.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety Measures */}
            <section className="py-16 bg-light-gray">
                <div className="container-custom">
                    <SectionHeader
                        tag="Protocols"
                        title="Safety Measures"
                        description="Comprehensive protocols ensure safe handling at every stage of research."
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                        {safetyMeasures.map((measure, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-deep-blue/10 rounded-xl flex items-center justify-center mr-4">
                                        <measure.icon className="w-6 h-6 text-deep-blue" />
                                    </div>
                                    <h3 className="text-xl font-heading font-semibold text-charcoal">
                                        {measure.title}
                                    </h3>
                                </div>
                                <ul className="space-y-2">
                                    {measure.items.map((item, i) => (
                                        <li key={i} className="flex items-start text-charcoal-light">
                                            <CheckCircle2 className="w-4 h-4 text-vibrant-green mr-2 mt-1 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Risk Assessment */}
            <section className="py-16">
                <div className="container-custom">
                    <SectionHeader
                        tag="Assessment"
                        title="Risk Analysis"
                        description="Systematic evaluation of potential risks and mitigation strategies."
                    />

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-4">
                            {riskAssessment.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card flex flex-col md:flex-row md:items-center gap-4"
                                >
                                    <div className="md:w-1/4">
                                        <span className="font-heading font-semibold text-charcoal">{item.risk}</span>
                                    </div>
                                    <div className="md:w-1/6">
                                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${item.level === 'Minimal'
                                                ? 'bg-vibrant-green/10 text-vibrant-green'
                                                : 'bg-warm-orange/10 text-warm-orange'
                                            }`}>
                                            {item.level} Risk
                                        </span>
                                    </div>
                                    <div className="md:flex-grow">
                                        <p className="text-charcoal-light text-sm">{item.mitigation}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Ethical Considerations */}
            <section className="py-16 bg-light-gray">
                <div className="container-custom">
                    <SectionHeader
                        tag="Ethics"
                        title="Ethical Considerations"
                        description="Beyond biosafety, we consider broader societal implications of our research."
                    />

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {ethicalConsiderations.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card border-l-4 border-stasis-violet"
                            >
                                <h4 className="font-heading font-semibold text-charcoal mb-2">{item.title}</h4>
                                <p className="text-charcoal-light text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documentation */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            tag="Documentation"
                            title="Safety Documentation"
                            description="All safety protocols and training records are maintained and available for review."
                            centered={false}
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: FileText, title: 'Biosafety Protocols', desc: 'Detailed SOPs for all laboratory procedures' },
                                { icon: BookOpen, title: 'Training Records', desc: 'Documented training completion for all team members' },
                                { icon: Shield, title: 'IBC Approval', desc: 'Institutional Biosafety Committee review and approval' },
                                { icon: AlertTriangle, title: 'Emergency Procedures', desc: 'Documented response protocols for incidents' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card flex items-start"
                                >
                                    <item.icon className="w-6 h-6 text-deep-blue mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-charcoal mb-1">{item.title}</h4>
                                        <p className="text-sm text-charcoal-light">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Safety
