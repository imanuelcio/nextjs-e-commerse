import React from "react";
import styles from "./MemberLayout.module.scss";
import Sidebar from "@/components/Fragments/Sidebar";

type PropsTypes = {
  children: React.ReactNode;
};

const listSidebarItem = [
  {
    title: "Dashboard",
    url: "/member",
    icon: "bxs-dashboard",
  },
  {
    title: "Orders",
    url: "/member/orders",
    icon: "bxs-cart",
  },
  {
    title: "Profile",
    url: "/member/profile",
    icon: "bx-user-circle",
  },
];
const MemberLayout = (props: PropsTypes) => {
  const { children } = props;
  return (
    <>
      <div className={styles.member}>
        <Sidebar lists={listSidebarItem} />
        <div className={styles.member_main}>{children}</div>
      </div>
    </>
  );
};

export default MemberLayout;
