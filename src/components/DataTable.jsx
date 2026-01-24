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
            className="w-full max-w-full overflow-x-auto border-3 border-secondary bg-white"
        >
            <table className="w-full min-w-[600px]">
                {caption && (
                    <caption className="text-left text-secondary/60 text-sm mb-2 px-4 py-2 font-semibold">
                        {caption}
                    </caption>
                )}
                <thead>
                    <tr className="bg-accent-text text-white">
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className={`px-5 py-4 text-left font-heading font-bold uppercase text-sm tracking-wider border-r-2 border-white/20 last:border-r-0 ${highlightColumn === index ? 'bg-primary text-secondary' : ''}`}
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
                            className={`border-b-2 border-secondary/10 last:border-none ${variant === 'striped' && rowIndex % 2 === 1 ? 'bg-pastel-mint/30' : 'bg-white'
                                } hover:bg-[#BFFF00]/30 transition-colors`}
                        >
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className={`px-5 py-4 text-secondary border-r border-secondary/10 last:border-r-0 ${highlightColumn === cellIndex ? 'bg-primary/10 text-primary font-semibold' : ''
                                        } ${cellIndex === 0 ? 'font-heading font-semibold' : ''}`}
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
