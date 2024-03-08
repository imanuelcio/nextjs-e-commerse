import React from "react";
import styles from "./AuthLayout.module.scss";
import Link from "next/link";

type PropsTypes = {
  error?: string;
  title?: string;
  children: React.ReactNode;
  link: string;
  linkText: string;
};
const AuthLayout = (props: PropsTypes) => {
  const { error, children, link, linkText, title } = props;
  return (
    <>
      <div className={styles.auth}>
        <h1 className={styles.auth_title}>{title}</h1>
        {error && <p className={styles.auth_form_error}>{error}</p>}
        <div className={styles.auth_form}>{children}</div>
        <p>
          {linkText}
          <Link className={styles.auth_link} href={link}>
            Here
          </Link>
        </p>
      </div>
    </>
  );
};

export default AuthLayout;
