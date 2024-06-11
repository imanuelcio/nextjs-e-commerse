import Link from "next/link";
import styles from "./Register.module.scss";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { authServices } from "@/services/auth";
import AuthLayout from "@/components/layouts/AuthLayout";
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
    const result = await authServices.RegisterAccount(data);
    if (result && result.status === 200) {
      form.reset();
      router.push("/auth/login");
    } else {
      setLoading(false);
      setError("Email Already Exist");
    }
  };

  return (
    <>
      <AuthLayout
        title="Register"
        error={error}
        link="/auth/login"
        linkText="Already have an account? Sign In "
      >
        <form onSubmit={handleSubmit}>
          <Input label="Email" name="email" type="email" />
          <Input label="Fullname" name="fullname" type="text" />
          <Input label="Phone Number" name="phone" type="number" />
          <Input label="Password" name="password" type="password" />
          <Button
            type="submit"
            variant="primary"
            className={styles.register_button}
          >
            {loading ? "Loading..." : "Register"}
          </Button>
        </form>
      </AuthLayout>
    </>
  );
};
export default RegisterView;
