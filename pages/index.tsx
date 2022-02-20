import type { NextPage } from "next";
import Head from "next/head";
import wrap from "@elm-react/component";
import Home from "../elm/Home.elm";
import Heading from "components/Head";

const Elm = wrap(Home);

export default function Index() {
  return (
    <>
      <Heading />
      <Elm />
    </>
  );
}
