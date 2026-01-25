import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FloatingShapes from './FloatingShapes'

gsap.registerPlugin(ScrollTrigger)

// Custom parallax shapes with matching border colors
const parallaxShapes = [
    { position: 'top-28 left-[8%]', size: 'w-8 h-8', color: 'bg-primary', duration: 6, yRange: [-20, 0], rotateRange: [5, 0], borderClass: 'border-3 border-primary' },
    { position: 'top-24 right-[10%]', size: 'w-10 h-10', color: 'bg-festival-lime', duration: 5, yRange: [15, 0], rotateRange: [-8, 0], borderClass: 'border-3 border-festival-lime' },
    { position: 'top-1/2 left-[12%]', size: 'w-6 h-6', color: 'bg-pastel-purple', duration: 7, yRange: [-15, 0], borderClass: 'border-3 border-pastel-purple' },
    { position: 'top-[55%] left-[42%]', size: 'w-7 h-7', color: 'bg-accent-text', duration: 8, yRange: [20, 0], rotateRange: [10, 0], borderClass: 'border-3 border-accent-text' },
    { position: 'bottom-[28%] right-[30%]', size: 'w-5 h-5', color: 'bg-festival-coral', duration: 6, yRange: [-12, 0], borderClass: 'border-3 border-festival-coral' },
]

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
                <FloatingShapes shapes={parallaxShapes} />
            </div>

            {/* Content overlay */}
            <div className="relative z-10 min-h-screen flex items-center justify-center">
                {children}
            </div>
        </div>
    )
}

export default ParallaxHeader
