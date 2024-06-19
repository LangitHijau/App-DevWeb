"use client";
import React from "react";
import styles from "./css/button.module.css";
import { useRouter } from "next/navigation";

const Button = ({ href, text, className }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <button onClick={handleClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
