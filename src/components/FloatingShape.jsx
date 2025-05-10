import React from "react";
import { motion } from "framer-motion";
//using framer motion package for animation
const FloatingShape = ({ color, size, top, left, delay }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} ${size} opacity-20
     blur-xl `}
      style={{ top, left }}
      animate={{
        y: ["0%", "100%", "0%"],
        x: ["0%", "100%", "0%"],
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        delay,
      }}
      //   making the shape not visible to screen readers
      aria-hidden="true"
    />
  );
};

export default FloatingShape;
