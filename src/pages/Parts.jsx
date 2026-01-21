import { motion } from 'framer-motion'
import { Dna, Clock, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const Parts = () => {
    const breadcrumb = [
        { label: 'Home', link: '/' },
        { label: 'Science', link: '#' },
        { label: 'Parts' }
    ]

    const plannedParts = [
        {
            name: 'gapA-rare',
            type: 'Coding',
            description: 'GAPDH gene with engineered rare valine codons (30-40% GTN frequency)'
        },
        {
            name: 'pfkA-rare',
            type: 'Coding',
            description: 'Phosphofructokinase with coordinated codon stalling pattern'
        },
        {
            name: 'tRNA-Val-inducible',
            type: 'Regulatory',
            description: 'aTc-inducible valine tRNA expression system for dormancy control'
        },
        {
            name: 'Pdps-GFP',
            type: 'Reporter',
            description: 'Dormancy-inducible promoter driving GFP for state visualization'
        }
    ]

    return (
        <>
            <PageHeader
                title="Parts"
                subtitle="Biological parts for the TRE-Pod dormancy system"
                breadcrumb={breadcrumb}
            />

            <section className="py-16">
                <div className="container-custom">
                    <SectionHeader
                        tag="Registry"
                        title="Planned Parts"
                        description="Parts to be submitted to the iGEM Registry"
                    />

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4 mb-12">
                            {plannedParts.map((part, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card flex items-center gap-4"
                                >
                                    <div className="w-12 h-12 bg-deep-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Dna className="w-6 h-6 text-deep-blue" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-heading font-semibold text-charcoal">{part.name}</h4>
                                            <span className="px-2 py-0.5 bg-vibrant-green/10 text-vibrant-green text-xs rounded-full">
                                                {part.type}
                                            </span>
                                        </div>
                                        <p className="text-sm text-charcoal-light">{part.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card border-2 border-dashed border-warm-orange text-center"
                        >
                            <Clock className="w-12 h-12 text-warm-orange mx-auto mb-4" />
                            <h3 className="text-xl font-heading font-semibold text-charcoal mb-2">
                                Sequences Coming Soon
                            </h3>
                            <p className="text-charcoal-light mb-4">
                                Full sequences and characterization data will be added as parts are constructed and validated.
                            </p>
                            <a href="/experiments" className="btn-secondary">
                                View Experimental Design
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Parts
