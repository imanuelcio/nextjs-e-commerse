import instance from "@/lib/axios/instance";

export const userServices = {
  getAllUsers: () => instance.get("/api/user"),
  updateUsers: (data: any, id: string, token: string) =>
    instance.put(
      `/api/user/${id}`,
      { data },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    ),
  deleteUsers: (id: string, token: string) =>
    instance.delete(`/api/user/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    }),
  getUserProfile: (token: string) =>
    instance.get(`/api/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
