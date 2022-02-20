import type { NextPage } from 'next'
import Head from 'next/head'
import wrap from '@elm-react/component'
import Login from '../elm/Login.elm'

const Elm = wrap(Login)

export default function Index() {
	return <>
		<Head>
			<title>Study Buddy</title>
		</Head>
		<Elm />
	</>
}
