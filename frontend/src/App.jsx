import './App.css'
import { SignUpButton, SignOutButton, SignedIn, SignedOut, useUser, UserButton } from '@clerk/clerk-react'

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