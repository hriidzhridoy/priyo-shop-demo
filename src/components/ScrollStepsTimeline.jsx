"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STEPS = [
  {
    title: "Install The App",
    description: "Download the PriyoShop app from app store to get started.",
  },
  {
    title: "Create An Account",
    description:
      "Register with your mobile number, and provide your name, shop name.",
  },
  {
    title: "Choose SKUs",
    description:
      "Browse and select the products you want to order from our wide range.",
  },
  {
    title: "Place Order",
    description:
      "Confirm your order and enjoy fast delivery right to your shop.",
  },
];

export default function ScrollStepsTimeline() {
  const containerRef = useRef(null);

  // Scroll progress for this section only (0 → 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Width of the active (red) progress line
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-white py-16 md:py-24 px-4"
    >
      <div className="mx-auto max-w-5xl text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#ff4050]">
          How to Order from PriyoShop in Easy Steps
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-600">
          Follow these simple steps to order from PriyoShop and get quick
          delivery.
        </p>
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Timeline wrapper */}
        <div className="relative mb-10">
          {/* Gray base line */}
          <div className="h-1 w-full rounded-full bg-gray-200" />

          {/* Red progress line */}
          <motion.div
            className="absolute left-0 top-0 h-1 rounded-full bg-[#ff4050]"
            style={{ width: progressWidth }}
          />

          {/* Step bubbles */}
          <div className="relative mt-[-14px] flex justify-between">
            {STEPS.map((step, index) => (
              <TimelineStep
                key={step.title}
                index={index}
                total={STEPS.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Step cards below the line */}
        <div className="grid gap-8 md:grid-cols-4">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <p className="text-sm font-semibold text-gray-700 mb-2">
                {step.title}
              </p>
              <p className="text-xs md:text-sm text-gray-500 max-w-[220px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Single step bubble on the line
 */
function TimelineStep({ index, total, scrollYProgress }) {
  const start = index / total;
  const end = (index + 1) / total;

  // Inner fill grows as this step's segment scrolls into view
  const fillScale = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <div className="relative flex w-0 flex-1 justify-center">
      <div className="relative flex items-center justify-center">
        {/* Outer circle */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#ff4050] bg-white shadow-sm">
          {/* Inner fill circle */}
          <motion.div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff4050] text-xs font-semibold text-white"
            style={{ scale: fillScale }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            {index + 1}
          </motion.div>

          {/* Static number behind (visible before fill reaches it) */}
          <span className="absolute text-xs font-semibold text-[#ff4050]">
            {index + 1}
          </span>
        </div>
      </div>
    </div>
  );
}
