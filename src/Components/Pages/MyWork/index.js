
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";


import forsyte from "../../../assets/forsyte.jpeg";
import trekrImg from "../../../assets/treke.png";
import hashchingImg from "../../../assets/hashching.jpeg";

const MyWork = ({ content }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const images = [forsyte, trekrImg, hashchingImg];

  return (
    <>
    <motion.div
    animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
     className="flex justify-center items-center text-white text-center font-bold text-5xl p-3">
      <h1>Work</h1>
    </motion.div>
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex  relative justify-between space-x-10  px-20"
      ref={ref}
    >
      <div className="div relative flex items-start px-2">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          
          background: `url(${images[activeCard % images.length]})`,
          backgroundSize: "cover", // Change opacity to 1 to make the image visible
        }}
        style={{
          width: "42rem",
        //   opacity: 0,
        }}
        className="hidden lg:block h-96 rounded-md bg-white sticky top-10 overflow-hidden"
      ></motion.div>
    </motion.div>
    </>
  );
};

export default MyWork;
