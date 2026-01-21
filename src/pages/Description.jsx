import { motion } from 'framer-motion'
import {
    Target,
    Lightbulb,
    Dna,
    ArrowRight,
    BookOpen,
    Microscope,
    Cpu,
    CheckCircle2
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import DataTable from '../components/DataTable'
import Timeline from '../components/Timeline'

const Description = () => {
    const breadcrumb = [
        { label: 'Home', link: '/' },
        { label: 'Project', link: '#' },
        { label: 'Description' }
    ]

    const comparisonTable = {
        headers: ['Aspect', 'RiboRate', 'Natural Dormancy', 'TRE-Pod'],
        rows: [
            ['Mechanism', 'Global codon optimization', 'RpoS regulon, nutrient starvation', 'Patterned rare codons with temporal dynamics'],
            ['Speed of Induction', 'Static (no active induction)', '4-8 hours', '30-120 minutes'],
            ['Level of Control', 'Deterministic, built-in', 'Stimulus-dependent, indirect', 'Fully programmable and inducible'],
            ['Reversibility', 'Not applicable', 'Reversible but slow', 'Rapid and engineered'],
            ['Primary Use', 'Protein folding/expression', 'Stress tolerance', 'Long-term cell preservation'],
            ['iGEM Precedent', 'Conceptual demos', 'Not synthetically engineered', 'Novel approach'],
        ]
    }

    const targetGenes = {
        headers: ['Gene', 'Pathway', 'Rationale'],
        rows: [
            ['gapA', 'Glycolysis', 'Central carbon metabolism; essential for cellular growth'],
            ['pfkA', 'Glycolysis', 'Rate-limiting enzyme controlling glycolytic flux'],
            ['acoA', 'TCA Cycle', 'Central metabolism and cofactor synthesis'],
            ['idhA', 'TCA Cycle', 'NADH generation and coupling to ATP synthesis'],
            ['atpD', 'Oxidative Phosphorylation', 'Direct involvement in ATP production'],
        ]
    }

    const literatureHighlights = [
        {
            title: 'Worpenberg et al. (2025)',
            journal: 'Genome Biology',
            finding: 'Valine codons (GTN) exhibit strong, position-biased stalling (~2-10× baseline) under BCAA starvation. Stalling is tunable based on codon identity and tRNA availability.'
        },
        {
            title: 'Wu et al. (2024)',
            journal: 'Nature Communications',
            finding: 'Optimal codons increase speed and fidelity; rare codons slow translation. Effect is organism-specific, enabling predictable design parameters for E. coli.'
        },
        {
            title: 'Bollen et al. (2025)',
            journal: 'Nature',
            finding: 'Protein aggregates accumulate during dormancy and precede ATP depletion. Reduced protein synthesis triggers functional aggregation, stabilizing dormancy.'
        },
        {
            title: 'Oyarzún et al. (2015)',
            journal: 'Chaos',
            finding: 'The "metabolator" circuit exhibits sustained oscillations when metabolic and genetic timescales decouple—translation rhythm can drive metabolic oscillations.'
        }
    ]

    const mechanismSteps = [
        {
            title: 'Codon Pattern Design',
            description: 'Insert rare valine codons (GTN) at strategic positions in metabolic genes.',
            details: [
                'Wild-type GTN frequency: ~8-10%',
                'Engineered GTN frequency: 30-40% (clustered in 5\' region)',
                'Expected ribosome dwell time increase: 5-10×'
            ]
        },
        {
            title: 'Inducible tRNA Control',
            description: 'Engineer an inducible tRNA expression system (aTc or IPTG-inducible).',
            details: [
                'OFF state: tRNA^Val levels low → valine starvation → codon stalling',
                'ON state: tRNA^Val levels increase → stalling relieved → translation resumes',
                'Enables reversible entry/exit from dormancy'
            ]
        },
        {
            title: 'Metabolic Consequence',
            description: 'Translation slowdown cascades to metabolic quiescence.',
            details: [
                'Translation of metabolic enzymes slowed 5-10×',
                'Reduced protein output → reduced biosynthetic demand',
                'ATP consumption decreases 60-80%'
            ]
        },
        {
            title: 'Dormancy State',
            description: 'Cells enter stable, low-energy dormant state.',
            details: [
                'Growth rate drops to near-zero',
                'ATP levels: 0.5-1.5 mM (vs. 5-10 mM in growth phase)',
                'Stable for weeks/months at room temperature'
            ]
        },
        {
            title: 'Engineered Recovery',
            description: 'Restore tRNA levels for rapid, controlled exit from dormancy.',
            details: [
                '0-15 min: tRNA^Val increases, stalling relieved',
                '15-60 min: ATP synthesis resumes',
                '30-120 min: Growth resumes at normal rate'
            ]
        }
    ]

    return (
        <>
            <PageHeader
                title="Project Description"
                subtitle="Engineering reversible cellular dormancy through codon-specific ribosomal stalling"
                breadcrumb={breadcrumb}
            />

            {/* Executive Summary */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            tag="Overview"
                            title="Executive Summary"
                            centered={false}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="prose prose-lg max-w-none"
                        >
                            <div className="card border-l-4 border-deep-blue mb-8">
                                <p className="text-lg text-charcoal leading-relaxed mb-4">
                                    <strong className="text-deep-blue">TRE-Pod (Translational Rhythm Engineering for Programmed Dormancy)</strong> exploits
                                    recent discoveries in codon-specific ribosomal stalling to engineer reversible cellular dormancy.
                                    By systematically inserting rare codons (particularly valine codons) into metabolic genes, we
                                    induce programmed translation stalling that reduces ATP synthesis and metabolic rate, enabling
                                    cells to enter a stable, reversible dormant state at room temperature.
                                </p>
                                <p className="text-charcoal-light">
                                    This project directly addresses the challenge of <em>Reversible Cellular Dormancy Control</em>:
                                    developing biological strategies to enable safe, reversible control of cellular metabolism
                                    for storage and biomedical applications.
                                </p>
                            </div>

                            {/* Key Outcomes */}
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="card bg-gradient-to-br from-deep-blue/5 to-transparent">
                                    <h4 className="font-heading font-semibold text-deep-blue mb-3 flex items-center">
                                        <Target className="w-5 h-5 mr-2" />
                                        MVP Outcomes
                                    </h4>
                                    <ul className="space-y-2 text-charcoal-light">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="w-4 h-4 text-vibrant-green mr-2 mt-1 flex-shrink-0" />
                                            60-80% ATP reduction
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="w-4 h-4 text-vibrant-green mr-2 mt-1 flex-shrink-0" />
                                            Growth arrest achieved
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="w-4 h-4 text-vibrant-green mr-2 mt-1 flex-shrink-0" />
                                            {'>'}50% CFU retention after 14 days RT storage
                                        </li>
                                    </ul>
                                </div>

                                <div className="card bg-gradient-to-br from-vibrant-green/5 to-transparent">
                                    <h4 className="font-heading font-semibold text-vibrant-green mb-3 flex items-center">
                                        <Lightbulb className="w-5 h-5 mr-2" />
                                        Full Project Outcomes
                                    </h4>
                                    <ul className="space-y-2 text-charcoal-light">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="w-4 h-4 text-vibrant-green mr-2 mt-1 flex-shrink-0" />
                                            Inducible reversible exit (30-120 min)
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="w-4 h-4 text-vibrant-green mr-2 mt-1 flex-shrink-0" />
                                            Predictive ML model (R² {'>'} 0.85)
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="w-4 h-4 text-vibrant-green mr-2 mt-1 flex-shrink-0" />
                                            {'>'}70% CFU retention after 28 days
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Problem Statement */}
            <section className="py-16 bg-light-gray">
                <div className="container-custom">
                    <SectionHeader
                        tag="The Challenge"
                        title="The Dormancy Challenge in Biotechnology"
                        description="Cellular preservation is fundamental to modern biotech, yet current methods are expensive, inaccessible, and damaging to cells."
                    />

                    <div className="grid lg:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                icon: '💰',
                                title: 'Expense',
                                desc: 'Cryogenic infrastructure costs $50,000-500,000 per facility with continuous operational costs.'
                            },
                            {
                                icon: '⚡',
                                title: 'Energy Dependence',
                                desc: 'Continuous power and liquid nitrogen supply required—single point of failure risks sample loss.'
                            },
                            {
                                icon: '🌍',
                                title: 'Accessibility',
                                desc: 'Unavailable in low-resource settings, rural areas, and developing nations—limiting global biotech.'
                            },
                            {
                                icon: '❄️',
                                title: 'Cell Damage',
                                desc: 'Cryoinjury causes 30-70% viability loss through ROS damage, apoptosis, and ice-crystal formation.'
                            },
                            {
                                icon: '⏱️',
                                title: 'Heterogeneity',
                                desc: 'Natural dormancy is slow (hours) and asynchronous across cell populations—unpredictable outcomes.'
                            },
                            {
                                icon: '🔬',
                                title: 'Limited Control',
                                desc: 'Existing genetic approaches (spore formation, RpoS) are slow, irreversible, or species-limited.'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                            >
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h3 className="font-heading font-semibold text-charcoal mb-2">{item.title}</h3>
                                <p className="text-charcoal-light text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.blockquote
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-white border-l-4 border-stasis-violet p-6 rounded-r-xl italic text-charcoal-light max-w-4xl mx-auto"
                    >
                        <p className="mb-4">
                            "Reversible Cellular Dormancy Control: Long-term preservation of living cells remains challenging,
                            as conventional freezing or dehydration damages cellular integrity and requires complex infrastructure.
                            Predictably suspending and reactivating cellular activity without viability loss is difficult.
                            New biological strategies are needed to enable safe, reversible control of cellular metabolism
                            for storage and biomedical applications."
                        </p>
                        <cite className="text-deep-blue font-semibold not-italic">— iGEM 2026 Challenge Statement</cite>
                    </motion.blockquote>
                </div>
            </section>

            {/* Core Innovation */}
            <section className="py-16">
                <div className="container-custom">
                    <SectionHeader
                        tag="Innovation"
                        title="The TRE-Pod Solution"
                        description="A fundamentally new approach: engineering translational dynamics to create programmable dormancy states."
                    />

                    <div className="max-w-4xl mx-auto mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card bg-gradient-to-br from-deep-blue to-deep-blue-dark text-white p-8"
                        >
                            <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
                                <Dna className="w-6 h-6 mr-2" />
                                Core Hypothesis
                            </h3>
                            <p className="text-lg text-white/90 leading-relaxed">
                                Codon-specific ribosomal stalling patterns in key metabolic genes can create rhythmic
                                translation that drives oscillatory metabolic behavior, enabling cells to stabilize
                                themselves in a low-energy, reversible dormant state.
                            </p>
                        </motion.div>
                    </div>

                    {/* Comparison Table */}
                    <div className="mb-12">
                        <h3 className="text-xl font-heading font-semibold text-center mb-6">
                            How TRE-Pod Differs from Existing Approaches
                        </h3>
                        <DataTable
                            headers={comparisonTable.headers}
                            rows={comparisonTable.rows}
                            highlightColumn={3}
                            variant="striped"
                        />
                    </div>

                    {/* What Makes This Novel */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Microscope,
                                title: 'First Integration',
                                desc: 'First combination of codon-specific stalling with dormancy engineering—academic biology understands each separately.'
                            },
                            {
                                icon: BookOpen,
                                title: 'Recent Enablement',
                                desc: 'Codon-specific stalling only fully characterized in 2024-2025 (Worpenberg et al., Wu et al.).'
                            },
                            {
                                icon: Cpu,
                                title: 'Temporal Structure',
                                desc: 'Distinct from RiboRate: TRE-Pod creates temporal metabolic rhythms, not just translation speed control.'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card border-t-4 border-vibrant-green"
                            >
                                <item.icon className="w-8 h-8 text-deep-blue mb-4" />
                                <h4 className="font-heading font-semibold text-charcoal mb-2">{item.title}</h4>
                                <p className="text-charcoal-light text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scientific Foundation */}
            <section className="py-16 bg-light-gray">
                <div className="container-custom">
                    <SectionHeader
                        tag="Literature"
                        title="Scientific Foundation"
                        description="TRE-Pod builds on breakthrough discoveries in translational biology from 2024-2025."
                    />

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {literatureHighlights.map((paper, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h4 className="font-heading font-semibold text-deep-blue">{paper.title}</h4>
                                    <span className="text-xs bg-deep-blue/10 text-deep-blue px-2 py-1 rounded-full">
                                        {paper.journal}
                                    </span>
                                </div>
                                <p className="text-charcoal-light text-sm leading-relaxed">{paper.finding}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mechanism Design */}
            <section className="py-16">
                <div className="container-custom">
                    <SectionHeader
                        tag="Mechanism"
                        title="Biological Design Strategy"
                        description="A five-step engineered pathway from codon design to reversible dormancy."
                    />

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <Timeline items={mechanismSteps} />
                        </div>

                        <div className="space-y-8">
                            {/* Target Genes Table */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-heading font-semibold mb-4">Target Genes for Engineering</h3>
                                <DataTable
                                    headers={targetGenes.headers}
                                    rows={targetGenes.rows}
                                    variant="striped"
                                />
                                <p className="text-sm text-charcoal-light mt-4">
                                    Design approach: Engineer 3-5 metabolic genes with coordinated codon patterns
                                    to achieve ~80% ATP reduction without triggering cell death.
                                </p>
                            </motion.div>

                            {/* Dormancy Profile */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="card bg-gradient-to-br from-stasis-violet/10 to-transparent border border-stasis-violet/20"
                            >
                                <h4 className="font-heading font-semibold text-stasis-violet mb-4">
                                    Expected Dormancy Profile
                                </h4>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="text-charcoal-light">ATP levels:</span>
                                        <div className="font-semibold text-charcoal">0.5-1.5 mM</div>
                                        <div className="text-xs text-charcoal-light">(vs. 5-10 mM growth phase)</div>
                                    </div>
                                    <div>
                                        <span className="text-charcoal-light">Protein synthesis:</span>
                                        <div className="font-semibold text-charcoal">{'<'}5% of normal</div>
                                    </div>
                                    <div>
                                        <span className="text-charcoal-light">Growth rate:</span>
                                        <div className="font-semibold text-charcoal">0 h⁻¹</div>
                                        <div className="text-xs text-charcoal-light">(no division)</div>
                                    </div>
                                    <div>
                                        <span className="text-charcoal-light">Stability:</span>
                                        <div className="font-semibold text-charcoal">Weeks/months</div>
                                        <div className="text-xs text-charcoal-light">at room temperature</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-deep-blue">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">
                            Explore Our Approach
                        </h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            Dive deeper into our computational modeling, experimental validation, and software tools.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/modeling" className="btn-primary">
                                Computational Modeling
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                            <a href="/experiments" className="btn-outline border-white text-white hover:bg-white hover:text-deep-blue">
                                Experimental Design
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Description
