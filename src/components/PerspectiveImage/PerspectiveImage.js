"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";

const IMAGE_URL =
  "https://priyoshopretail.com/wp-content/uploads/2025/09/About-Us-Page-Banner-1.jpg";

export default function PerspectiveImage() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-primary text-white flex flex-col items-center justify-center px-6"
    >
      <div className="w-full max-w-3xl space-y-12">
        {/* Vision Card */}
        <div className="bg-white/95 rounded-2xl p-6 md:p-8 shadow-md text-gray-800">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#C72626] mb-3">
            Our Vision
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            To transform the retail industry by empowering MSMEs in the evolving
            digital landscape, supported by inclusive finance.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/40"></div>

        {/* Mission Card */}
        <div className="bg-white/95 rounded-2xl p-6 md:p-8 shadow-md text-gray-800">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#C72626] mb-3">
            Our Mission
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            To empower businesses, encourage innovation, and build a dynamic
            platform that sets new standards for efficiency and collaboration in
            the B2B sector.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <div className="bg-yellow-500 w-full">
        <img
          src={IMAGE_URL}
          alt="PriyoShop banner full"
          fill
          className="object-cover w-full"
        />
      </div>
    </motion.div>
  );
};
