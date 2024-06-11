import ProfileMemberViews from "@/components/views/Member/Profile";
import { userServices } from "@/services/user";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const ProfileMemberPage = () => {
  const [profile, setProfile] = useState({});
  const session: any = useSession();
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await userServices.getUserProfile(
        session.data?.accessToken
      );
      setProfile(data.data);
    };
    getUsers();
  }, [session]);

  return <ProfileMemberViews profile={profile} />;
};

export default ProfileMemberPage;
