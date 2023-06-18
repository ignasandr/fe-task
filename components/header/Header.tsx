"use client";
import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import Nav from "./Nav";
import Burger from "./Burger";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Image src={logo} alt="logo" height={32} />
        <Nav isOpen={isOpen} />
        <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
    </header>
  );
}
