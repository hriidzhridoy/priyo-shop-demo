"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Preloader from "../components/Preloader/Preloader";
import Newblock from "@/components/NewBlock/Newblock";
import HeroText from "@/components/HeroText";
import AccordianAnimation from "@/components/AccordionAnimation";
import ScrollStepsTimeline from "@/components/ScrollStepsTimeline";
import AnimatedStatsStrip from "@/components/AnimatedStatsStrip";

export default function Home() {
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
        }, 2000);

        // Show nav after loading
        setIsActive(true);
      }
    })();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  const greetings = [
    "Welcome",
    "To",
    " Largest ",
    "B2B",
    "Platform",
    "in",
    "Bangladesh",
    "Priyo",
    "Shop",
  ];
  return (
    <main className="">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader words={greetings} />}
      </AnimatePresence>
      {/* <Newblock className="pt-20 text-black" /> */}
      <HeroText />
      <AccordianAnimation />
      <ScrollStepsTimeline />
      <AnimatedStatsStrip />
    </main>
  );
}
