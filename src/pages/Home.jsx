import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
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
    ArrowRight,
    CheckCircle2,
    Sparkles
} from 'lucide-react'
import ParallaxHeader from '../components/ParallaxHeader'
import SectionHeader from '../components/SectionHeader'
import StatsCard from '../components/StatsCard'
import FeatureCard from '../components/FeatureCard'
import DataTable from '../components/DataTable'
import BangerBox from '../components/BangerBox'
import FloatingShapes from '../components/FloatingShapes'

// Custom shape configurations for Home page sections
const solutionShapes = [
    { position: 'top-32 left-20', size: 'w-8 h-8', color: 'bg-primary', duration: 6, yRange: [-15, 0] },
    { position: 'bottom-40 right-24', size: 'w-10 h-10', color: 'bg-festival-lime', duration: 5, yRange: [10, 0] },
]

const impactShapes = [
    { position: 'top-20 right-20', size: 'w-12 h-12', color: 'bg-accent-text', duration: 7, yRange: [-20, 0] },
    { position: 'bottom-32 left-16', size: 'w-8 h-8', color: 'bg-primary', duration: 6, yRange: [15, 0] },
]

const ctaShapes = [
    { position: 'top-10 left-20', size: 'w-6 h-6', color: 'bg-primary', duration: 5, yRange: [-15, 0], borderClass: 'border-2 border-white/30' },
    { position: 'top-20 right-32', size: 'w-8 h-8', color: 'bg-festival-lime', duration: 6, yRange: [10, 0], borderClass: 'border-2 border-white/30' },
    { position: 'bottom-16 left-1/3', size: 'w-10 h-10', color: 'bg-accent-text', duration: 7, yRange: [-20, 0], borderClass: 'border-2 border-white/30' },
]

