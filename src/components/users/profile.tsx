"use client";

import { useLiffStore } from "@/store/liff";
import Image from "next/image";

const Profile = () => {
  const profile = useLiffStore((state) => state.profile);

  const profilePicture = () => profile?.pictureUrl || "";

  if (!profile) return null;

  return (
    <div className="space-y-4">
      <Image
        loader={profilePicture}
        src="profile.png"
        width={100}
        height={100}
        alt="user profile"
        className="rounded-full ransition-transform transform translate-y-0"
      />

      <p className="text-center">{profile?.displayName}</p>
    </div>
  );
};

export default Profile;
