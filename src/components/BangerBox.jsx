import { memo } from 'react'
import { motion } from 'framer-motion'

const BangerBox = memo(({ children, className = "", badgeText = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay,
                type: "spring",
                bounce: 0.4
            }}
            whileHover={{
                scale: 1.02,
                rotate: 1,
                transition: {
                    duration: 0.15,
                    ease: "easeOut"
                }
            }}
            className={`relative border-[3px] border-black p-8 ${className}`}
            style={{
                borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
                boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)"
            }}
        >
            {badgeText && (
                <div
                    className="absolute -top-4 -right-4 bg-white border-[3px] border-black px-4 py-1 z-10"
                    style={{
                        transform: "rotate(3deg)",
                        boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)"
                    }}
                >
                    <span className="font-comic text-xl tracking-wider uppercase">
                        {badgeText}
                    </span>
                </div>
            )}

            <div className="relative z-0">
                {children}
            </div>
        </motion.div>
    )
})

BangerBox.displayName = 'BangerBox'

export default BangerBox
