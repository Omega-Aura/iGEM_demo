import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Code2,
    Database,
    LineChart,
    Dna,
    Cpu,
    ArrowRight,
    ExternalLink,
    Github
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const Software = () => {
    const breadcrumb = [
        { label: 'Home', link: '/' },
        { label: 'Computational', link: '#' },
        { label: 'Software' }
    ]

    const tools = [
        {
            name: 'CodonSync Designer',
            tagline: 'ML-powered codon pattern optimization',
            description: 'Given a desired dormancy profile, CodonSync automatically generates optimized codon patterns using a neural network trained on dFBA simulations.',
            icon: Dna,
            features: [
                {
                    title: 'Input Interface',
                    items: [
                        'Paste protein or DNA sequence',
                        'Slider for dormancy depth (0-100%)',
                        'Checkboxes for organism, preferred codons, GC constraint',
                        'Option to preserve certain regions (e.g., RBS)'
                    ]
                },
                {
                    title: 'Output',
                    items: [
                        'Optimized DNA sequence (FASTA)',
                        'Visual codon map (rare codon density)',
                        'Predicted dwell times (bar graph)',
                        'Codon pair heatmap',
                        'Predicted metrics: ATP reduction, protein output, dormancy entry time'
                    ]
                }
            ],
            techStack: ['Python (Flask)', 'COBRApy', 'React.js', 'D3.js', 'TensorFlow'],
            performance: 'R² > 0.85 on test set',
            status: 'In Development'
        },
        {
            name: 'Metabolic Simulator',
            tagline: 'Real-time visualization of metabolic dynamics',
            description: 'Interactive tool for visualizing how codon patterns affect cellular metabolism over time through dynamic Flux Balance Analysis.',
            icon: LineChart,
            features: [
                {
                    title: 'Visualization',
                    items: [
                        'User selects codon pattern; simulator runs dFBA',
                        'Time-course visualization of glucose, ATP, biomass',
                        'Metabolic flux distribution heatmap',
                        'Side-by-side comparison: wild-type vs. engineered'
                    ]
                },
                {
                    title: 'Interaction',
                    items: [
                        'Slider controls for parameter tuning',
                        'Live impact on trajectories',
                        'Export data and plots for presentations',
                        '12-24 hour simulation timescales'
                    ]
                }
            ],
            techStack: ['COBRApy', 'Flask', 'React', 'Plotly'],
            performance: 'Real-time feedback for parameter changes',
            status: 'In Development'
        }
    ]

    const repositories = [
        {
            name: 'TRE-Pod-dFBA',
            description: 'Dynamic Flux Balance Analysis model for predicting dormancy outcomes',
            language: 'Python',
            frameworks: 'COBRApy'
        },
        {
            name: 'ribosome-simulator',
            description: 'Stochastic ribosomal translation simulation',
            language: 'Julia',
            frameworks: 'Custom'
        },
        {
            name: 'CodonSync-ML',
            description: 'Neural network model and training scripts',
            language: 'Python',
            frameworks: 'TensorFlow'
        },
        {
            name: 'analytical-tools',
            description: 'Data processing and analysis scripts',
            language: 'Python/R',
            frameworks: 'Pandas, ggplot2'
        }
    ]

    const mlArchitecture = {
        input: [
            '20 neurons (dormancy specifications)',
            'Desired ATP reduction (%)',
            'Target dormancy duration (hours)',
            'Preferred codon set'
        ],
        hidden: [
            '64 neurons (Layer 1)',
            '32 neurons (Layer 2)',
            'ReLU activation'
        ],
        output: [
            '300 neurons (one per amino acid position)',
            'Predicts optimal codon for each position'
        ],
        training: [
            '1500 codon patterns (random + biased)',
            'dFBA + translational dynamics simulation',
            'Adam optimizer, MSE loss'
        ]
    }

    return (
        <>
            <PageHeader
                title="Software Tools"
                subtitle="Computational tools for codon pattern design and metabolic prediction"
                breadcrumb={breadcrumb}
            />

            {/* Overview */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            tag="Tools"
                            title="Software Deliverables"
                            description="TRE-Pod develops open-source tools to enable rational codon-pattern design without bioinformatics expertise."
                            centered={false}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card bg-gradient-to-br from-primary to-primary-dark text-white p-8 mb-8"
                        >
                            <div className="flex items-center mb-4">
                                <Code2 className="w-8 h-8 mr-3" />
                                <h3 className="text-xl font-heading font-bold">Our Approach</h3>
                            </div>
                            <p className="text-white/90 leading-relaxed">
                                Our software integrates machine learning with genome-scale metabolic modeling to predict
                                dormancy outcomes from codon patterns. Users can design optimized sequences through an
                                intuitive web interface and visualize predicted metabolic dynamics in real-time.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Tools */}
            <section className="py-16 bg-accent">
                <div className="container-custom">
                    <SectionHeader
                        tag="Applications"
                        title="Primary Tools"
                    />

                    <div className="space-y-8">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="card"
                            >
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Header */}
                                    <div className="lg:w-80 flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-br from-accent-text to-primary rounded-2xl flex items-center justify-center mb-4">
                                            <tool.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-heading font-bold text-secondary mb-2">
                                            {tool.name}
                                        </h3>
                                        <p className="text-primary font-medium mb-3">{tool.tagline}</p>
                                        <p className="text-secondary-light text-sm mb-4">{tool.description}</p>

                                        {/* Status Badge */}
                                        <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
                                            {tool.status}
                                        </div>

                                        {/* Tech Stack */}
                                        <div>
                                            <p className="text-xs text-secondary-light uppercase font-semibold mb-2">Tech Stack</p>
                                            <div className="flex flex-wrap gap-2">
                                                {tool.techStack.map((tech, i) => (
                                                    <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="flex-grow grid md:grid-cols-2 gap-6">
                                        {tool.features.map((feature, i) => (
                                            <div key={i}>
                                                <h4 className="font-heading font-semibold text-secondary mb-3">
                                                    {feature.title}
                                                </h4>
                                                <ul className="space-y-2">
                                                    {feature.items.map((item, j) => (
                                                        <li key={j} className="flex items-start text-sm text-secondary-light">
                                                            <ArrowRight className="w-4 h-4 mr-2 text-accent-text flex-shrink-0 mt-0.5" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ML Architecture */}
            <section className="py-16">
                <div className="container-custom">
                    <SectionHeader
                        tag="Machine Learning"
                        title="Neural Network Architecture"
                        description="CodonSync uses a feedforward neural network to predict optimal codon patterns."
                    />

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { title: 'Input Layer', items: mlArchitecture.input, color: 'primary' },
                                { title: 'Hidden Layers', items: mlArchitecture.hidden, color: 'primary-light' },
                                { title: 'Output Layer', items: mlArchitecture.output, color: 'accent-text' },
                                { title: 'Training', items: mlArchitecture.training, color: 'secondary' }
                            ].map((layer, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`card border-t-4 border-${layer.color}`}
                                >
                                    <h4 className={`font-heading font-semibold text-${layer.color} mb-3`}>
                                        {layer.title}
                                    </h4>
                                    <ul className="space-y-2">
                                        {layer.items.map((item, i) => (
                                            <li key={i} className="text-sm text-secondary-light">
                                                • {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-8 card bg-accent-text/5 border border-accent-text/20 text-center"
                        >
                            <Cpu className="w-10 h-10 text-accent-text mx-auto mb-2" />
                            <p className="text-lg font-semibold text-secondary">Expected Performance</p>
                            <p className="text-3xl font-heading font-bold text-accent-text">R² {'>'} 0.85</p>
                            <p className="text-sm text-secondary-light">on held-out test set</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Code Repositories */}
            <section className="py-16 bg-accent">
                <div className="container-custom">
                    <SectionHeader
                        tag="Open Source"
                        title="Code Repositories"
                        description="All software will be published on GitHub with comprehensive documentation."
                    />

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {repositories.map((repo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card hover:border-primary border-2 border-transparent transition-colors"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center">
                                        <Github className="w-5 h-5 text-secondary mr-2" />
                                        <h4 className="font-heading font-semibold text-secondary">{repo.name}</h4>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-secondary-light" />
                                </div>
                                <p className="text-secondary-light text-sm mb-3">{repo.description}</p>
                                <div className="flex gap-2">
                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                                        {repo.language}
                                    </span>
                                    <span className="px-2 py-1 bg-accent-text/10 text-accent-text text-xs rounded">
                                        {repo.frameworks}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documentation */}
            <section className="py-16 bg-primary">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Database className="w-12 h-12 text-accent-text mx-auto mb-4" />
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">
                            Comprehensive Documentation
                        </h2>
                        <p className="text-white/80 max-w-2xl mx-auto mb-8">
                            All tools include detailed documentation, tutorials, and example workflows.
                            Our wiki provides protocols, analysis scripts, and troubleshooting guides.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/modeling" className="btn-primary">
                                View Modeling Details
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                            <Link to="/experiments" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                                Experimental Protocols
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Software
