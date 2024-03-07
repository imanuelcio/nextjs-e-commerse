import { addData, retrieveDataByQuery } from "@/lib/firebase/service";
import bcrypt from "bcrypt";
export async function signUp(
  userData: {
    email: string;
    fullname: string;
    phone: string;
    role?: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
  },
  callback: Function
) {
  const data = await retrieveDataByQuery("users", "email", userData.email);

  if (data.length > 0) {
    callback(false);
    console.log("email already exist");
  } else {
    if (userData.role) {
      userData.role = "member";
    }
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.createdAt = new Date();
    userData.updatedAt = new Date();
    await addData("users", userData, (result: boolean) => {
      callback(result);
    });
  }
}

export async function signIn(email: string) {
  const data = await retrieveDataByQuery("users", "email", email);
  if (data) {
    return data[0];
  } else {
    return null;
  }
}

export async function loginWithGoogle(
  data: { email: string; fullname?: string; phone?: string; role?: string },
  callback: Function
) {
  const user = await retrieveDataByQuery("users", "email", data.email);

  if (user.length > 0) {
    callback(user[0]);
  } else {
    data.role = "member";
    await addData("users", data, (result: boolean) => {
      if (result) {
        callback(data);
      }
    });
  }
}
