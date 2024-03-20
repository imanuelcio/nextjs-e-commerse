import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { userServices } from "@/services/user";
import React from "react";
import style from "./ModalDeleteUser.module.scss";
const ModalDeleteUser = (props: any) => {
  const { deletedUser, setDeleteUser, setUsersData } = props;
  console.log(deletedUser);
  const handleClickDelete = async () => {
    userServices.deleteUsers(deletedUser.id);
    setDeleteUser({});
    const { data } = await userServices.getAllUsers();
    console.log(data);
    setUsersData(data.data);
  };
  return (
    <Modal onClose={() => setDeleteUser({})}>
      <div className={style.modul}>
        <h1 className={style.modul_title}>Are you sure ?</h1>
        <Button
          type="button"
          variant="primary"
          onClick={() => handleClickDelete()}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDeleteUser;
