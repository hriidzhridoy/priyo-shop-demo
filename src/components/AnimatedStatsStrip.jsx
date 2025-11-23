"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";

const STATS = [
  {
    value: 280,
    type: "number",
    label: "Total Brands",
    textColor: "#42a9f2",
    bgFrom: "#e9f4ff",
    bgTo: "#f4f9ff",
  },
  {
    value: 145,
    type: "kPlus",
    label: "MSMEs",
    textColor: "#f1a51a",
    bgFrom: "#fff5dd",
    bgTo: "#fff9ea",
  },
  {
    value: 1308,
    type: "number",
    label: "Route Coverage",
    textColor: "#1fb640",
    bgFrom: "#e7f9f0",
    bgTo: "#f2fff7",
  },
];

export default function AnimatedStatsStrip() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const glowRef = useRef(null);

  const inView = useInView(sectionRef, { once: true, margin: "-150px" });

  const allRefsReady =
    cardsRef.current.filter((el) => el !== null).length === STATS.length;

  useEffect(() => {
    if (!inView || !allRefsReady) return;

    const ctx = gsap.context(() => {
      // Background glow sweeping animation
      if (glowRef.current) {
        gsap.fromTo(
          glowRef.current,
          { xPercent: -40, opacity: 0 },
          {
            xPercent: 40,
            opacity: 1,
            duration: 3,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
          }
        );
      }

      // Card entrance
      gsap.from(cardsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });

      // Creative random flicker number count
      cardsRef.current.forEach((card, index) => {
        const numberEl = card.querySelector("[data-number]");
        if (!numberEl) return;

        const target = STATS[index].value;
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          delay: 0.2 + index * 0.1,
          onUpdate: () => {
            const progress = obj.val / target;

            // random flicker early on
            let jitterVal = obj.val;
            if (progress < 0.85) {
              const jitter = target * 0.05 * (1 - progress);
              jitterVal += (Math.random() - 0.5) * jitter;
            }

            const current = Math.round(
              Math.max(0, Math.min(target, jitterVal))
            );

            numberEl.textContent =
              STATS[index].type === "kPlus"
                ? `${current}K+`
                : current.toLocaleString();
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [inView, allRefsReady]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#fdfbff] via-[#fdf6ff] to-[#fdfbff] py-14 md:py-18 px-4 flex flex-col items-center"
    >
      {/* Heading + Subheading */}
      <div className="mx-auto max-w-5xl text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#ff4050]">
          The FMCG Distribution Network Built to Support MSMEs at Every Stage
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-600">
          Simplify sourcing, access top brands, and grow your retail business
          with the leading B2B platform.
        </p>
      </div>

      {/* Moving soft glow behind cards */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-y-0 left-1/2 h-[220%] w-[40%] 
        -translate-x-1/2 bg-gradient-to-r 
        from-[#ff4050]/8 via-[#ffb55a]/18 to-[#42a9f2]/10 blur-3xl"
      />

      <div className="relative z-10 flex w-full max-w-5xl flex-col gap-4 md:flex-row">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex-1 rounded-3xl py-10 px-6 md:px-8 text-center 
            shadow-[0_18px_60px_rgba(0,0,0,0.06)] border border-white/70 backdrop-blur-sm"
            style={{
              backgroundImage: `linear-gradient(135deg, ${stat.bgFrom}, ${stat.bgTo})`,
            }}
            whileHover={{
              y: -8,
              rotateX: 6,
              rotateY: -4,
              boxShadow: "0 26px 70px rgba(0,0,0,0.16)",
            }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-gradient-to-r from-white/50 via-white/80 to-white/40" />

            <p
              data-number
              className="text-3xl md:text-4xl font-semibold mb-2 tracking-wide"
              style={{ color: stat.textColor }}
            >
              0
            </p>
            <p className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-[0.15em]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
