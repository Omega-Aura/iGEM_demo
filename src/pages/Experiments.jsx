import { motion } from 'framer-motion'
import {
    FlaskConical,
    Microscope,
    TestTube2,
    BarChart3,
    ArrowRight,
    CheckCircle2
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import DataTable from '../components/DataTable'

const Experiments = () => {
    const breadcrumb = [
        { label: 'Home', link: '/' },
        { label: 'Science', link: '#' },
        { label: 'Experiments' }
    ]

    const experiments = [
        {
            id: 1,
            title: 'Translational Dynamics Characterization',
            goal: 'Validate that engineered codons cause ribosomal stalling',
            icon: Microscope,
            methods: [
                {
                    name: 'Ribosome Profiling (Ribo-Seq)',
                    steps: [
                        'Collect lysates from engineered vs. wild-type strains',
                        'Treat with RNase I (footprint protection)',
                        'Sequence footprints to map ribosome occupancy',
                        'Analyze codon-level dwell times'
                    ],
                    expectedResult: 'Significantly longer dwell times at engineered codons'
                },
                {
                    name: 'Quantitative Proteomics (SILAC)',
                    steps: [
                        'Culture cells with stable isotope labeling',
                        'Measure GAPDH abundance via mass spectrometry',
                        'Compare engineered vs. wild-type protein levels'
                    ],
                    expectedResult: 'GAPDH levels reduced 50-80% in engineered strain'
                },
                {
                    name: 'In Vitro Translation (PURE System)',
                    steps: [
                        'Use cell-free PURE translation system',
                        'Template mRNAs: wild-type vs. engineered gapA',
                        'Measure translation rate via fluorescent reporters'
                    ],
                    expectedResult: 'Engineered mRNA translates 3-10× slower'
                }
            ]
        },
        {
            id: 2,
            title: 'Metabolic State Characterization',
            goal: 'Determine if codon-pattern engineering drives dormancy',
            icon: BarChart3,
            methods: [
                {
                    name: 'ATP Quantification (Luciferase Assay)',
                    steps: [
                        'Harvest cells at OD600 = 0.5',
                        'Lyse and measure intracellular ATP',
                        'Luciferase-based bioluminescence detection',
                        'Compare to wild-type controls'
                    ],
                    expectedResult: 'ATP in engineered strain 50-70% lower than wild-type'
                },
                {
                    name: 'Oxygen Consumption Rate (Seahorse)',
                    steps: [
                        'Seahorse Extracellular Flux Analyzer',
                        'Real-time OCR measurements',
                        'Proxy for metabolic activity'
                    ],
                    expectedResult: 'OCR reduced in engineered strain'
                },
                {
                    name: 'Metabolite Profiling (LC-MS/MS)',
                    steps: [
                        'Extract intracellular metabolites',
                        'Analyze amino acids, nucleotides, central carbon intermediates',
                        'Compare metabolic fingerprints'
                    ],
                    expectedResult: 'Lower biosynthetic intermediates; possible overflow accumulation'
                }
            ]
        },
        {
            id: 3,
            title: 'Dormancy Entry & Exit',
            goal: 'Demonstrate reversible dormancy transitions',
            icon: TestTube2,
            methods: [
                {
                    name: 'Growth Curves',
                    steps: [
                        'Culture engineered vs. wild-type in minimal media',
                        'Measure OD600 every 30 min for 24 hours',
                        'Analyze growth kinetics'
                    ],
                    expectedResult: 'Engineered: slow growth/arrest; Wild-type: exponential'
                },
                {
                    name: 'Inducible Exit',
                    steps: [
                        'At stationary phase, induce exit switch (add aTc)',
                        'Monitor growth resumption over time',
                        'Track ATP recovery kinetics'
                    ],
                    expectedResult: 'Growth resumes within 30-120 min; short lag phase'
                },
                {
                    name: 'Viability Assays (CFU)',
                    steps: [
                        'Plate cells at 7, 14, 21, 28 days (room temperature storage)',
                        'Count colony-forming units',
                        'Compare to cryopreservation controls (-80°C, -196°C)'
                    ],
                    expectedResult: '>70% CFU retention after 28 days (vs. <30% for -80°C)'
                }
            ]
        }
    ]

    const validationMetrics = {
        headers: ['Metric', 'Engineered', 'Wild-Type', 'Outcome'],
        rows: [
            ['Protein synthesis', '< 0.2 aa·s⁻¹·codon⁻¹', '0.15-0.2', '3-10× reduction'],
            ['Intracellular ATP', '< 1 mM', '5-10 mM', '70-90% reduction'],
            ['Growth rate (μ)', '< 0.05 h⁻¹', '0.4-0.6 h⁻¹', '10-50× slower'],
            ['28-day viability', '> 70% CFU', 'Baseline', 'Maintained'],
            ['Recovery time', '30-120 min', 'N/A', 'Rapid recovery']
        ]
    }

    return (
        <>
            <PageHeader
                title="Experiments"
                subtitle="Comprehensive wet lab validation of the TRE-Pod dormancy system"
                breadcrumb={breadcrumb}
            />

            {/* Overview */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            tag="Wet Lab"
                            title="Experimental Validation Strategy"
                            description="Three experiment sets validate translational stalling, metabolic effects, and reversible dormancy."
                            centered={false}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card bg-gradient-to-br from-primary to-primary-dark text-white p-8 mb-8"
                        >
                            <div className="flex items-center mb-4">
                                <FlaskConical className="w-8 h-8 mr-3" />
                                <h3 className="text-xl font-heading font-bold">Host System</h3>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                    <p className="text-white/60 text-sm">Host Organism</p>
                                    <p className="font-semibold">E. coli K-12 MG1655</p>
                                </div>
                                <div>
                                    <p className="text-white/60 text-sm">Primary Construct</p>
                                    <p className="font-semibold">gapA (GAPDH) + rare codons</p>
                                </div>
                                <div>
                                    <p className="text-white/60 text-sm">Reporter</p>
                                    <p className="font-semibold">dps-GFP fusion</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Experiments */}
            <section className="py-16 bg-accent">
                <div className="container-custom">
                    <SectionHeader
                        tag="Protocols"
                        title="Experimental Design"
                    />

                    <div className="space-y-8">
                        {experiments.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="card"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <exp.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <span className="text-sm text-primary font-semibold">Experiment {exp.id}</span>
                                        <h3 className="text-xl font-heading font-bold text-secondary">{exp.title}</h3>
                                        <p className="text-secondary-light">{exp.goal}</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    {exp.methods.map((method, i) => (
                                        <div key={i} className="bg-accent rounded-lg p-4">
                                            <h4 className="font-heading font-semibold text-secondary mb-3 text-sm">
                                                {method.name}
                                            </h4>
                                            <ul className="space-y-2 mb-4">
                                                {method.steps.map((step, j) => (
                                                    <li key={j} className="flex items-start text-xs text-secondary-light">
                                                        <span className="w-4 h-4 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                                                            {j + 1}
                                                        </span>
                                                        {step}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="bg-accent-text/10 rounded p-2">
                                                <p className="text-xs">
                                                    <span className="font-semibold text-accent-text">Expected: </span>
                                                    <span className="text-secondary-light">{method.expectedResult}</span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Validation Metrics */}
            <section className="py-16">
                <div className="container-custom">
                    <SectionHeader
                        tag="Metrics"
                        title="Validation Metrics"
                        description="Quantitative targets for experimental success."
                    />

                    <div className="max-w-4xl mx-auto">
                        <DataTable
                            headers={validationMetrics.headers}
                            rows={validationMetrics.rows}
                            highlightColumn={3}
                            variant="striped"
                        />
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
                            View Our Results
                        </h2>
                        <p className="text-white/80 max-w-2xl mx-auto mb-8">
                            See how our experimental data validates the computational predictions.
                        </p>
                        <a href="/results" className="btn-primary">
                            Results
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Experiments
