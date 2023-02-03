import React from "react";
import styles from "./Button.module.css";

interface ButtonType {
  customClass?: string;
  label?: any;
  variant: string;
  onClick: any;
}

export default function Button({
  customClass,
  label,
  variant,
  onClick,
}: ButtonType) {
  return (
    <button className={`${variant} ${customClass}`} onClick={onClick}>
      {label}
    </button>
  );
}
