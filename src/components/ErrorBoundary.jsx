import { Component } from 'react'
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AlertTriangle, Home, RefreshCw, Bug } from 'lucide-react'
import FloatingShapes from './FloatingShapes'

// Custom error variant with coral/purple colors
const errorShapes = [
    { position: 'top-20 left-[10%]', size: 'w-16 h-16', color: 'bg-festival-coral', duration: 4, yRange: [-20, 0], rotateRange: [5, 0] },
    { position: 'bottom-32 right-[15%]', size: 'w-12 h-12', color: 'bg-pastel-purple', duration: 3, yRange: [15, 0], delay: 0.5, rounded: true },
]

// Error page component for React Router error handling
export const ErrorPage = () => {
    const error = useRouteError()

    let title = "Something Went Wrong"
    let message = "An unexpected error occurred. Please try again."
    let statusCode = null

    if (isRouteErrorResponse(error)) {
        statusCode = error.status
        if (error.status === 404) {
            title = "Page Not Found"
            message = "The page you're looking for doesn't exist."
        } else if (error.status === 500) {
            title = "Server Error"
            message = "Something went wrong on our end. Please try again later."
        } else {
            title = `Error ${error.status}`
            message = error.statusText || message
        }
    } else if (error instanceof Error) {
        message = error.message
    }

    return (
        <div className="min-h-screen bg-accent flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 grid-pattern-light opacity-50" />

            {/* Floating shapes */}
            <FloatingShapes shapes={errorShapes} />

            {/* Main content */}
            <motion.div
                className="relative z-10 text-center max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Error Icon */}
                <motion.div
                    className="mb-8 flex justify-center"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="w-32 h-32 bg-festival-coral border-3 border-secondary flex items-center justify-center">
                        <AlertTriangle className="w-16 h-16 text-white" />
                    </div>
                </motion.div>

                {/* Status code */}
                {statusCode && (
                    <motion.p
                        className="text-6xl font-comic text-secondary mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {statusCode}
                    </motion.p>
                )}

                {/* Message */}
                <motion.div
                    className="bg-white border-3 border-secondary p-8 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h1 className="text-2xl md:text-3xl font-comic text-secondary mb-4">
                        {title}
                    </h1>
                    <p className="text-secondary/70 text-lg">
                        {message}
                    </p>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link
                        to="/"
                        className="btn-primary inline-flex items-center justify-center gap-2"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <button
                        onClick={() => window.location.reload()}
                        className="btn-outline inline-flex items-center justify-center gap-2"
                    >
                        <RefreshCw className="w-5 h-5" />
                        Try Again
                    </button>
                </motion.div>

                {/* Debug info in development */}
                {import.meta.env.DEV && error instanceof Error && (
                    <motion.details
                        className="mt-8 text-left bg-secondary/5 border-2 border-secondary/20 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <summary className="cursor-pointer text-secondary/70 flex items-center gap-2">
                            <Bug className="w-4 h-4" />
                            Technical Details (Dev Only)
                        </summary>
                        <pre className="mt-4 text-xs text-secondary/60 overflow-auto">
                            {error.stack}
                        </pre>
                    </motion.details>
                )}
            </motion.div>
        </div>
    )
}

// Class-based Error Boundary for catching render errors
class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-accent flex items-center justify-center px-4">
                    <div className="text-center max-w-2xl">
                        <div className="w-32 h-32 bg-festival-coral border-3 border-secondary flex items-center justify-center mx-auto mb-8">
                            <AlertTriangle className="w-16 h-16 text-white" />
                        </div>
                        <div className="bg-white border-3 border-secondary p-8 mb-8">
                            <h1 className="text-2xl md:text-3xl font-comic text-secondary mb-4">
                                Something Went Wrong
                            </h1>
                            <p className="text-secondary/70 text-lg">
                                {this.state.error?.message || 'An unexpected error occurred.'}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/"
                                className="btn-primary inline-flex items-center justify-center gap-2"
                            >
                                <Home className="w-5 h-5" />
                                Back to Home
                            </a>
                            <button
                                onClick={() => window.location.reload()}
                                className="btn-outline inline-flex items-center justify-center gap-2"
                            >
                                <RefreshCw className="w-5 h-5" />
                                Reload Page
                            </button>
                        </div>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
