import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingScreen from './components/LoadingScreen'
import ErrorBoundary from './components/ErrorBoundary'

// Check if initial loading has already been completed this session
const hasLoadedBefore = () => sessionStorage.getItem('siteLoaded') === 'true'

function App() {
    // Only show loading screen on first visit this session
    const [isLoading, setIsLoading] = useState(() => !hasLoadedBefore())

    const handleLoadingComplete = () => {
        sessionStorage.setItem('siteLoaded', 'true')
        setIsLoading(false)
    }

    return (
        <ErrorBoundary>
            {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
            <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
                <Layout>
                    <Outlet />
                </Layout>
            </div>
        </ErrorBoundary>
    )
}

export default App
