import { memo } from 'react'
import { motion } from 'framer-motion'

/**
 * Reusable floating shapes component for decorative animated backgrounds
 * @param {Object} props
 * @param {'default' | 'hero' | 'error' | 'loading' | 'header'} props.variant - Predefined shape configuration
 * @param {Array} props.shapes - Custom shape configuration (overrides variant)
 * @param {string} props.className - Additional container classes
 * @param {string} props.borderClass - Override default border class (default: 'border-3 border-secondary')
 */

const shapeVariants = {
    default: [
        { position: 'top-20 left-[15%]', size: 'w-10 h-10', color: 'bg-primary', duration: 4, yRange: [-20, 0] },
        { position: 'top-32 right-[20%]', size: 'w-8 h-8', color: 'bg-festival-lime', duration: 5, yRange: [15, 0], delay: 0.5 },
        { position: 'bottom-32 left-[25%]', size: 'w-12 h-12', color: 'bg-accent-text', duration: 6, yRange: [-25, 0], delay: 1 },
        { position: 'bottom-40 right-[30%]', size: 'w-6 h-6', color: 'bg-festival-coral', duration: 4.5, yRange: [20, 0], delay: 0.3 },
    ],
    hero: [
        { position: 'top-20 right-20', size: 'w-12 h-12', color: 'bg-primary', duration: 6, yRange: [-20, 0], rotateRange: [5, 0] },
        { position: 'top-40 left-20', size: 'w-8 h-8', color: 'bg-festival-lime', duration: 7, yRange: [15, 0], rotateRange: [-10, 0] },
        { position: 'bottom-32 left-1/4', size: 'w-16 h-16', color: 'bg-accent-text', duration: 8, yRange: [-25, 0] },
        { position: 'bottom-40 right-1/4', size: 'w-6 h-6', color: 'bg-festival-coral', duration: 5, yRange: [20, 0], rotateRange: [15, 0] },
        { position: 'top-1/3 right-1/3', size: 'w-10 h-10', color: 'bg-pastel-purple', duration: 9, yRange: [-15, 0] },
    ],
    error: [
        { position: 'top-20 left-[10%]', size: 'w-16 h-16', color: 'bg-primary', duration: 4, yRange: [-20, 0], rotateRange: [5, 0] },
        { position: 'top-40 right-[15%]', size: 'w-12 h-12', color: 'bg-festival-lime', duration: 3, yRange: [15, 0], rotateRange: [-5, 0], delay: 0.5, rounded: true },
        { position: 'bottom-32 left-[20%]', size: 'w-10 h-10', color: 'bg-pastel-purple', duration: 5, yRange: [-15, 0], rotateRange: [10, 0], delay: 1, triangle: true },
        { position: 'bottom-40 right-[25%]', size: 'w-14 h-14', color: 'bg-festival-coral', duration: 4.5, yRange: [20, 0], rotateRange: [-8, 0], delay: 0.3 },
    ],
    loading: [
        { position: 'top-20 left-[15%]', size: 'w-10 h-10', color: 'bg-primary', duration: 3, yRange: [-20, 0], rotateRange: [10, 0] },
        { position: 'top-32 right-[20%]', size: 'w-8 h-8', color: 'bg-festival-lime', duration: 4, yRange: [15, 0], rotateRange: [-8, 0] },
        { position: 'bottom-32 left-[25%]', size: 'w-12 h-12', color: 'bg-accent-text', duration: 5, yRange: [-25, 0] },
        { position: 'bottom-40 right-[30%]', size: 'w-6 h-6', color: 'bg-festival-coral', duration: 3.5, yRange: [20, 0], rotateRange: [15, 0] },
    ],
    header: [
        { position: 'top-24 right-20', size: 'w-8 h-8', color: 'bg-primary', duration: 5, yRange: [-15, 0], rotateRange: [10, 0] },
        { position: 'top-32 left-16', size: 'w-6 h-6', color: 'bg-festival-lime', duration: 6, yRange: [12, 0], rotateRange: [-8, 0] },
        { position: 'bottom-20 left-1/3', size: 'w-10 h-10', color: 'bg-accent-text', duration: 7, yRange: [-20, 0] },
    ],
}

const FloatingShapes = memo(({ variant = 'default', shapes, className = '', borderClass = 'border-3 border-secondary' }) => {
    const shapeConfig = shapes || shapeVariants[variant] || shapeVariants.default

    return (
        <div className={`pointer-events-none ${className}`} aria-hidden="true">
            {shapeConfig.map((shape, index) => {
                const borderOverride = shape.borderClass || borderClass
                const baseClasses = `absolute ${shape.position} ${shape.size} ${shape.color} ${borderOverride}`
                const roundedClass = shape.rounded ? 'rounded-full' : ''
                const triangleStyle = shape.triangle
                    ? { clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }
                    : {}

                const animateProps = {
                    y: [0, shape.yRange[0], shape.yRange[1] || 0],
                }

                if (shape.rotateRange) {
                    animateProps.rotate = [0, shape.rotateRange[0], shape.rotateRange[1] || 0]
                }

                return (
                    <motion.div
                        key={index}
                        className={`${baseClasses} ${roundedClass}`}
                        style={triangleStyle}
                        animate={animateProps}
                        transition={{
                            duration: shape.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: shape.delay || 0,
                        }}
                    />
                )
            })}
        </div>
    )
})

FloatingShapes.displayName = 'FloatingShapes'

export default FloatingShapes
