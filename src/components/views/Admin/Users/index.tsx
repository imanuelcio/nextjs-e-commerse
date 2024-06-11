import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/Button";
import React, { useEffect, useState } from "react";
import style from "./Users.module.scss";
import ModalUpdateUser from "./ModalUpdateUser";

import ModalDeleteUser from "./ModalDeleteUser";
type PropsTypes = {
  users: any;
};

const UserAdminViews = (props: PropsTypes) => {
  const { users } = props;
  const [usersData, setUsersdata] = useState([]);
  const [UpdatedUser, setUpdatedUser] = useState<any>({});
  const [deletedUser, setDeletedUser] = useState<any>({});
  useEffect(() => {
    setUsersdata(users);
  }, [users]);

  return (
    <>
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
              {usersData?.map((user: any, i: number) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>
                    <div className={style.users_table_action}>
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => setUpdatedUser(user)}
                        className={style.users_table_action_edit}
                      >
                        <i className="bx bx-edit-alt" />
                      </Button>
                      <Button
                        type="button"
                        variant="primary"
                        className={style.users_table_action_delete}
                        onClick={() => setDeletedUser(user)}
                      >
                        <i className="bx bx-trash-alt" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>
      {Object.keys(UpdatedUser).length && (
        <ModalUpdateUser
          setUpdatedUser={setUpdatedUser}
          UpdatedUser={UpdatedUser}
          setUsersData={setUsersdata}
        />
      )}
      {Object.keys(deletedUser).length && (
        <ModalDeleteUser
          setDeleteUser={setDeletedUser}
          deletedUser={deletedUser}
          setUsersData={setUsersdata}
        />
      )}
    </>
  );
};
export default UserAdminViews;
