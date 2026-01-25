import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import {
    Repeat,
    Wrench,
    FlaskConical,
    TestTube2,
    GraduationCap,
    CheckCircle2,
    ArrowRight,
    TrendingUp,
    Target
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import DataTable from '../components/DataTable'
import { useParallax } from '../hooks/useParallax'

const Engineering = () => {
    const containerRef = useRef(null)
    useParallax(containerRef)
    
    const breadcrumb = [
        { label: 'Home', link: '/' },
        { label: 'Project', link: '#' },
        { label: 'Engineering Success' }
    ]

    const validationMetrics = {
        headers: ['Metric', 'Engineered Strain', 'Wild-Type', 'Expected Difference'],
        rows: [
            ['Protein synthesis rate', '< 0.2 aa·s⁻¹·codon⁻¹', '0.15-0.2 aa·s⁻¹·codon⁻¹', '3-10× reduction'],
            ['Intracellular ATP', '< 1 mM', '5-10 mM', '70-90% reduction'],
            ['Specific growth rate (μ)', '< 0.05 h⁻¹', '0.4-0.6 h⁻¹', '10-50× slower'],
            ['Viability (28 days RT)', '> 70% CFU', '100% (baseline)', 'Long-term maintained'],
            ['Recovery time', '30-120 minutes', 'N/A', 'Rapid, engineered'],
        ]
    }

    const dbtlCycles = [
        {
            phase: 'Design',
            icon: Wrench,
            color: 'primary',
            title: 'Codon Pattern Engineering',
            description: 'Design rare codon insertions based on literature and computational predictions.',
            activities: [
                'Analyze genome-wide codon usage in E. coli K-12',
                'Identify target metabolic genes (gapA, pfkA, acoA, idhA, atpD)',
                'Design valine codon clusters (GTN) at 30-40% frequency',
                'Use CodonSync ML tool for pattern optimization',
                'Preserve essential protein folding regions'
            ],
            outcomes: [
                'Codon-optimized gene sequences',
                'Predicted stalling profiles',
                'Synthesis-ready constructs'
            ]
        },
        {
            phase: 'Build',
            icon: FlaskConical,
            color: 'accent-text',
            title: 'Construct Assembly',
            description: 'Assemble engineered constructs using standard molecular biology techniques.',
            activities: [
                'Gene synthesis of engineered sequences',
                'Gibson Assembly for construct integration',
                'CRISPR-Cas9 for chromosomal integration',
                'Build inducible tRNA expression system',
                'Clone dormancy reporter (dps-GFP fusion)'
            ],
            outcomes: [
                'Engineered E. coli strains',
                'Inducible tRNA control system',
                'Reporter constructs'
            ]
        },
        {
            phase: 'Test',
            icon: TestTube2,
            color: 'secondary',
            title: 'Experimental Validation',
            description: 'Comprehensive testing of dormancy induction, maintenance, and recovery.',
            activities: [
                'Ribo-Seq for ribosome profiling',
                'SILAC proteomics for protein quantification',
                'ATP luciferase assays',
                'Seahorse metabolic flux analysis',
                'Growth curves and CFU viability assays'
            ],
            outcomes: [
                'Ribosome dwell time data',
                'ATP/metabolite profiles',
                'Viability retention curves'
            ]
        },
        {
            phase: 'Learn',
            icon: GraduationCap,
            color: 'primary-light',
            title: 'Iterate & Optimize',
            description: 'Analyze results, refine models, and improve design parameters.',
            activities: [
                'Compare predictions vs. experimental data',
                'Update dFBA model parameters',
                'Refine ML training dataset',
                'Identify optimal codon patterns',
                'Document failure modes and solutions'
            ],
            outcomes: [
                'Improved predictive models',
                'Optimized dormancy protocols',
                'Next-iteration design rules'
            ]
        }
    ]

    const iterations = [
        {
            iteration: 1,
            focus: 'Single Gene Proof-of-Concept',
            target: 'gapA (GAPDH)',
            goal: 'Demonstrate codon-mediated stalling reduces protein output',
            successCriteria: '>50% reduction in GAPDH levels; measurable ATP decrease',
            status: 'planned'
        },
        {
            iteration: 2,
            focus: 'Metabolic Impact',
            target: 'gapA + pfkA',
            goal: 'Achieve significant growth arrest through coordinated stalling',
            successCriteria: 'Growth rate < 0.1 h⁻¹; 60% ATP reduction',
            status: 'planned'
        },
        {
            iteration: 3,
            focus: 'Reversibility',
            target: 'Multi-gene + tRNA control',
            goal: 'Demonstrate inducible entry and exit from dormancy',
            successCriteria: 'Recovery within 2 hours; >70% viability after 14 days',
            status: 'planned'
        },
        {
            iteration: 4,
            focus: 'Optimization',
            target: 'Full pathway engineering',
            goal: 'Maximize viability retention and minimize recovery time',
            successCriteria: '>70% viability after 28 days; <90 min recovery',
            status: 'planned'
        }
    ]

    return (
        <div ref={containerRef}>
            <PageHeader
                title="Engineering Success"
                subtitle="Iterative Design-Build-Test-Learn cycles for dormancy engineering"
                breadcrumb={breadcrumb}
            />

            {/* Overview */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern-lime opacity-10 parallax-bg" />
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            tag="Approach"
                            title="Engineering Framework"
                            description="TRE-Pod follows the iGEM Engineering Design Cycle, iterating through Design-Build-Test-Learn phases to achieve robust, reversible dormancy."
                            centered={false}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card bg-gradient-to-br from-primary to-primary-dark text-white p-8 mb-8"
                        >
                            <div className="flex items-center mb-4">
                                <Repeat className="w-8 h-8 mr-3" />
                                <h3 className="text-xl font-heading font-bold">The DBTL Cycle</h3>
                            </div>
                            <p className="text-white/90 leading-relaxed">
                                Our engineering approach integrates computational predictions with experimental validation
                                through multiple iterations. Each cycle refines our understanding of codon-dormancy relationships
                                and improves our ability to predictably engineer cellular states.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* DBTL Phases */}
            <section className="py-16 bg-accent">
                <div className="container-custom">
                    <SectionHeader
                        tag="Methodology"
                        title="Design-Build-Test-Learn"
                        description="Each phase contributes essential data and insights to the engineering process."
                    />

                    <div className="space-y-8">
                        {dbtlCycles.map((cycle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    {/* Phase Header */}
                                    <div className="lg:w-48 flex-shrink-0">
                                        <div className={`w-16 h-16 rounded-2xl bg-${cycle.color}/10 flex items-center justify-center mb-4`}>
                                            <cycle.icon className={`w-8 h-8 text-${cycle.color}`} />
                                        </div>
                                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-${cycle.color}/10 text-${cycle.color} mb-2`}>
                                            {cycle.phase}
                                        </div>
                                        <h3 className="text-xl font-heading font-semibold text-secondary">
                                            {cycle.title}
                                        </h3>
                                        <p className="text-secondary-light text-sm mt-2">
                                            {cycle.description}
                                        </p>
                                    </div>

                                    {/* Activities & Outcomes */}
                                    <div className="flex-grow grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-secondary mb-3 flex items-center">
                                                <Target className="w-4 h-4 mr-2 text-primary" />
                                                Activities
                                            </h4>
                                            <ul className="space-y-2">
                                                {cycle.activities.map((activity, i) => (
                                                    <li key={i} className="flex items-start text-sm text-secondary-light">
                                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0" />
                                                        {activity}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-secondary mb-3 flex items-center">
                                                <CheckCircle2 className="w-4 h-4 mr-2 text-accent-text" />
                                                Expected Outcomes
                                            </h4>
                                            <ul className="space-y-2">
                                                {cycle.outcomes.map((outcome, i) => (
                                                    <li key={i} className="flex items-start text-sm text-secondary-light">
                                                        <CheckCircle2 className="w-4 h-4 mr-2 text-accent-text flex-shrink-0" />
                                                        {outcome}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Iteration Plan */}
            <section className="py-16">
                <div className="container-custom">
                    <SectionHeader
                        tag="Iterations"
                        title="Engineering Iterations"
                        description="Progressive complexity through multiple DBTL cycles, building toward full dormancy control."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {iterations.map((iter, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card border-t-4 border-primary"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-3xl font-heading font-bold text-primary">
                                        {iter.iteration}
                                    </span>
                                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full uppercase font-semibold">
                                        {iter.status}
                                    </span>
                                </div>
                                <h4 className="font-heading font-semibold text-secondary mb-2">
                                    {iter.focus}
                                </h4>
                                <div className="text-sm text-secondary-light space-y-2">
                                    <p><span className="font-medium">Target:</span> {iter.target}</p>
                                    <p><span className="font-medium">Goal:</span> {iter.goal}</p>
                                    <div className="pt-2 border-t border-accent">
                                        <p className="font-medium text-accent-text text-xs">Success Criteria:</p>
                                        <p className="text-xs">{iter.successCriteria}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Metrics */}
            <section className="py-16 bg-accent">
                <div className="container-custom">
                    <SectionHeader
                        tag="Metrics"
                        title="Validation Metrics"
                        description="Quantitative targets for engineering success at each stage."
                    />

                    <div className="max-w-5xl mx-auto">
                        <DataTable
                            headers={validationMetrics.headers}
                            rows={validationMetrics.rows}
                            highlightColumn={3}
                            variant="striped"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-8 grid md:grid-cols-3 gap-6"
                        >
                            {[
                                {
                                    icon: TrendingUp,
                                    title: 'MVP Success',
                                    desc: '60-80% ATP reduction with >50% CFU at 14 days'
                                },
                                {
                                    icon: Target,
                                    title: 'Full Project Success',
                                    desc: 'Reversible dormancy with >70% CFU at 28 days'
                                },
                                {
                                    icon: Repeat,
                                    title: 'Predictive Model',
                                    desc: 'ML model achieving R² > 0.85 on test set'
                                }
                            ].map((item, index) => (
                                <div key={index} className="card text-center">
                                    <item.icon className="w-8 h-8 text-accent-text mx-auto mb-3" />
                                    <h4 className="font-heading font-semibold text-secondary mb-2">{item.title}</h4>
                                    <p className="text-sm text-secondary-light">{item.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">
                            See Our Experimental Details
                        </h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            Explore the specific protocols and experimental validation approaches we use.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/experiments" className="btn-primary">
                                Experiments
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                            <Link to="/results" className="btn-outline border-white text-white hover:bg-white hover:text-deep-blue">
                                View Results
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Engineering
