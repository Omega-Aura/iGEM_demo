import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { BarChart3, Clock, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import { useParallax } from '../hooks/useParallax'

const Results = () => {
    const containerRef = useRef(null)
    useParallax(containerRef)
    
    const breadcrumb = [
        { label: 'Home', link: '/' },
        { label: 'Science', link: '#' },
        { label: 'Results' }
    ]

    return (
        <div ref={containerRef}>
            <PageHeader
                title="Results"
                subtitle="Experimental data and analysis from TRE-Pod validation"
                breadcrumb={breadcrumb}
            />

            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern-accent opacity-10 parallax-bg" />
                <div className="container-custom relative z-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="card border-2 border-dashed border-secondary"
                        >
                            <Clock className="w-16 h-16 text-secondary mx-auto mb-4" />
                            <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                                Results Coming Soon
                            </h2>
                            <p className="text-secondary-light mb-6">
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
                                    <li key={index} className="flex items-center text-secondary-light">
                                        <BarChart3 className="w-4 h-4 mr-2 text-accent-text" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/experiments" className="btn-secondary">
                                View Experimental Design
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Results
