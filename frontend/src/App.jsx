import './App.css'
import { SignUpButton, SignOutButton, SignedIn, SignedOut, useUser, UserButton } from '@clerk/clerk-react'

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
  const { user } = useUser()  // ✅ this was missing

  return (
    <div className="App">
      <h1>Welcome to Vite + React</h1>
        <SignedIn>
          <p>Hello, {user?.firstName ?? user?.emailAddresses[0].emailAddress}!</p>
          <SignOutButton />
        </SignedIn>
        
        <SignedOut>
          <SignUpButton mode="redirect"></SignUpButton>
        </SignedOut>
        <UserButton /> {/* ✅ added UserButton for user profile access */}
    </div>
  )
}

export default App