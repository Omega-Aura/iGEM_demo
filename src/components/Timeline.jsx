import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const TimelineItem = ({
    step,
    title,
    description,
    details,
    isLast = false,
    delay = 0
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="relative pl-8 pb-8"
        >
            {/* Vertical line */}
            {!isLast && (
                <div className="absolute left-[11px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20" />
            )}

            {/* Step indicator */}
            <div className="absolute left-0 top-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                {step}
            </div>

            <div className="card ml-4">
                <h4 className="text-lg font-heading font-semibold text-secondary mb-2">
                    {title}
                </h4>
                <p className="text-secondary-light mb-3">{description}</p>
                {details && (
                    <ul className="space-y-1">
                        {details.map((detail, index) => (
                            <li key={index} className="flex items-start text-sm text-secondary-light">
                                <ArrowRight className="w-4 h-4 mr-2 text-accent-text flex-shrink-0 mt-0.5" />
                                {detail}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.div>
    )
}

const Timeline = ({ items }) => {
    return (
        <div className="relative">
            {items.map((item, index) => (
                <TimelineItem
                    key={index}
                    step={index + 1}
                    title={item.title}
                    description={item.description}
                    details={item.details}
                    isLast={index === items.length - 1}
                    delay={index * 0.1}
                />
            ))}
        </div>
    )
}

export default Timeline
