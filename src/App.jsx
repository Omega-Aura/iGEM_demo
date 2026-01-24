import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import Description from './pages/Description'
import Engineering from './pages/Engineering'
import Safety from './pages/Safety'
import Team from './pages/Team'
import Experiments from './pages/Experiments'
import Results from './pages/Results'
import Modeling from './pages/Modeling'
import Software from './pages/Software'
import Parts from './pages/Parts'
import Notebook from './pages/Notebook'
import HumanPractices from './pages/HumanPractices'
import Attributions from './pages/Attributions'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    const handleLoadingComplete = () => {
        setIsLoading(false)
    }

    return (
        <>
            {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="description" element={<Description />} />
                    <Route path="engineering" element={<Engineering />} />
                    <Route path="safety" element={<Safety />} />
                    <Route path="team" element={<Team />} />
                    <Route path="experiments" element={<Experiments />} />
                    <Route path="results" element={<Results />} />
                    <Route path="modeling" element={<Modeling />} />
                    <Route path="software" element={<Software />} />
                    <Route path="parts" element={<Parts />} />
                    <Route path="notebook" element={<Notebook />} />
                    <Route path="human-practices" element={<HumanPractices />} />
                    <Route path="attributions" element={<Attributions />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
