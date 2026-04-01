import { SignUpButton, SignOutButton, SignedIn, SignedOut, useUser, UserButton } from '@clerk/clerk-react'
import { Routes, Route } from 'react-router'  // ✅ added for routing support
import HomePage from './pages/HomePage.jsx'
import ProblemsPage from './pages/ProblemsPage.jsx'
import { Toaster } from 'react-hot-toast'


/**
 * Render the application's root UI with authentication-aware content.
 *
 * When a user is signed in, displays a greeting using the user's first name
 * or first email address and a sign-out control; when signed out, displays
 * a sign-up control. Always includes a user profile button.
 *
 * @returns {JSX.Element} The root React element containing the authentication-driven UI.
 */
function App() {
  const { isSignedIn } = useUser()  // ✅ this was missing

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <HomePage />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App