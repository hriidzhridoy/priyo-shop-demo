"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

type NewblockProps = {
  className?: string;
  images?: string[]; // optional – you can pass your own later
};

const fallbackImages = [
  // replace these with your real images later
  "https://priyoshopretail.com/wp-content/uploads/2025/09/PriyoShop-Banner-small.webp",
  "https://priyoshopretail.com/wp-content/uploads/2025/09/PriyoShop-WebBanner-Updated.webp",
  "https://priyoshopretail.com/wp-content/uploads/2025/09/Dipty-Rice-WebBanner.webp",
  // "https://via.placeholder.com/800x500?text=Image+4",
];

export default function Newblock({ className, images }: NewblockProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const imgList = (images?.length ? images : fallbackImages) ?? [];
  const slides = [...imgList, ...imgList]; // duplicate for seamless loop

  useEffect(() => {
    const track = trackRef.current;
    if (!track || slides.length === 0) return;

    const totalWidth = track.scrollWidth / 2; // because we duplicated

    const ctx = gsap.context(() => {
      gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -totalWidth,
          duration: 25,
          ease: "none",
          repeat: -1,
        }
      );
    }, track);

    return () => {
      ctx.revert();
    };
  }, [slides.length]);

  return (
    <div className={` w-full overflow-hidden ${className ? className : ""}`}>
      {/* subtle background gradient for a professional look */}
      <div className="pointer-events-none  inset-0 bg-gradient-to-br from-neutral-950 via-slate-900 to-neutral-950" />

      {/* carousel track */}
      <div className="relative  pb-10 md:pb-16">
        <div
          ref={trackRef}
          className="flex gap-6 md:gap-8 will-change-transform"
        >
          {slides.map((src, index) => (
            <motion.div
              key={`${src}-${index}`}
              className="relative h-56 w-80 flex-shrink-0 overflow-hidden rounded-3xl border border-white/5 bg-black/40 shadow-[0_18px_40px_rgba(0,0,0,0.6)] md:h-72 md:w-[740px]"
              whileHover={{
                scale: 1.04,
                rotate: -1.5,
                transition: { type: "spring", stiffness: 220, damping: 18 },
              }}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
                draggable={false}
              />

              {/* soft vignette to make images feel premium */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.25),_transparent_60%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