const Home = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
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
        <div ref={containerRef} className="relative">
            {/* Parallax Hero Section with Video */}
            <ParallaxHeader>
                <motion.div
                    className="container-custom text-center px-6"
                    style={{ y: y1, opacity }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-['Bangers'] tracking-wide text-white mb-6">
                            Translational Rhythm Engineering<br />
                            for <span className="text-primary">Programmed Dormancy</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 font-['Comic_Neue']">
                            Engineering reversible cellular dormancy through codon-specific ribosomal stalling.
                            A synthetic biology approach to preserve living cells without cryogenic infrastructure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/description"
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                Explore the Science
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/results"
                                className="btn-accent inline-flex items-center gap-2"
                            >
                                View Results
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </ParallaxHeader>

            {/* Problem Statement Section - Primary (cyan) grid */}
            <section className="py-20 bg-white relative overflow-hidden border-b-3 border-secondary">
                <div className="absolute inset-0 grid-pattern-primary" />

                <div className="container-custom relative z-10">
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
                            transition={{ duration: 0.6 }}
                            className="space-y-8 w-full min-w-0"
                        >
                            <BangerBox badgeText="EXPENSIVE!" className="bg-white">
                                <h3 className="text-2xl font-['Bangers'] tracking-wide text-black mb-3 flex items-center gap-2">
                                    <span className="w-3 h-8 bg-black" />
                                    Infrastructure Costs
                                </h3>
                                <p className="text-black font-medium text-lg">
                                    Cryogenic infrastructure costs <span className="font-bold bg-yellow-300 px-1 border-2 border-black transform -rotate-1 inline-block">$50,000-500,000</span> per
                                    facility, requiring continuous power and liquid nitrogen supply.
                                </p>
                            </BangerBox>

                            <BangerBox badgeText="UNAVAILABLE!" delay={0.2} className="ml-4 md:ml-8 bg-white">
                                <h3 className="text-2xl font-['Bangers'] tracking-wide text-black mb-3 flex items-center gap-2">
                                    <span className="w-3 h-8 bg-black" />
                                    Accessibility Gap
                                </h3>
                                <p className="text-black font-medium text-lg">
                                    Cold-chain preservation is unavailable in low-resource settings, rural areas,
                                    and developing nations—limiting global biotech deployment.
                                </p>
                            </BangerBox>

                            <BangerBox badgeText="DAMAGING!" delay={0.4} className="bg-white">
                                <h3 className="text-2xl font-['Bangers'] tracking-wide text-black mb-3 flex items-center gap-2">
                                    <span className="w-3 h-8 bg-black" />
                                    Cell Damage
                                </h3>
                                <p className="text-black font-medium text-lg">
                                    Cryoinjury causes <span className="font-bold bg-red-400 text-white px-1 border-2 border-black transform rotate-1 inline-block">30-70% viability loss</span> through
                                    ROS damage, apoptosis, and ice-crystal formation.
                                </p>
                            </BangerBox>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-full min-w-0"
                        >
                            <DataTable
                                headers={comparisonData.headers}
                                rows={comparisonData.rows}
                                highlightColumn={4}
                                variant="striped"
                            />
                            <p className="text-sm text-secondary/50 mt-4 text-center font-semibold">
                                Comparison of preservation methods vs. TRE-Pod targets
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Solution Overview Section - Lime grid */}
            <section className="py-20 bg-accent relative overflow-hidden border-b-3 border-secondary">
                <div className="absolute inset-0 grid-pattern-lime" />

                {/* Floating geometric shapes */}
                <FloatingShapes shapes={solutionShapes} />

                <div className="container-custom relative z-10">
                    <SectionHeader
                        tag="Our Solution"
                        title="TRE-Pod: Engineered Cellular Pause"
                        description="Exploiting recent discoveries in codon-specific ribosomal stalling to engineer reversible dormancy through translational control."
                    />

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {stats.map((stat, index) => (
                            <StatsCard key={index} {...stat} delay={index * 0.1} />
                        ))}
                    </div>

                    {/* Mechanism Overview - Dark themed block with dark grid */}
                    <BangerBox
                        className="bg-secondary text-white mb-16 relative"
                    >
                        <div
                            className="absolute inset-0 grid-pattern-dark opacity-100 overflow-hidden"
                            style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
                        />
                        <div className="relative z-10 p-2 md:p-6">
                            <h3 className="text-2xl font-['Bangers'] tracking-wide font-bold mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 bg-primary border-[3px] border-black flex items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-secondary" />
                                </div>
                                How It Works
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                {[
                                    { step: '01', title: 'Engineer', desc: 'Insert rare codons in metabolic genes (gapA, pfkA)' },
                                    { step: '02', title: 'Deplete', desc: 'Control tRNA availability to induce stalling' },
                                    { step: '03', title: 'Stall', desc: 'Ribosomes pause at rare valine codons (GTN)' },
                                    { step: '04', title: 'Dormancy', desc: 'ATP drops 60-80%, growth arrests' },
                                    { step: '05', title: 'Recover', desc: 'Restore tRNA levels, cells resume in 30-120 min' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="w-14 h-14 mx-auto mb-3 bg-primary border-[3px] border-black flex items-center justify-center">
                                            <span className="text-secondary font-['Bangers'] text-xl tracking-wide font-bold">{item.step}</span>
                                        </div>
                                        <h4 className="font-['Bangers'] tracking-wide font-bold mb-1">{item.title}</h4>
                                        <p className="text-sm text-white/60 font-medium">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </BangerBox>

                    {/* Innovation List */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-['Bangers'] tracking-wide text-secondary mb-6">
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
                                        <div className="w-6 h-6 bg-primary border-2 border-secondary flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                                            <CheckCircle2 className="w-4 h-4 text-secondary" />
                                        </div>
                                        <span className="text-secondary/70 font-['Comic_Neue'] font-bold">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.slice(0, 2).map((feature, index) => (
                                <FeatureCard key={index} {...feature} delay={index * 0.1} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid - Accent (purple) grid */}
            <section className="py-20 bg-white relative overflow-hidden border-b-3 border-secondary">
                <div className="absolute inset-0 grid-pattern-accent" />

                <div className="container-custom relative z-10">
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

            {/* Impact Section - Primary grid on cream background */}
            <section className="py-20 bg-accent relative overflow-hidden border-b-3 border-secondary">
                <div className="absolute inset-0 grid-pattern-primary" />

                {/* Floating shapes */}
                <FloatingShapes shapes={impactShapes} />

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionHeader
                                tag="Impact"
                                title="Sustainable Biotech for All"
                                description="TRE-Pod addresses UN Sustainable Development Goals by enabling biotechnology in resource-limited settings."
                                centered={false}
                            />

                            <div className="space-y-6">
                                {[
                                    { icon: Leaf, title: 'SDG 3: Good Health', desc: 'Accessible cell therapy preservation', color: 'bg-primary' },
                                    { icon: Beaker, title: 'SDG 6: Clean Water', desc: 'Deployable bioremediation strains', color: 'bg-festival-lime' },
                                    { icon: Cpu, title: 'SDG 9: Industry & Innovation', desc: 'Platform technology for global biotech', color: 'bg-accent-text' },
                                ].map((item, index) => (
                                    <BangerBox
                                        key={index}
                                        delay={index * 0.1}
                                        className="flex items-start space-x-4 bg-white hover:bg-pastel-mint/30 transition-all duration-200"
                                    >
                                        <div className={`w-12 h-12 ${item.color} border-[3px] border-black flex items-center justify-center flex-shrink-0`}>
                                            <item.icon className="w-6 h-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="font-['Bangers'] text-xl tracking-wide text-secondary">{item.title}</h4>
                                            <p className="text-secondary/60 text-sm font-medium">{item.desc}</p>
                                        </div>
                                    </BangerBox>
                                ))}
                            </div>
                        </div>

                        <BangerBox
                            className="bg-primary text-secondary relative"
                            badgeText="$100B+"
                        >
                            <div
                                className="absolute inset-0 grid-pattern-light opacity-30 overflow-hidden"
                                style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
                            />
                            <div className="relative z-10">
                                <h3 className="text-4xl font-['Bangers'] font-bold mb-2 tracking-wide">Market Size</h3>
                                <p className="text-secondary/80 mb-6 font-medium">Global biobanking and cell therapy market annually</p>

                                <div className="space-y-4">
                                    <div className="bg-white border-[3px] border-black p-4 transform -rotate-1">
                                        <div className="text-2xl font-['Bangers'] tracking-wide">Scalable</div>
                                        <p className="text-secondary/70 text-sm font-medium">Platform technology applicable to microbes, cell lines, and biopharmaceuticals</p>
                                    </div>
                                    <div className="bg-festival-lime border-[3px] border-black p-4 transform rotate-1">
                                        <div className="text-2xl font-['Bangers'] tracking-wide">Sustainable</div>
                                        <p className="text-secondary/70 text-sm font-medium">Eliminates cold-chain dependency and energy-intensive preservation</p>
                                    </div>
                                </div>
                            </div>
                        </BangerBox>
                    </div>
                </div>
            </section>

            {/* CTA Section - Dark with white grid */}
            <section className="py-20 bg-secondary relative overflow-hidden">

                {/* Floating shapes */}
                <FloatingShapes shapes={ctaShapes} />

                <div className="container-custom text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-['Bangers'] tracking-wide text-white mb-4">
                            Ready to Explore the Science?
                        </h2>
                        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto font-['Comic_Neue'] font-bold">
                            Dive into our comprehensive project documentation, from mechanism design
                            to computational modeling and experimental validation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/description" className="btn-primary">
                                Project Description
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                            <Link to="/team" className="btn-outline text-white border-white hover:bg-white hover:text-secondary">
                                Meet the Team
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Home
