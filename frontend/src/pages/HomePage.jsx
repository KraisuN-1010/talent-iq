import React from 'react'
import { SignUpButton, SignOutButton, SignedIn, SignedOut, useUser, UserButton } from '@clerk/clerk-react'
import toast from 'react-hot-toast'

function HomePage() {
  const { user } = useUser()

  return (
    <div>
      <h1>Welcome to Vite + React</h1>
      <SignedIn>
        <p>Hello, {user?.firstName ?? user?.emailAddresses[0].emailAddress}!</p>
        <SignOutButton />
      </SignedIn>
      
      <SignedOut>
        <SignUpButton mode="redirect"></SignUpButton>
      </SignedOut>
      <UserButton /> 
    </div>
  )
}

export default HomePage