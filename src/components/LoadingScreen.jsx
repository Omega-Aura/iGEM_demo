import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FloatingShapes from './FloatingShapes'

// Video URL to preload - must match ParallaxHeader
const VIDEO_SRC = '/intro.mp4'
const MIN_LOAD_TIME = 2000 // Minimum time to show loading screen (UX)
const MAX_LOAD_TIME = 15000 // Maximum wait time before proceeding anyway

const LOADING_MESSAGES = [
    'INITIALIZING...',
    'LOADING VIDEO...',
    'BUFFERING CONTENT...',
    'PREPARING VISUALS...',
    'ALMOST THERE...',
    'READY!'
]

const LoadingScreen = ({ onLoadingComplete }) => {
    const [displayProgress, setDisplayProgress] = useState(0)
    const [videoProgress, setVideoProgress] = useState(0)
    const [loadingText, setLoadingText] = useState('INITIALIZING...')
    const [isComplete, setIsComplete] = useState(false)
    const [isVideoReady, setIsVideoReady] = useState(false)
    const startTimeRef = useRef(Date.now())
    const isVideoReadyRef = useRef(false)

    // Preload video and track actual progress
    useEffect(() => {
        const video = document.createElement('video')
        video.preload = 'auto'
        video.muted = true
        video.playsInline = true

        const handleProgress = () => {
            if (video.buffered.length > 0 && video.duration > 0) {
                const bufferedEnd = video.buffered.end(video.buffered.length - 1)
                const percent = Math.min((bufferedEnd / video.duration) * 100, 100)
                setVideoProgress(percent)
            }
        }

        const handleCanPlayThrough = () => {
            setVideoProgress(100)
            setIsVideoReady(true)
            isVideoReadyRef.current = true
        }

        const handleError = () => {
            console.warn('Video preload failed - proceeding anyway')
            setIsVideoReady(true)
            isVideoReadyRef.current = true
            setVideoProgress(100)
        }

        video.addEventListener('progress', handleProgress)
        video.addEventListener('canplaythrough', handleCanPlayThrough)
        video.addEventListener('loadeddata', () => setVideoProgress(prev => Math.max(prev, 30)))
        video.addEventListener('error', handleError)

        video.src = VIDEO_SRC
        video.load()

        // Fallback timeout - don't block forever on very slow connections
        const fallbackTimeout = setTimeout(() => {
            if (!isVideoReadyRef.current) {
                console.warn('Video preload timeout - proceeding')
                setIsVideoReady(true)
                isVideoReadyRef.current = true
                setVideoProgress(100)
            }
        }, MAX_LOAD_TIME)

        return () => {
            clearTimeout(fallbackTimeout)
            video.removeEventListener('progress', handleProgress)
            video.removeEventListener('canplaythrough', handleCanPlayThrough)
            video.removeEventListener('error', handleError)
            video.src = ''
        }
    }, [])

    // Animate display progress smoothly towards video progress
    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayProgress(prev => {
                // Smoothly approach video progress, but cap at 95% until video is ready
                const target = isVideoReady ? 100 : Math.min(videoProgress, 95)
                const diff = target - prev
                const increment = Math.max(diff * 0.1, 0.5) // Smooth easing

                if (diff <= 0.5) return target
                return prev + increment
            })
        }, 50)

        return () => clearInterval(interval)
    }, [videoProgress, isVideoReady])

    // Update loading text based on progress
    useEffect(() => {
        if (displayProgress < 15) {
            setLoadingText(LOADING_MESSAGES[0])
        } else if (displayProgress < 35) {
            setLoadingText(LOADING_MESSAGES[1])
        } else if (displayProgress < 55) {
            setLoadingText(LOADING_MESSAGES[2])
        } else if (displayProgress < 75) {
            setLoadingText(LOADING_MESSAGES[3])
        } else if (displayProgress < 98) {
            setLoadingText(LOADING_MESSAGES[4])
        } else {
            setLoadingText(LOADING_MESSAGES[5])
        }
    }, [displayProgress])

    // Complete loading when video is ready AND minimum time has passed
    useEffect(() => {
        if (isVideoReady && displayProgress >= 99) {
            const elapsed = Date.now() - startTimeRef.current
            const remainingMinTime = Math.max(0, MIN_LOAD_TIME - elapsed)

            const completeTimeout = setTimeout(() => {
                setIsComplete(true)
                setTimeout(() => {
                    onLoadingComplete?.()
                }, 500)
            }, remainingMinTime + 300)

            return () => clearTimeout(completeTimeout)
        }
    }, [isVideoReady, displayProgress, onLoadingComplete])

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
                    <FloatingShapes variant="loading" />

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
                                    style={{ width: `${displayProgress}%` }}
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
                                {Math.round(displayProgress)}%
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
