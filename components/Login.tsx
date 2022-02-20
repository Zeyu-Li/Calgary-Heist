import type { NextPage } from 'next'
import Head from 'next/head'
import GoogleButton from 'react-google-button'
import { Auth, getAuth, signInWithPopup, GoogleAuthProvider } from '@firebase/auth'

interface props {
  auth: Auth
}

const provider = new GoogleAuthProvider()

function SignIn({ auth }: props) {
  const signInWithGoogle = () => {
    signInWithPopup(getAuth(), provider)
  }

  return <div className="flex items-center flex-col">
    <GoogleButton onClick={signInWithGoogle} />
  </div>
}

export default function Index({ auth }: props) {
  return <>
    <Head>
      <title>Study Buddy | Login</title>
    </Head>
    <div className="fullscreen">
      <div className="card">
        <h1>Login</h1>
        <SignIn auth={auth} />
      </div>
    </div>
  </>
}
