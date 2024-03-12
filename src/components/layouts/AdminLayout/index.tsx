import React from "react";
import styles from "./AdminLayout.module.scss";
import Sidebar from "@/components/Fragments/Sidebar";

type PropsTypes = {
  children: React.ReactNode;
};

const listSidebarItem = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: "bxs-dashboard",
  },
  {
    title: "Products",
    url: "/admin/products",
    icon: "bx-shopping-bag",
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: "bx-group",
  },
];
const AdminLayout = (props: PropsTypes) => {
  const { children } = props;
  return (
    <>
      <div className={styles.admin}>
        <Sidebar lists={listSidebarItem} />
        <div className={styles.admin_main}>{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
