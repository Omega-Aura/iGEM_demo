import { motion } from 'framer-motion'

const DataTable = ({
    headers,
    rows,
    caption,
    highlightColumn,
    variant = 'default' // 'default', 'striped', 'bordered'
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto rounded-xl shadow-card"
        >
            <table className="w-full">
                {caption && (
                    <caption className="text-left text-charcoal-light text-sm mb-2 px-4">
                        {caption}
                    </caption>
                )}
                <thead>
                    <tr className="bg-deep-blue text-white">
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className={`px-4 py-3 text-left font-semibold ${highlightColumn === index ? 'bg-vibrant-green' : ''
                                    }`}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`border-b border-light-gray last:border-none ${variant === 'striped' && rowIndex % 2 === 1 ? 'bg-light-gray/50' : 'bg-white'
                                } hover:bg-light-gray transition-colors`}
                        >
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className={`px-4 py-3 text-charcoal ${highlightColumn === cellIndex ? 'bg-vibrant-green/10 font-medium' : ''
                                        } ${cellIndex === 0 ? 'font-medium' : ''}`}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    )
}

export default DataTable
