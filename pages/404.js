import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Custom404() {
  const router = useRouter();
  router.push({
    pathname: "/",
  });
  return <></>;
}
