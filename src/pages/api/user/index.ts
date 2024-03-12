import { retrieveData } from "@/lib/firebase/service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const users = await retrieveData("users");
    const data = users.map((user: any) => {
      delete user.password;
      return user;
    });
    return res.status(200).json({
      status: true,
      statusCode: 200,
      message: "success",
      data,
    });
  }
}
