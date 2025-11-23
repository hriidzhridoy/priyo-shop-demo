"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type HeroTextProps = {
  className?: string;
};

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Retail",
    description:
      "B2B platform empowering millions of MSMEs with faster restocking and smart supply chain.",
    img: "https://priyoshopretail.com/wp-content/uploads/2025/09/1-Retail-150x150.webp",
  },
  {
    title: "Smart Distribution",
    description:
      "Partnering with leading brands to streamline and simplify last-mile distribution across Bangladesh.",
    img: "https://priyoshopretail.com/wp-content/uploads/2025/09/3-Distribution-1.webp",
  },
  {
    title: "DOOH",
    description:
      "A Digital Out-of-Home advertising network inside retail points, unlocking a brand-new monetization model.",
    img: "https://priyoshopretail.com/wp-content/uploads/2025/09/DOOH.webp",
  },
  {
    title: "Home Brand",
    description:
      "PriyoShop’s 1st home brand, Dipty, gives MSMEs quality products like rice and lentils at great value.",
    img: "https://priyoshopretail.com/wp-content/uploads/2025/09/Dipty-Logo-1-150x150.png",
  },
];

const fmcgFeatures = [
  {
    title: "Digitalization",
    description:
      "Helping MSMEs manage sourcing and inventory with a fully digital platform.",
    icon: "📱",
  },
  {
    title: "Sales Booster",
    description:
      "Increase retail sales through better product access and reliable restocking.",
    icon: "📈",
  },
  {
    title: "Time Saver",
    description:
      "Save time with easy ordering and fast delivery, right to retail shops.",
    icon: "⏱️",
  },
  {
    title: "Price Transparency",
    description:
      "Get fair, upfront pricing with no hidden charges across every order.",
    icon: "💰",
  },
  {
    title: "Embedded Finance",
    description:
      "Empowering MSME purchasing power through embedded finance solutions.",
    icon: "💳",
  },
];

export default function HeroText({ className }: HeroTextProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-16 md:py-24 ${className ? className : ""}`}
    >
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0" />
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 w-[82%] rounded-[120px] bg-[#ff4b6b]/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        {/* Heading */}
        <div ref={headingRef} className="mb-12 md:mb-16 space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#ff6b7a]">
            B2B ECOSYSTEM · BANGLADESH
          </p>
          <h2
            data-title
            className="text-2xl font-semibold text-[#ff4050] md:text-3xl lg:text-[2.4rem]"
          >
            Scaling Bangladesh’s{" "}
            <span className="bg-gradient-to-r from-[#ff4050] via-[#ff7b74] to-[#ffb55a] bg-clip-text text-transparent">
              Largest B2B Platform
            </span>{" "}
            for MSMEs
          </h2>
          <p
            data-subtitle
            className="mx-auto max-w-2xl text-sm text-gray-600 md:text-base"
          >
            Simplifying supply chain, unlocking credit, and driving scale for
            small businesses nationwide.
          </p>
        </div>

        {/* First cards (Retail, Smart Distribution, etc.) */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {cards.map((card, index) => (
            <div
              key={card.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 p-6 text-left shadow-[0_18px_60px_rgba(255,88,120,0.18)] transition-transform duration-300 hover:-translate-y-2"
            >
              {/* subtle inner gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-white/20 to-[#ffe3ea]/70 opacity-90" />

              <div className="relative z-10 flex flex-col h-full">
                {/* top icon */}
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#fff0f3] via-white to-[#ffe4ec] shadow-inner shadow-white/60">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <h3 className="mb-2 text-base font-semibold text-gray-900 md:text-lg">
                  {card.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">
                  {card.description}
                </p>

                {/* button */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center self-start rounded-full bg-[#ff4050] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 group-hover:bg-[#e73746] group-hover:shadow-[0_10px_28px_rgba(255,64,80,0.45)]"
                >
                  Details ↗
                </button>
              </div>

              {/* glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#ff4050]/40 via-transparent to-[#ffb55a]/60 blur-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* NEW FMCG wholesale section – matches screenshot, more creative */}
        <div className="mt-20 rounded-[40px] bg-gradient-to-br from-[#ff4050] via-[#ff3b64] to-[#ff7b4a] px-6 py-10 text-left text-white shadow-[0_24px_90px_rgba(255,64,80,0.55)] md:px-10 md:py-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80 text-center md:text-left">
            FMCG WHOLESALE · RETAIL GROWTH
          </p>

          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h3 className="text-center text-2xl font-semibold leading-snug md:text-3xl lg:text-[2.1rem] lg:text-left">
              Grow Your Retail Business with the{" "}
              <span className="relative inline-block">
                Best FMCG Distributor
                <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-2 bg-gradient-to-r from-white/60 via-transparent to-white/60 opacity-70 blur-sm" />
              </span>
            </h3>
            <p className="max-w-xl text-center text-sm text-white/90 md:text-base lg:text-right lg:text-left lg:ml-auto">
              MSMEs&apos; one-stop platform for bulk FMCG supplies to connect
              with top brands, access quality products, and get fast delivery
              right to the retail doorstep.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {fmcgFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center rounded-3xl bg-white/95 px-5 py-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ffe1e6] text-2xl">
                  {feature.icon}
                </div>
                <h4 className="mb-2 text-sm font-semibold text-[#e53344] md:text-base">
                  {feature.title}
                </h4>
                <p className="text-xs leading-relaxed text-gray-600 md:text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
