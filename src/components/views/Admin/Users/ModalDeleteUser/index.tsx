import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { userServices } from "@/services/user";
import React from "react";
import style from "./ModalDeleteUser.module.scss";
import { useSession } from "next-auth/react";
const ModalDeleteUser = (props: any) => {
  const { deletedUser, setDeleteUser, setUsersData } = props;
  const session: any = useSession();
  // console.log(session?.data?.accessToken);
  const handleClickDelete = async () => {
    userServices.deleteUsers(deletedUser.id, session?.data?.accessToken);
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
