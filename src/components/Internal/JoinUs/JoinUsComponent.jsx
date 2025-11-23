"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Contact } from "lucide-react";
import Link from "next/link";

export default function JoinUsComponent() {
  const rootRef = useRef(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // GSAP glow + underline animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".join-orb",
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
        }
      );

      gsap.from(".join-heading-underline", {
        width: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.2,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={rootRef}
        className="relative flex min-h-screen items-center justify-center bg-[#faf7f4] px-4 py-16"
      >
        {/* background glow */}
        <div className="join-orb pointer-events-none absolute inset-x-0 top-16 mx-auto h-64 w-[60%] rounded-[999px] bg-gradient-to-r from-[#ff4050]/20 via-[#ff7b74]/15 to-[#ffb55a]/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-12"
        >
          {/* Heading */}
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-semibold text-[#ff4050]">
              Pick Up a New Way To Trade
            </h2>
            <div className="join-heading-underline mx-auto h-[3px] w-24 rounded-full bg-gradient-to-r from-[#ff4050] via-[#ff7b74] to-[#ffb55a]" />
            <p className="max-w-xl text-sm md:text-base text-gray-600 mx-auto">
              Whether you&apos;re an MSME retailer or a growing brand, PriyoShop
              gives you the tools to scale faster.
            </p>
          </div>

          {/* Cards */}
          <div className="grid w-full gap-8 md:grid-cols-2">
            {/* For MSMEs */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="rounded-3xl bg-white/90 px-6 py-8 md:px-8 md:py-10 shadow-[0_18px_60px_rgba(0,0,0,0.04)] border border-white"
            >
              <h3 className="text-2xl md:text-[1.8rem] font-semibold text-[#ff4050] mb-4">
                For MSMEs
              </h3>
              <ul className="mb-7 space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
                <li>Over 4.5k+ SKUs</li>
                <li>Price Transparency</li>
                <li>24-hour delivery</li>
                <li>Buy Now Pay Later (BNPL)</li>
              </ul>
              <Link href="https://play.google.com/store/apps/details?id=com.priyoshop.zero">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#ff4050] bg-[#ff4050] px-5 py-2 text-xs md:text-sm font-semibold text-white shadow-sm"
                >
                  Start Now{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_147_5627)">
                      <path
                        d="M2 13.6667V2.33335C2 1.94002 2.22667 1.59335 2.56 1.43335L9.12667 8.00002L2.56 14.5667C2.22667 14.4 2 14.06 2 13.6667ZM11.2067 10.08L4.03333 14.2267L9.69333 8.56668L11.2067 10.08ZM13.44 7.20668C13.6667 7.38668 13.8333 7.66668 13.8333 8.00002C13.8333 8.33335 13.6667 8.61335 13.44 8.79335L11.9267 9.66668L10.26 8.00002L11.9267 6.33335L13.44 7.20668ZM4.03333 1.77335L11.2067 5.92002L9.69333 7.43335L4.03333 1.77335Z"
                        fill="#020817"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_147_5627">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </motion.button>
              </Link>
            </motion.div>

            {/* For Brands */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="rounded-3xl bg-white/90 px-6 py-8 md:px-8 md:py-10 shadow-[0_18px_60px_rgba(0,0,0,0.04)] border border-white"
            >
              <h3 className="text-2xl md:text-[1.8rem] font-semibold text-[#ff4050] mb-4">
                For Brands
              </h3>
              <ul className="mb-7 space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
                <li>Digitalize Logistics Support</li>
                <li>Smooth Operations</li>
                <li>Nationwide Access</li>
                <li>Logistics & Delivery Service</li>
              </ul>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsContactOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-gray-900/15 bg-white px-5 py-2 text-xs md:text-sm font-semibold text-gray-900 hover:text-[#ff4050] hover:border-[#ff4050]/60 transition"
              >
                Contact Us <Contact size={16} />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mx-4 w-full max-w-3xl rounded-3xl bg-white px-6 py-8 md:px-10 md:py-10 shadow-[0_24px_80px_rgba(0,0,0,0.25)] relative"
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute right-4 top-4 rounded-full bg-black/5 px-2 py-1 text-xs"
              >
                ✕
              </button>

              <div className="text-center mb-10">
                <h3 className="text-xl md:text-2xl font-semibold text-[#ff4050]">
                  Become our partner in one simple step
                </h3>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                {/* Call */}
                <div className="flex flex-col items-center text-center gap-4">
                  <p className="text-sm text-gray-500">Give us a call at</p>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff4050] text-white text-2xl">
                    ☎
                  </div>
                  <a
                    href="tel:+8809610989922"
                    className="text-lg md:text-xl font-semibold text-black"
                  >
                    +8809610989922
                  </a>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center text-center gap-4">
                  <p className="text-sm text-gray-500">Drop us a mail at</p>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff4050] text-white text-2xl">
                    ✉
                  </div>
                  <a
                    href="mailto:sales@priyoshop.com"
                    className="text-lg md:text-xl font-semibold text-black"
                  >
                    sales@priyoshop.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
