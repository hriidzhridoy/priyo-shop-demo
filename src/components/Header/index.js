"use client";
import styles from "./style.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { opacity } from "./anim";
import Nav from "../Shared/Nav";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        {/* Logo on the left */}
        <Link href="/" className={styles.logo}>
          <img src="/images/logo.png" alt="Logo" className="w-[110px]" />
        </Link>

        {/* Burger / Menu toggle */}
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>

        {/* Right side container */}
        <motion.div
          variants={opacity}
          animate={!isActive ? "open" : "closed"}
          className={styles.shopContainer}
        >
          <div className={styles.el}>
            <Link href="/join-us" className={styles.joinLink}>
              Join Us
            </Link>
          </div>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
