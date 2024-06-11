import React from "react";
import MemberLayout from "@/components/layouts/MemberLayout";
import style from "./ProfileMember.module.scss";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Image from "next/image";

const ProfileMemberViews = (profile: any) => {
  console.log(profile.images);

  return (
    <MemberLayout>
      <div>
        <h1 className={style.profile__title}>Profile</h1>
        <div className={style.profile__main}>
          <div className={style.profile__main__avatar}>
            <Image
              src={profile.profile.avatar}
              alt="avatar"
              width={100}
              height={100}
            />
          </div>
          <div className={style.profile__main__detail}>
            <form action="">
              <Input
                name="fullname"
                label="Full Name"
                type="text"
                defaultValue={profile.profile.fullname}
                disabled
              />
              <Input
                name="email"
                label="Email"
                type="text"
                disabled
                defaultValue={profile.profile.email}
              />
              <Input
                name="phone"
                label="Phone"
                type="text"
                disabled
                defaultValue={profile.profile.phone}
              />
              <Input
                name="password"
                label="Password"
                type="password"
                defaultValue={profile.profile.password}
                disabled
              />
              <Button variant="primary" type="submit">
                Update Data
              </Button>
            </form>
          </div>
        </div>
      </div>
    </MemberLayout>
  );
};

export default ProfileMemberViews;
