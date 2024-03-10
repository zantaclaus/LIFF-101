"use client";

import { PropsWithChildren, useCallback, useEffect } from "react";
import { useLiff } from "react-liff";
import { LiffLoading } from "../fallback";
import { useLiffStore } from "@/store/liff";

const LiffInitProvider = ({ children }: PropsWithChildren) => {
  const { isReady, isLoggedIn, liff } = useLiff();

  const setProfile = useLiffStore((state) => state.setProfile);

  const initialize = useCallback(async () => {
    /* Get user profile */
    const profile = await liff.getProfile();

    /* Save user profile to liffstore*/
    setProfile(profile);
  }, [liff, setProfile]);

  useEffect(() => {
    if (!isLoggedIn) return;

    initialize();
  }, [initialize, isLoggedIn]);

  if (!isReady) return <LiffLoading />;

  return children;
};

export default LiffInitProvider;
