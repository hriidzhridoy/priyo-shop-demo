import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Accordion titles and descriptions
const Title = "Frequently Asked Questions";
const SubTitle =
  "Find out more about Factorial with these FAQs. Don’t see your question here? Get in touch with us, and we will be more than happy to help you find what you are looking for.";
const skillsData = [
  {
    title: "What does PriyoShop’s B2B platform offer?",
    description:
      "PriyoShop is a B2B platform that streamlines sourcing, ordering, and delivery of goods for retail businesses.",
  },
  {
    title: "How do I place an order on PriyoShop?",
    description:
      "Simply install the app, register with your details, select your products, and place your order.",
  },
  {
    title: "How can PriyoShop benefit my retail business?",
    description:
      "By connecting you with top brands, PriyoShop helps you easily source quality products and get fast delivery.",
  },
  {
    title: "Can PriyoShop support MSMEs of all sizes?",
    description:
      "Yes, PriyoShop is designed to support MSMEs at any scale with scalable solutions for sourcing and delivery.",
  },
];

// Icon component that rotates when accordion is open
const ExpandIcon = ({ isOpen }) => (
  <motion.svg width="32" height="32" viewBox="0 0 24 24" className="ml-4">
    <line
      x1="5"
      y1="12"
      x2="19"
      y2="12"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <motion.line
      x1="12"
      y1="5"
      x2="12"
      y2="19"
      stroke="currentColor"
      strokeWidth="1.5"
      animate={{ rotate: isOpen ? 90 : 0 }}
      initial={false}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ originX: "50%", originY: "50%" }}
    />
  </motion.svg>
);

const AccordianAnimation = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  const toggleAccordion = (index) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants for letter-by-letter title animation
  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };

  // Animation variants for sliding the title and index
  const titleVariants = {
    initial: { y: 0 },
    hover: { y: 40 },
  };

  const hiddenTitleVariants = {
    initial: { y: -40 },
    hover: { y: 0 },
  };

  const indexVariants = {
    initial: { y: 0 },
    hover: { y: -40 },
  };

  const hiddenIndexVariants = {
    initial: { y: 40 },
    hover: { y: 0 },
  };

  return (
    <div className="relative  flex flex-col bg-primary/20 text-[#202020] sm:pb-20 ">
      <div className="max-w-screen mx-auto my-6 sm:my-auto px-4 md:px-24 w-full">
        {/* HEADER */}
        <div
          ref={ref}
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <h1 className="flex justify-start text-2xl sm:text-4xl tracking-wide w-full md:w-1/3">
            {Title.split("").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={letterVariants}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          <span className="text-sm sm:text-xl md:mr-auto md:mt-32 mt-2">
            {SubTitle}
          </span>
        </div>

        <div className="border-b border-[#505050] mt-4" />

        {/* ACCORDION LIST */}
        <div className="w-full md:w-2/3 md:ml-auto mt-6 md:mt-4">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="border-b border-[#505050] relative group"
              initial="initial"
              whileHover="hover"
            >
              <div
                className="flex justify-between items-center py-6 sm:py-10 cursor-pointer"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndexes.includes(index)}
                aria-controls={`panel-${index}`}
              >
                <div className="flex items-center gap-x-4 sm:gap-x-6 relative">
                  <div className="relative overflow-hidden">
                    {/* Current Index */}
                    <motion.span
                      className="text-xs sm:text-lg tracking-[0.15em] font-bold mb-auto block"
                      variants={indexVariants}
                      transition={{ duration: 0.3 }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.span>
                    {/* Hidden Index */}
                    <motion.span
                      className="text-xs sm:text-lg tracking-[0.15em] font-bold mb-auto block absolute top-0 left-0"
                      variants={hiddenIndexVariants}
                      transition={{ duration: 0.3 }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.span>
                  </div>

                  <div className="relative overflow-hidden max-w-full">
                    {/* Current Title */}
                    <motion.span
                      className="text-base sm:text-2xl md:text-3xl font-medium block"
                      variants={titleVariants}
                      transition={{ duration: 0.3 }}
                    >
                      {skill.title}
                    </motion.span>
                    {/* Hidden Title */}
                    <motion.span
                      className="text-base sm:text-2xl md:text-3xl font-medium block absolute top-0 left-0"
                      variants={hiddenTitleVariants}
                      transition={{ duration: 0.3 }}
                    >
                      {skill.title}
                    </motion.span>
                  </div>
                </div>
                <ExpandIcon isOpen={activeIndexes.includes(index)} />
              </div>

              <motion.div
                id={`panel-${index}`}
                initial={{ height: 0 }}
                animate={{
                  height: activeIndexes.includes(index) ? "auto" : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="pb-6 sm:pb-8 pr-4 sm:pr-12 text-sm sm:text-lg whitespace-pre-line">
                  <p>{skill.description}</p>
                </div>
              </motion.div>

              {/* Underline hover effect */}
              <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-transparent group-hover:bg-[#2b2a2a] transition-all duration-700 ease-in">
                <div className="h-full w-0 group-hover:w-full bg-[#2b2a2a] transition-all duration-700 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordianAnimation;
