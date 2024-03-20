import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import Select from "@/components/ui/Select";
import { userServices } from "@/services/user";
import React, { FormEvent, useState } from "react";

type PropsTypes = {
  setUpdatedUser: any;
  UpdatedUser: any;
  setUsersData: any;
};

const ModalUpdateUser = (props: PropsTypes) => {
  const { UpdatedUser, setUpdatedUser, setUsersData } = props;

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const form: any = event.target as HTMLFormElement;
    const data = {
      role: form.role.value,
    };
    const result = await userServices.updateUsers(data, UpdatedUser.id);
    if (result.status === 200) {
      setLoading(false);
      setUpdatedUser({});
      const { data } = await userServices.getAllUsers();
      console.log(data);
      setUsersData(data.data);
    } else {
      setLoading(false);
    }
  };
  return (
    <>
      <Modal onClose={() => setUpdatedUser({})}>
        <h1>Update User</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            type="email"
            disabled
            defaultValue={UpdatedUser.email}
          />
          <Input
            label="Fullname"
            name="fullname"
            type="text"
            disabled
            defaultValue={UpdatedUser.fullname}
          />
          <Input
            label="Phone Number"
            name="phone"
            type="number"
            disabled
            defaultValue={UpdatedUser.phone}
          />
          <Select
            name="role"
            label="Role"
            options={[
              { label: "Admin", value: "admin" },
              { label: "Member", value: "member" },
            ]}
            defaultValue={UpdatedUser.role}
          />
          <Button type="submit" variant="primary">
            Update
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default ModalUpdateUser;
