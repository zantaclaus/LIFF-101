"use client";

import { PropsWithChildren } from "react";
import { LIFF_ID } from "@/global-config";
import { LiffProvider as ReactLiffProvider } from "react-liff";

const LiffProvider = ({ children }: PropsWithChildren) => {
  if (!LIFF_ID) {
    return <div>Failed to load LIFF_ID</div>;
  }

  return <ReactLiffProvider liffId={LIFF_ID}>{children}</ReactLiffProvider>;
};

export default LiffProvider;
