import { useUser } from '@clerk/clerk-react'
import { Routes, Route, Navigate } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import ProblemsPage from './pages/ProblemsPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import ProblemPage from './pages/ProblemPage.jsx'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const { isSignedIn, isLoaded } = useUser()

  if (!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={isSignedIn ? <Navigate to="/dashboard" /> : <HomePage />} />
        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to="/" />} />
        <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to="/" />} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to="/" />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App