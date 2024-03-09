import instance from "@/lib/axios/instance";

export const authServices = {
  RegisterAccount: (data: any) => instance.post("/api/user/register", data),
};
