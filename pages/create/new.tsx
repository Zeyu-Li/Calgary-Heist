import { useRouter } from "next/router";
import { getAuth } from "@firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Redirect() {
  const router = useRouter();
  const [user, loading] = useAuthState(getAuth());
  const db = getFirestore();
  useEffect(() => {
    const init = async () => {
      let docRef: any;
      try {
        docRef = await addDoc(collection(db, "game"), {
          creator: user?.uid,
        });
      } catch (err) {
        alert(`Could not create game ${err}`);
        if (router) router.push(`/game/`);
      }
      if (router) router.push(`/create/${docRef.id}`);
    };
    if (!loading) init();
  }, [loading, router, db]);
  return <></>;
}
