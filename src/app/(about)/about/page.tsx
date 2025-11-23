"use client";

import MaskCursor from "@/components/Mask Cursor/page";
import Preloader from "@/components/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let locomotiveScroll: any;

    (async () => {
      if (typeof window !== "undefined") {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;

        locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = "default";
          window.scrollTo(0, 0);
        }, 500);

        // Show nav after loading
        setIsActive(true);
      }
    })();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  const greetings = ["About Us"];
  return (
    <div className="h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader words={greetings} />}
      </AnimatePresence>
      <MaskCursor
        initialSize={40}
        hoverSize={400}
        text="A visual designer — with skills that haven't been replaced by AI yet."
        bodyText={`I'm a <span>selectively skilled</span> product designer with a strong focus on impactful experiences.`}
      />
    </div>
  );
}
