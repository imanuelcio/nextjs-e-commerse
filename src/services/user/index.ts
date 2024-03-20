import instance from "@/lib/axios/instance";

export const userServices = {
  getAllUsers: () => instance.get("/api/user"),
  updateUsers: (data: any, id: string) =>
    instance.put(`/api/user`, { data, id }),
  deleteUsers: (id: string) => instance.delete(`/api/user/${id}`),
};
