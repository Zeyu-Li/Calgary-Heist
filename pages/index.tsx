import type { NextPage } from 'next'
import Head from 'next/head'
import wrap from '@elm-react/component'
import Home from '@/elm/Home.elm'

const Elm = wrap(Home)

export default function Index() {
  return <>
    <Head>
      <title>Study Buddy</title>
    </Head>
    <Elm />
  </>
}
