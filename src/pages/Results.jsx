import { motion } from 'framer-motion'
import { BarChart3, Clock, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const Results = () => {
    const breadcrumb = [
        { label: 'Home', link: '/' },
        { label: 'Science', link: '#' },
        { label: 'Results' }
    ]

    return (
        <>
            <PageHeader
                title="Results"
                subtitle="Experimental data and analysis from TRE-Pod validation"
                breadcrumb={breadcrumb}
            />

            <section className="py-20">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="card border-2 border-dashed border-warm-orange"
                        >
                            <Clock className="w-16 h-16 text-warm-orange mx-auto mb-4" />
                            <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                                Results Coming Soon
                            </h2>
                            <p className="text-charcoal-light mb-6">
                                Our experimental validation is currently in progress. This page will be updated
                                with comprehensive results including:
                            </p>
                            <ul className="text-left max-w-md mx-auto space-y-2 mb-8">
                                {[
                                    'Ribo-Seq ribosome profiling data',
                                    'ATP and metabolite measurements',
                                    'Growth curves and viability assays',
                                    'Computational model validation',
                                    'Statistical analysis and comparisons'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-charcoal-light">
                                        <BarChart3 className="w-4 h-4 mr-2 text-vibrant-green" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
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

export default Results
