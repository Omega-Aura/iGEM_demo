import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const ParallaxHeader = ({ children }) => {
    const containerRef = useRef(null)
    const videoRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const video = videoRef.current

        if (!container || !video) return

        // Create parallax scroll animation
        const ctx = gsap.context(() => {
            // Parallax effect on the video
            gsap.to(video, {
                y: 300,
                scale: 1.2,
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                }
            })
        }, container)

        return () => {
            ctx.revert()
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div ref={containerRef} className="relative min-h-screen overflow-hidden">
            {/* Parallax background with video */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        willChange: 'transform',
                    }}
                >
                    <source src="/intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Dark blue overlay matching reference */}
                <div className="absolute inset-0 bg-secondary/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/30" />

                {/* Floating geometric shapes - Matching reference colors and positions */}
                {/* Top left - Cyan square */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-28 left-[8%] w-8 h-8 bg-primary border-3 border-primary"
                />

                {/* Top right - Lime green square */}
                <motion.div
                    animate={{
                        y: [0, 15, 0],
                        rotate: [0, -8, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-24 right-[10%] w-10 h-10 bg-[#BFFF00] border-3 border-[#BFFF00]"
                />

                {/* Middle left - small purple/pink square */}
                <motion.div
                    animate={{
                        y: [0, -15, 0]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-[12%] w-6 h-6 bg-pastel-purple border-3 border-pastel-purple"
                />

                {/* Center - Pink/magenta square */}
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[55%] left-[42%] w-7 h-7 bg-accent-text border-3 border-accent-text"
                />

                {/* Bottom right - Coral/red square */}
                <motion.div
                    animate={{
                        y: [0, -12, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[28%] right-[30%] w-5 h-5 bg-festival-coral border-3 border-festival-coral"
                />
            </div>

            {/* Content overlay */}
            <div className="relative z-10 min-h-screen flex items-center justify-center">
                {children}
            </div>
        </div>
    )
}

export default ParallaxHeader
