import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0)
    const [loadingText, setLoadingText] = useState('INITIALIZING...')
    const [isComplete, setIsComplete] = useState(false)

    const loadingMessages = [
        'INITIALIZING...',
        'LOADING ASSETS...',
        'STACKING LAYERS...',
        'COMPILING DATA...',
        'ALMOST THERE...',
        'READY!'
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + Math.random() * 15

                // Update loading text based on progress
                if (newProgress < 20) {
                    setLoadingText(loadingMessages[0])
                } else if (newProgress < 40) {
                    setLoadingText(loadingMessages[1])
                } else if (newProgress < 60) {
                    setLoadingText(loadingMessages[2])
                } else if (newProgress < 80) {
                    setLoadingText(loadingMessages[3])
                } else if (newProgress < 95) {
                    setLoadingText(loadingMessages[4])
                } else {
                    setLoadingText(loadingMessages[5])
                }

                if (newProgress >= 100) {
                    clearInterval(interval)
                    setTimeout(() => {
                        setIsComplete(true)
                        setTimeout(() => {
                            onLoadingComplete?.()
                        }, 500)
                    }, 300)
                    return 100
                }
                return newProgress
            })
        }, 150)

        return () => clearInterval(interval)
    }, [onLoadingComplete])

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-accent overflow-hidden"
                >
                    {/* Grid pattern background */}
                    <div className="absolute inset-0 grid-pattern-primary opacity-50" />

                    {/* Floating geometric shapes */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 left-[15%] w-10 h-10 bg-primary border-3 border-secondary"
                    />
                    <motion.div
                        animate={{
                            y: [0, 15, 0],
                            rotate: [0, -8, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-32 right-[20%] w-8 h-8 bg-[#BFFF00] border-3 border-secondary"
                    />
                    <motion.div
                        animate={{
                            y: [0, -25, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-32 left-[25%] w-12 h-12 bg-accent-text border-3 border-secondary"
                    />
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, 15, 0]
                        }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-40 right-[30%] w-6 h-6 bg-festival-coral border-3 border-secondary"
                    />

                    {/* Main content */}
                    <div className="relative z-10 text-center px-4">
                        {/* Logo */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="mb-8"
                        >
                            <div className="w-20 h-20 mx-auto bg-primary border-4 border-secondary flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]">
                                <img
                                    src="/logo.png"
                                    alt="TRE-Pod Logo"
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* LOADING text with 3D effect */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="relative mb-12"
                        >
                            <h1
                                className="text-6xl md:text-8xl font-heading font-black tracking-tight"
                                style={{
                                    color: '#FF6B6B',
                                    textShadow: `
                                        4px 4px 0 #1a1a1a,
                                        8px 8px 0 rgba(26,26,26,0.5)
                                    `
                                }}
                            >
                                LOADING
                            </h1>
                        </motion.div>

                        {/* Progress bar container */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="w-[280px] md:w-[400px] mx-auto mb-6"
                        >
                            {/* Progress bar background */}
                            <div className="relative h-12 bg-secondary border-4 border-secondary shadow-[6px_6px_0px_0px_rgba(26,26,26,0.5)]">
                                {/* Progress fill */}
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-primary"
                                    style={{ width: `${progress}%` }}
                                    transition={{ duration: 0.1 }}
                                />
                                {/* Animated stripes overlay */}
                                <div
                                    className="absolute inset-0 opacity-20"
                                    style={{
                                        backgroundImage: `repeating-linear-gradient(
                                            45deg,
                                            transparent,
                                            transparent 10px,
                                            rgba(255,255,255,0.3) 10px,
                                            rgba(255,255,255,0.3) 20px
                                        )`,
                                        animation: 'stripes 1s linear infinite'
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Loading text badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="inline-block"
                        >
                            <div className="bg-primary px-6 py-3 border-4 border-secondary shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
                                <span className="font-heading font-bold text-secondary text-sm md:text-base tracking-widest">
                                    {loadingText}
                                </span>
                            </div>
                        </motion.div>

                        {/* Progress percentage */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-6"
                        >
                            <span className="font-heading font-bold text-secondary text-2xl">
                                {Math.round(progress)}%
                            </span>
                        </motion.div>
                    </div>

                    {/* Bottom decoration */}
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-secondary" />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default LoadingScreen
