import { motion } from 'framer-motion'
import {
    Cpu,
    Database,
    LineChart,
    GitBranch,
    ArrowRight,
    Zap,
    Timer
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import DataTable from '../components/DataTable'

const Modeling = () => {
    const breadcrumb = [
        { label: 'Home', link: '/' },
        { label: 'Computational', link: '#' },
        { label: 'Modeling' }
    ]

    const modelingScales = [
        {
            scale: 'Scale 1',
            title: 'Genome-Scale Metabolic Modeling',
            subtitle: 'Dynamic Flux Balance Analysis (dFBA)',
            icon: Database,
            color: 'primary',
            goal: 'Predict ATP balance and metabolic state as a function of codon-pattern changes',
            method: [
                'E. coli genome-scale model (iJO1366, iAF1260)',
                'Stoichiometric matrix S ∈ ℝ^(m×n)',
                'Time-step optimization of biomass flux',
                'Modified protein synthesis bounds based on codon pattern'
            ],
            equations: [
                'maximize: v_biomass',
                'subject to: S·v(t) = 0  [metabolic steady state]',
                'v_min ≤ v ≤ v_max [bounds depend on translation state]'
            ],
            novelContribution: 'v_protein_synthesis,max(t) = α × f_stalling(codon_pattern, [tRNA])',
            outputs: [
                'Time courses of ATP, glucose, biomass, growth rate',
                'Identification of optimal stalling patterns',
                'Prediction of "dormancy depth" vs. metabolic state'
            ],
            tools: 'COBRApy (Python)'
        },
        {
            scale: 'Scale 2',
            title: 'Translational Dynamics',
            subtitle: 'Agent-Based Ribosome Simulation',
            icon: GitBranch,
            color: 'accent-text',
            goal: 'Predict ribosomal dwell times and polysome breakdown',
            method: [
                'Calculate elongation rate per codon',
                'Model ribosomal collisions',
                'Track polysome dynamics',
                'Predict protein output over time'
            ],
            equations: [
                'k_elongation(codon_i) = k_0 × [aa-tRNA_i] / (K_m + [aa-tRNA_i])',
                'where k_0 ≈ 15 codons/s (wild-type)',
                '[aa-tRNA_i] = aminoacyl-tRNA concentration for codon i'
            ],
            novelContribution: 'Position-dependent stalling weights from Ribo-Seq data',
            outputs: [
                'Ribosomal dwell time distributions',
                'Polysome breakdown curves',
                'Predicted protein levels vs. codon pattern'
            ],
            tools: 'Custom Julia/Python code, RiboViz'
        },
        {
            scale: 'Scale 3',
            title: 'Systems Dynamics',
            subtitle: 'ODE-Based Oscillator Model',
            icon: LineChart,
            color: 'primary-light',
            goal: 'Predict if translational rhythm drives metabolic oscillations → dormancy',
            method: [
                'Reduced ODE model coupling translation and metabolism',
                'Bifurcation analysis for dormancy conditions',
                'Sensitivity analysis for critical parameters',
                'Phase space characterization'
            ],
            equations: [
                'd[ATP]/dt = (ATP_synthesis) - (ATP_protein_synthesis) - (ATP_maintenance)',
                'd[Glucose]/dt = -v_glucose_uptake',
                'd[Translation_rate]/dt = f(codon_pattern, [ATP], [aa-tRNA])'
            ],
            novelContribution: 'Bifurcation diagrams showing transition regions to dormancy',
            outputs: [
                'Stable dormancy conditions (low ATP, no growth)',
                'Bistability analysis (growth OR dormancy)',
                'Predicted dormancy entry/exit timescales'
            ],
            tools: 'AUTO/XPPAUT'
        }
    ]

    const validationTable = {
        headers: ['Prediction', 'Validation Approach', 'Expected Agreement'],
        rows: [
            ['ATP time course', 'Luciferase assay measurements', 'R² > 0.8'],
            ['Growth rate dynamics', 'OD600 growth curves', 'R² > 0.85'],
            ['Protein output', 'SILAC proteomics', 'Qualitative match'],
            ['Ribosome dwell times', 'Ribo-Seq footprinting', 'Correlation > 0.7'],
            ['Dormancy entry time', 'GFP reporter kinetics', '±30% accuracy']
        ]
    }

    return (
        <>
            <PageHeader
                title="Computational Modeling"
                subtitle="Three-scale modeling framework for predicting dormancy outcomes"
                breadcrumb={breadcrumb}
            />

            {/* Overview */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            tag="Framework"
                            title="Multi-Scale Modeling Approach"
                            description="TRE-Pod integrates three computational scales to predict how codon patterns translate into dormancy phenotypes."
                            centered={false}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card bg-gradient-to-br from-primary to-primary-dark text-white p-8 mb-8"
                        >
                            <div className="flex items-center mb-4">
                                <Cpu className="w-8 h-8 mr-3" />
                                <h3 className="text-xl font-heading font-bold">Computational Integration</h3>
                            </div>
                            <p className="text-white/90 leading-relaxed mb-4">
                                Our modeling framework bridges molecular-level translation dynamics with
                                genome-scale metabolic predictions and systems-level oscillator behavior.
                                This multi-scale approach enables rational design of codon patterns for
                                specific dormancy outcomes.
                            </p>
                            <div className="grid grid-cols-3 gap-4 mt-6">
                                {[
                                    { icon: Database, label: 'Genome-Scale', desc: 'dFBA' },
                                    { icon: GitBranch, label: 'Translation', desc: 'Ribosome Sim' },
                                    { icon: LineChart, label: 'Systems', desc: 'ODE Model' }
                                ].map((item, index) => (
                                    <div key={index} className="text-center">
                                        <item.icon className="w-8 h-8 mx-auto mb-2 text-accent-text" />
                                        <div className="font-semibold">{item.label}</div>
                                        <div className="text-sm text-white/60">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Three Scales */}
            <section className="py-16 bg-accent">
                <div className="container-custom">
                    <SectionHeader
                        tag="Models"
                        title="Three-Scale Framework"
                    />

                    <div className="space-y-8">
                        {modelingScales.map((model, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`card border-l-4 border-${model.color}`}
                            >
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Header */}
                                    <div className="lg:w-72 flex-shrink-0">
                                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-${model.color}/10 text-${model.color} mb-3`}>
                                            {model.scale}
                                        </div>
                                        <h3 className="text-xl font-heading font-bold text-secondary mb-1">
                                            {model.title}
                                        </h3>
                                        <p className="text-primary font-medium text-sm mb-4">{model.subtitle}</p>

                                        <div className="bg-accent rounded-lg p-4 mb-4">
                                            <p className="text-sm text-secondary-light">
                                                <span className="font-semibold text-secondary">Goal:</span> {model.goal}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs text-secondary-light uppercase font-semibold mb-2">Tools</p>
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                                                {model.tools}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow space-y-6">
                                        {/* Method */}
                                        <div>
                                            <h4 className="font-heading font-semibold text-secondary mb-2">Method</h4>
                                            <ul className="grid md:grid-cols-2 gap-2">
                                                {model.method.map((item, i) => (
                                                    <li key={i} className="flex items-start text-sm text-secondary-light">
                                                        <ArrowRight className="w-4 h-4 mr-2 text-accent-text flex-shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Equations */}
                                        <div>
                                            <h4 className="font-heading font-semibold text-secondary mb-2">Key Equations</h4>
                                            <div className="bg-secondary rounded-lg p-4 font-mono text-sm text-accent-text space-y-1">
                                                {model.equations.map((eq, i) => (
                                                    <div key={i}>{eq}</div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Novel Contribution */}
                                        <div className="bg-accent-text/5 border border-accent-text/20 rounded-lg p-4">
                                            <p className="text-sm">
                                                <span className="font-semibold text-accent-text">Novel Contribution:</span>{' '}
                                                <span className="text-secondary-light">{model.novelContribution}</span>
                                            </p>
                                        </div>

                                        {/* Outputs */}
                                        <div>
                                            <h4 className="font-heading font-semibold text-secondary mb-2">Expected Outputs</h4>
                                            <ul className="space-y-1">
                                                {model.outputs.map((output, i) => (
                                                    <li key={i} className="flex items-center text-sm text-secondary-light">
                                                        <Zap className="w-4 h-4 mr-2 text-secondary" />
                                                        {output}
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

            {/* Validation */}
            <section className="py-16">
                <div className="container-custom">
                    <SectionHeader
                        tag="Validation"
                        title="Model Validation Strategy"
                        description="Computational predictions are validated against experimental measurements."
                    />

                    <div className="max-w-4xl mx-auto">
                        <DataTable
                            headers={validationTable.headers}
                            rows={validationTable.rows}
                            variant="striped"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-8 grid md:grid-cols-2 gap-6"
                        >
                            <div className="card border-t-4 border-primary">
                                <Timer className="w-8 h-8 text-primary mb-3" />
                                <h4 className="font-heading font-semibold text-secondary mb-2">Simulation Time</h4>
                                <p className="text-secondary-light text-sm">
                                    12-24 hour simulations capture full dormancy entry, maintenance, and exit phases.
                                </p>
                            </div>
                            <div className="card border-t-4 border-accent-text">
                                <Database className="w-8 h-8 text-accent-text mb-3" />
                                <h4 className="font-heading font-semibold text-secondary mb-2">Training Data</h4>
                                <p className="text-secondary-light text-sm">
                                    1500 codon patterns with full dFBA + translational dynamics simulation for ML training.
                                </p>
                            </div>
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
                            Explore Our Software Tools
                        </h2>
                        <p className="text-white/80 max-w-2xl mx-auto mb-8">
                            See how our computational models power the CodonSync Designer and Metabolic Simulator tools.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/software" className="btn-primary">
                                Software Tools
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                            <a href="/results" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                                View Results
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Modeling
