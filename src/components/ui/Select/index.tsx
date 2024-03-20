import React from "react";
import styles from "./Select.module.scss";

type optionsType = {
  label: string;
  value: string;
};

type PropsTypes = {
  label?: string;
  name: string;
  options: optionsType[];
  defaultValue?: string;
  disabled?: boolean;
};
const Select = (props: PropsTypes) => {
  const { label, name, options, defaultValue, disabled } = props;
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        disabled={disabled}
        className={styles.container_select}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
