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
            transition={{ duration: 0.5 }}
            className="w-full max-w-full overflow-x-auto rounded-xl shadow-card"
        >
            <table className="w-full min-w-[600px]">
                {caption && (
                    <caption className="text-left text-secondary-light text-sm mb-2 px-4">
                        {caption}
                    </caption>
                )}
                <thead>
                    <tr className="bg-primary text-white">
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className={`px-4 py-3 text-left font-semibold ${highlightColumn === index ? 'bg-accent-text' : ''
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
                            className={`border-b border-accent-dark/10 last:border-none ${variant === 'striped' && rowIndex % 2 === 1 ? 'bg-accent/50' : 'bg-white'
                                } hover:bg-accent transition-colors`}
                        >
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className={`px-4 py-3 text-secondary ${highlightColumn === cellIndex ? 'bg-accent-text/10 font-medium' : ''
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
