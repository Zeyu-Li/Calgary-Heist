import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import Elm from 'react-elm-components'
import wrap from '@elm-react/component'
import Home from '../elm/Home.elm'

const ElmHome = wrap(Home)

export default function Index() {
  return <ElmHome />
}
