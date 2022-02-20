import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { initializeApp, getApp, FirebaseError } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "@/components/Login";

const app = (() => {
  try {
    return initializeApp({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_ID,
      appId: process.env.NEXT_PUBLIC_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
    });
  } catch (error) {
    if (error instanceof FirebaseError) return getApp();
  }
})();
const auth = getAuth(app);

export default function MyApp({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  if (loading) return "";
  const requireAuthentication = () => {
    if (/^\/$/.test(router.route)) return false;
    return true;
  };
  if (requireAuthentication() && !user) return <Login auth={auth} />;

  return <Component {...pageProps} />;
}
