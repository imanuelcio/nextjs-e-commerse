import Link from "next/link";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
const LoginView = () => {
  const { push, query } = useRouter();
  const callbackUrl: any = query.callbackUrl || "/auth/awal";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        callbackUrl,
      });
      if (res?.error) {
        setLoading(false);
        setError("Invalid email or password");
      } else {
        setLoading(false);
        form.reset();
        push(callbackUrl);
      }
    } catch (error) {
      setLoading(false);
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <div className={styles.login}>
        <h1 className={styles.login_title}>Login</h1>
        {error && <p className={styles.login_form_error}>{error}</p>}
        <div className={styles.login_form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.login_form_item}>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                className={styles.login_form_item_input}
                type="text"
              />
            </div>

            <div className={styles.login_form_item}>
              <label htmlFor="password">Password</label>
              <input
                name="password"
                id="password"
                className={styles.login_form_item_input}
                type="password"
              />
            </div>
            <button type="submit" className={styles.login_form_button}>
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
          <hr className={styles.login_form_devider} />
          <div className={styles.login_form_other}>
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl, redirect: false })}
              className={styles.login_form_other_button}
            >
              <i className="bx bxl-google" /> Login With Google
            </button>
          </div>
        </div>
        <p>
          Don{"'"} Have an account? Sign Up{" "}
          <Link className={styles.login_link} href={"/auth/register"}>
            here
          </Link>
        </p>
      </div>
    </>
  );
};
export default LoginView;
