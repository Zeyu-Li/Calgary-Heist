import Head from "next/head";
import React, { useState } from "react";

const Heading: React.FC<any> = ({ title = "" }) => {
  return (
    <Head>
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <title>Study Buddy{title ? ` | ${title}` : null}</title>
      <meta name="author" content="Boolean Bois" />
      <meta
        name="description"
        content="Study with your friends using study cards"
      />
      <meta name="keywords" content="Keywords" />
      <meta property="og:image" content="" />
    </Head>
  );
};
export default Heading;
