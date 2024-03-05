import { useSession } from "next-auth/react";
import React from "react";

const Awal = () => {
  const { data } = useSession();
  console.log(data);

  return <div>awal</div>;
};

export default Awal;
