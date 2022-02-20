import { useRouter } from 'next/router'
import { getAuth } from '@firebase/auth'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

export default async function Redirect() {
	const [user, loading] = useAuthState(getAuth());
	if (loading) return ''
	const router = useRouter();
	const db = getFirestore();
	const docRef = await addDoc(collection(db, 'game'), {
		creator: user?.uid
	})
	router.push(`/create/${docRef.id}`)
	return 'yeet'
}
