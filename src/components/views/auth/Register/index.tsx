import Link from "next/link";
import styles from "./Register.module.scss";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
const RegisterView = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      fullname: form.fullname.value,
      phone: form.phone.value,
      password: form.password.value,
    };
    const result = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (result && result.status === 200) {
      form.reset();
      router.push("/auth/login");
    } else {
      setLoading(false);
      setError("Email Already Exist");
      console.log("error");
    }
  };

  return (
    <>
      <div className={styles.register}>
        <h1 className={styles.register_title}>Register</h1>
        {error && <p className={styles.register_form_error}>{error}</p>}
        <div className={styles.register_form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.register_form_item}>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                className={styles.register_form_item_input}
                type="text"
              />
            </div>

            <div className={styles.register_form_item}>
              <label htmlFor="fullname">Full Name</label>
              <input
                name="fullname"
                id="fullname"
                className={styles.register_form_item_input}
                type="text"
              />
            </div>
            <div className={styles.register_form_item}>
              <label htmlFor="phone">Phone Number</label>
              <input
                name="phone"
                id="phone"
                className={styles.register_form_item_input}
                type="text"
              />
            </div>
            <div className={styles.register_form_item}>
              <label htmlFor="password">Password</label>
              <input
                name="password"
                id="password"
                className={styles.register_form_item_input}
                type="password"
              />
            </div>
            <button type="submit" className={styles.register_form_button}>
              {loading ? "Loading..." : "Register"}
            </button>
          </form>
        </div>
        <p>
          Have an account? Sign in{" "}
          <Link className={styles.register_link} href={"/auth/login"}>
            here
          </Link>
        </p>
      </div>
    </>
  );
};
export default RegisterView;
