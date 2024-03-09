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
];
const AdminLayout = (props: PropsTypes) => {
  const { children } = props;
  return (
    <>
      <div className="">
        <Sidebar lists={listSidebarItem} />
        {children}
      </div>
    </>
  );
};

export default AdminLayout;
