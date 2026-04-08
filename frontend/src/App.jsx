import { useUser } from '@clerk/clerk-react'
import { Toaster } from 'react-hot-toast'
import { Navigate, Route, Routes } from 'react-router'
import DashboardPage from './pages/DashboardPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ProblemPage from './pages/ProblemPage.jsx'
import ProblemsPage from './pages/ProblemsPage.jsx'
import SessionPage from './pages/SessionPage.jsx'

const App = () => {
  const { isSignedIn, isLoaded } = useUser()

  if (!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={isSignedIn ? <Navigate to="/dashboard" /> : <HomePage />} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to="/" />} />
        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to="/" />} />
        <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to="/" />} />
        <Route path="/session/:id" element={isSignedIn ? <SessionPage /> : <Navigate to="/" />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App