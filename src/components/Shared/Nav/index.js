"use client";
import styles from "./style.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

import { height } from "./anim";
import Body from "../Body";
import Footer from "../Footer";

const links = [
  {
    title: "About Us",
    href: "/about",
    src: "home.png",
  },
  // {
  //   title: "Home",
  //   href: "/",
  //   src: "home.png",
  // },
  {
    title: "Brands",
    href: "/brands",
    src: "shop.png",
  },

  {
    title: "Blogs",
    href: "/blogs",
    src: "lookbook.png",
  },
  {
    title: "News",
    href: "/news",
    src: "lookbook.png",
  },
  {
    title: "Contact",
    href: "/contact",
    src: "contact.png",
  },
];

export default function Nav() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
        {/* <Image
          src={links[selectedLink.index].src}
          selectedLink={selectedLink}
        /> */}
      </div>
    </motion.div>
  );
}
