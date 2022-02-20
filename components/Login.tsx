import type { NextPage } from "next";
import Heading from "@/components/Head";
import GoogleButton from "react-google-button";
import {
  Auth,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "@firebase/auth";

interface props {
  auth: Auth;
}

const provider = new GoogleAuthProvider();

function SignIn({ auth }: props) {
  const signInWithGoogle = () => {
    signInWithPopup(getAuth(), provider);
  };

  return (
    <div className="flex items-center flex-col">
      <GoogleButton onClick={signInWithGoogle} />
    </div>
  );
}

export default function Index({ auth }: props) {
  return (
    <>
      <Heading title="Login" />
      <div className="fullscreen center transition">
        <div className="login__card">
          <h1>Login</h1>
          <div>
            <SignIn auth={auth} />
          </div>
        </div>
      </div>
    </>
  );
}
