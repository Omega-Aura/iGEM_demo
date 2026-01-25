import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { ErrorPage } from './components/ErrorBoundary'
import './index.css'

// Direct imports - all pages load with initial bundle
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
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: "description", element: <Description /> },
            { path: "engineering", element: <Engineering /> },
            { path: "safety", element: <Safety /> },
            { path: "team", element: <Team /> },
            { path: "experiments", element: <Experiments /> },
            { path: "results", element: <Results /> },
            { path: "modeling", element: <Modeling /> },
            { path: "software", element: <Software /> },
            { path: "parts", element: <Parts /> },
            { path: "notebook", element: <Notebook /> },
            { path: "human-practices", element: <HumanPractices /> },
            { path: "attributions", element: <Attributions /> },
            { path: "*", element: <NotFound /> },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
