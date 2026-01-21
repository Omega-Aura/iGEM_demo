import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
            </div>

            {/* Content overlay */}
            <div className="relative z-10 min-h-screen flex items-center justify-center">
                {children}
            </div>
        </div>
    )
}

export default ParallaxHeader
