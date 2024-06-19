"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Link = ({ href, text, className }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <a onClick={handleClick} className={className}>
      {text}
    </a>
  );
};

export default Link;
