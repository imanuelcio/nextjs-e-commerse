import { useSession } from "next-auth/react";
import React from "react";

const HalamanAwal = () => {
  const { data } = useSession();
  console.log(data);

  return <div> HalamanAwal</div>;
};

export default HalamanAwal;
