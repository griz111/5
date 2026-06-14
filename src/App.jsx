import { SignInButton, SignOutButton, useUser } from '@clerk/clerk-react'

export default function App() {
  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded) return <div>Загрузка...</div>

  if (!isSignedIn) {
    return (
      <div>
        <h1>RPS Game</h1>
        <SignInButton />
      </div>
    )
  }

  return (
    <div>
      <h1>RPS Game</h1>
      <p>Привет, {user.fullName}!</p>
      <SignOutButton />
    </div>
  )
}