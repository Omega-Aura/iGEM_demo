import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useParallax = (containerRef) => {
    useEffect(() => {
        if (!containerRef.current) return

        const ctx = gsap.context(() => {
            // Parallax for background layers
            const backgrounds = containerRef.current.querySelectorAll('.parallax-bg')
            backgrounds.forEach((bg) => {
                gsap.to(bg, {
                    yPercent: 30,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: bg.closest('section') || bg,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    }
                })
            })

            // Parallax for slow elements
            const slowElements = containerRef.current.querySelectorAll('.parallax-slow')
            slowElements.forEach((el) => {
                gsap.to(el, {
                    yPercent: 20,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: el.closest('section') || el,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.5,
                    }
                })
            })

            // Parallax for medium elements
            const mediumElements = containerRef.current.querySelectorAll('.parallax-medium')
            mediumElements.forEach((el) => {
                gsap.to(el, {
                    yPercent: 15,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: el.closest('section') || el,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.2,
                    }
                })
            })

            // Parallax for fast elements
            const fastElements = containerRef.current.querySelectorAll('.parallax-fast')
            fastElements.forEach((el) => {
                gsap.to(el, {
                    yPercent: 10,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: el.closest('section') || el,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 0.8,
                    }
                })
            })
        }, containerRef)

        return () => {
            ctx.revert()
        }
    }, [containerRef])
}
