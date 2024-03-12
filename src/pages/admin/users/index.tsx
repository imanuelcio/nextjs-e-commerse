import UserAdminViews from "@/components/views/Admin/Users";
import { userServices } from "@/services/user";
import React, { useEffect, useState } from "react";

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await userServices.getAllUsers();
      setUsers(data.data);
    };
    getUsers();
  }, []);

  return <UserAdminViews users={users} />;
};

export default AdminUsersPage;
