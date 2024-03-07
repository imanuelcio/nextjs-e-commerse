import React from "react";
import styles from "./Button.module.scss";

type PropsTypes = {
  onClick?: () => void;
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
  variant: string;
  className?: string;
};
const Button = (props: PropsTypes) => {
  const { onClick, children, type, variant = "primary", className } = props;
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`${styles.button} ${styles[variant]} ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
