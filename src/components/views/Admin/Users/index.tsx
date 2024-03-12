import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/Button";
import React from "react";
import style from "./Users.module.scss";
type PropsTypes = {
  users: any;
};

const UserAdminViews = (props: PropsTypes) => {
  const { users } = props;
  return (
    <AdminLayout>
      <div className={style.users}>
        <h2>User Management</h2>
        <table className={style.users_table}>
          <thead>
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any, i: number) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>
                  <div className={style.users_table_action}>
                    <Button type="button" variant="primary">
                      Update
                    </Button>
                    <Button type="button" variant="primary">
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};
export default UserAdminViews;
