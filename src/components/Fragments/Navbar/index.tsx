import { signIn, signOut, useSession } from "next-auth/react";
import style from "./Navbar.module.scss";
const Navbar = () => {
  const { data } = useSession();
  return (
    <div className={style.navbar}>
      <h1 className={style.navbar_title}>Wedding organizer</h1>
      <button
        className={style.navbar_button}
        onClick={() => (data ? signOut() : signIn())}
      >
        {data ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
