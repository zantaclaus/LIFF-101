import { create } from "zustand";

type Profile = {
  userId: string;
  displayName: string;
  pictureUrl?: string;
};

type LiffStore = {
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
};

export const useLiffStore = create<LiffStore>()((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
}));
