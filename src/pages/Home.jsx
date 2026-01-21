import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    Beaker,
    Cpu,
    Zap,
    Clock,
    ThermometerSnowflake,
    TrendingDown,
    Leaf,
    FlaskConical,
    Code2,
    Users,
    ArrowRight,
    CheckCircle2
} from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import StatsCard from '../components/StatsCard'
import FeatureCard from '../components/FeatureCard'
import DataTable from '../components/DataTable'

const Home = () => {
    const stats = [
        {
            icon: TrendingDown,
            value: '60-80%',
            label: 'ATP Reduction',
            description: 'Controlled metabolic slowdown'
        },
        {
            icon: Clock,
            value: '30-120 min',
            label: 'Recovery Time',
            description: 'Rapid and engineered exit'
        },
        {
            icon: ThermometerSnowflake,
            value: '>70%',
            label: 'Viability @ RT',
            description: 'After 28 days room temperature'
        },
        {
            icon: Zap,
            value: '3-10×',
            label: 'Translation Control',
            description: 'Codon-specific stalling precision'
        }
    ]

    const features = [
        {
            icon: FlaskConical,
            title: 'Codon-Specific Stalling',
            description: 'Engineer rare valine codons (GTN) at strategic positions in metabolic genes to induce precise ribosomal stalling and control translation rates.',
            link: '/description'
        },
        {
            icon: Cpu,
            title: 'Computational Modeling',
            description: 'Three-scale modeling framework integrating dynamic FBA, agent-based ribosome simulation, and ODE oscillator models for predictive design.',
            link: '/modeling'
        },
        {
            icon: Code2,
            title: 'CodonSync Designer',
            description: 'ML-powered tool (R² > 0.85) for automated codon pattern optimization. Input desired dormancy profile, receive optimized sequences.',
            link: '/software'
        },
        {
            icon: Beaker,
            title: 'Wet Lab Validation',
            description: 'Comprehensive experimental pipeline: Ribo-Seq, proteomics, ATP quantification, and 28-day viability assays in E. coli K-12.',
            link: '/experiments'
        }
    ]

    const comparisonData = {
        headers: ['Method', 'Viability', 'Cost', 'Infrastructure', 'Recovery'],
        rows: [
            ['-80°C Freezer', '30-70%', '$5-10/vial/yr', 'Continuous monitoring', 'Slow thaw'],
            ['-196°C Liquid N₂', '85-97%', '$3-8/vial/yr', 'Cryogenic vessel', 'Trained personnel'],
            ['Lyophilization', '40-80%', '$20-50/sample', 'Freeze-dryer', 'Slow rehydration'],
            ['Room Temp (current)', '<5%', 'Minimal', 'None', 'N/A'],
            ['TRE-Pod (target)', '>70%', 'Minimal', 'None', '30-120 min'],
        ]
    }

    const innovations = [
        'First integration of codon-specific stalling with dormancy engineering',
        'Built on 2024-2025 breakthroughs (Worpenberg et al., Wu et al.)',
        'Distinct from RiboRate: creates temporal metabolic rhythms, not just speed control',
        'Platform approach applicable to microbes, yeast, and potentially mammalian cells',
        'Eliminates cold-chain dependency for sustainable biotech'
    ]

    return (
        <>
            {/* Hero Section */}
            <Hero
                title={
                    <>
                        Translational Rhythm Engineering<br />
                        for <span className="text-vibrant-green">Programmed Dormancy</span>
                    </>
                }
                description="Engineering reversible cellular dormancy through codon-specific ribosomal stalling. A synthetic biology approach to preserve living cells without cryogenic infrastructure."
                primaryAction={{ label: 'Explore the Science', href: '/description' }}
                secondaryAction={{ label: 'View Results', href: '/results' }}
            />

            {/* Problem Statement */}
            <section className="py-20 bg-light-gray">
                <div className="container-custom">
                    <SectionHeader
                        tag="The Challenge"
                        title="The Dormancy Problem in Biotechnology"
                        description="Current preservation methods are expensive, energy-intensive, and reduce cellular viability by 30-70%. There is no engineered approach to induce controllable, reversible dormancy without physical preservation."
                    />

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="card border-l-4 border-warm-orange">
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    Infrastructure Costs
                                </h3>
                                <p className="text-charcoal-light">
                                    Cryogenic infrastructure costs <span className="font-semibold text-warm-orange">$50,000-500,000</span> per
                                    facility, requiring continuous power and liquid nitrogen supply.
                                </p>
                            </div>

                            <div className="card border-l-4 border-warm-orange">
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    Accessibility Gap
                                </h3>
                                <p className="text-charcoal-light">
                                    Cold-chain preservation is unavailable in low-resource settings, rural areas,
                                    and developing nations—limiting global biotech deployment.
                                </p>
                            </div>

                            <div className="card border-l-4 border-warm-orange">
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    Cell Damage
                                </h3>
                                <p className="text-charcoal-light">
                                    Cryoinjury causes <span className="font-semibold text-warm-orange">30-70% viability loss</span> through
                                    ROS damage, apoptosis, and ice-crystal formation.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <DataTable
                                headers={comparisonData.headers}
                                rows={comparisonData.rows}
                                highlightColumn={4}
                                variant="striped"
                            />
                            <p className="text-sm text-charcoal-light mt-4 text-center">
                                Comparison of preservation methods vs. TRE-Pod targets
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Solution Overview */}
            <section className="py-20">
                <div className="container-custom">
                    <SectionHeader
                        tag="Our Solution"
                        title="TRE-Pod: Engineered Cellular Pause"
                        description="Exploiting recent discoveries in codon-specific ribosomal stalling to engineer reversible dormancy through translational control."
                    />

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {stats.map((stat, index) => (
                            <StatsCard key={index} {...stat} delay={index * 0.1} />
                        ))}
                    </div>

                    {/* Mechanism Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-deep-blue to-deep-blue-dark rounded-2xl p-8 md:p-12 text-white mb-16"
                    >
                        <h3 className="text-2xl font-heading font-bold mb-6">How It Works</h3>
                        <div className="grid md:grid-cols-5 gap-4">
                            {[
                                { step: '01', title: 'Engineer', desc: 'Insert rare codons in metabolic genes (gapA, pfkA)' },
                                { step: '02', title: 'Deplete', desc: 'Control tRNA availability to induce stalling' },
                                { step: '03', title: 'Stall', desc: 'Ribosomes pause at rare valine codons (GTN)' },
                                { step: '04', title: 'Dormancy', desc: 'ATP drops 60-80%, growth arrests' },
                                { step: '05', title: 'Recover', desc: 'Restore tRNA levels, cells resume in 30-120 min' },
                            ].map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-12 h-12 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center">
                                        <span className="text-vibrant-green font-bold">{item.step}</span>
                                    </div>
                                    <h4 className="font-semibold mb-1">{item.title}</h4>
                                    <p className="text-sm text-white/70">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Innovation List */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-heading font-semibold text-charcoal mb-6">
                                Why TRE-Pod is Novel
                            </h3>
                            <ul className="space-y-4">
                                {innovations.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-vibrant-green mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-charcoal-light">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {features.slice(0, 2).map((feature, index) => (
                                <FeatureCard key={index} {...feature} delay={index * 0.1} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-light-gray">
                <div className="container-custom">
                    <SectionHeader
                        tag="Explore"
                        title="Project Components"
                        description="From computational design to wet lab validation, TRE-Pod integrates multiple approaches for robust dormancy engineering."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionHeader
                                tag="Impact"
                                title="Sustainable Biotech for All"
                                description="TRE-Pod addresses UN Sustainable Development Goals by enabling biotechnology in resource-limited settings."
                                centered={false}
                            />

                            <div className="space-y-4">
                                {[
                                    { icon: Leaf, title: 'SDG 3: Good Health', desc: 'Accessible cell therapy preservation' },
                                    { icon: Beaker, title: 'SDG 6: Clean Water', desc: 'Deployable bioremediation strains' },
                                    { icon: Cpu, title: 'SDG 9: Industry & Innovation', desc: 'Platform technology for global biotech' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start space-x-4"
                                    >
                                        <div className="w-10 h-10 bg-vibrant-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-vibrant-green" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-charcoal">{item.title}</h4>
                                            <p className="text-charcoal-light text-sm">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-vibrant-green to-vibrant-green-dark rounded-2xl p-8 text-white"
                        >
                            <h3 className="text-3xl font-heading font-bold mb-2">$100B+</h3>
                            <p className="text-white/80 mb-6">Global biobanking and cell therapy market annually</p>

                            <div className="space-y-4">
                                <div className="bg-white/10 rounded-lg p-4">
                                    <div className="text-2xl font-bold">Scalable</div>
                                    <p className="text-white/70 text-sm">Platform technology applicable to microbes, cell lines, and biopharmaceuticals</p>
                                </div>
                                <div className="bg-white/10 rounded-lg p-4">
                                    <div className="text-2xl font-bold">Sustainable</div>
                                    <p className="text-white/70 text-sm">Eliminates cold-chain dependency and energy-intensive preservation</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-deep-blue">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Ready to Explore the Science?
                        </h2>
                        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                            Dive into our comprehensive project documentation, from mechanism design
                            to computational modeling and experimental validation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/description" className="btn-primary">
                                Project Description
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                            <Link to="/team" className="btn-outline border-white text-white hover:bg-white hover:text-deep-blue">
                                Meet the Team
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Home
