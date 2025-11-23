"use client";
import styles from "./page.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";

export default function MaskCursor({
  initialSize = 40,
  hoverSize = 400,
  text = "Default hover text",
  bodyText = "Default body content",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();

  // Dynamically choose size based on hover
  const size = isHovered ? hoverSize : initialSize;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {text}
        </p>
      </motion.div>

      <div className={styles.body}>
        <p dangerouslySetInnerHTML={{ __html: bodyText }} />
      </div>
    </main>
  );
}
