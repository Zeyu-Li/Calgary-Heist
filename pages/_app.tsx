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
      apiKey: "AIzaSyD6kmBY8yHBqmSs8m0IT2QjMxFIv2YP2Tw",
      authDomain: "calgary-hacks-2022.firebaseapp.com",
      projectId: "calgary-hacks-2022",
      storageBucket: "calgary-hacks-2022.appspot.com",
      messagingSenderId: "475987369364",
      appId: "1:475987369364:web:406157bea208bf01f04381",
      measurementId: "G-36BQNL7L59",
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
