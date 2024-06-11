import { retrieveDataByid } from "@/lib/firebase/service";
import { signUp } from "@/services/auth/services";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
      jwt.verify(
        token,
        process.env.NEXTAUTH_SECRET as string,
        async (err: any, decode: any) => {
          if (decode) {
            const data = await retrieveDataByid("users", decode.id);
            res.status(200).json({ status: 200, message: "success", data });
          }
        }
      );
    }
  } else {
    res
      .status(405)
      .json({ status: false, statusCode: 405, message: "Method not allowed" });
  }
}
