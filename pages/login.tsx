import type { NextPage } from "next";
import Head from "next/head";
import wrap from "@elm-react/component";
import { default as LL } from "../elm/Login.elm";
import Heading from "components/Head";

const Elm = wrap(LL);

export default function Login() {
  return (
    <>
      <Heading title="Login" />
      <Elm />
    </>
  );
}
