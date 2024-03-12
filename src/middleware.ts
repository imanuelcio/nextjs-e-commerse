import { NextResponse } from "next/server";
import WithAuth from "./middleware/withAuth";

export function mainMiddleware() {
  const res = NextResponse.next();
  return res;
}

export default WithAuth(mainMiddleware, ["admin", "auth"]);
