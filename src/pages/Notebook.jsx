import { motion } from 'framer-motion'
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const Notebook = () => {
    const breadcrumb = [
        { label: 'Home', link: '/' },
        { label: 'Science', link: '#' },
        { label: 'Notebook' }
    ]

    return (
        <>
            <PageHeader
                title="Lab Notebook"
                subtitle="Detailed records of our experimental work"
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
                            <BookOpen className="w-16 h-16 text-warm-orange mx-auto mb-4" />
                            <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                                Notebook Coming Soon
                            </h2>
                            <p className="text-charcoal-light mb-6">
                                Daily experimental records will be documented here as wet lab work progresses.
                                The notebook will include:
                            </p>
                            <ul className="text-left max-w-md mx-auto space-y-2 mb-8">
                                {[
                                    'Daily experimental protocols and observations',
                                    'Strain construction progress',
                                    'Assay results and raw data',
                                    'Troubleshooting notes',
                                    'Timeline of project milestones'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-charcoal-light">
                                        <Calendar className="w-4 h-4 mr-2 text-vibrant-green" />
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

export default Notebook
