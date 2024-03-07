import React from "react";
import styles from "./Input.module.scss";

type PropsTypes = {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
};
const Input = (props: PropsTypes) => {
  const { label, name, type, placeholder } = props;
  return (
    <>
      <div className={styles.container}>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          name={name}
          id={name}
          placeholder={placeholder}
          className={styles.container_input}
          type={type}
        />
      </div>
    </>
  );
};

export default Input;
