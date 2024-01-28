import "../App.css";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion, useTransform, useScroll } from "framer-motion";
import qcBackground from "../qc-background.png";

interface BlankSectionProps {
  color: string;
}
export const LandingSection = ({ color }: BlankSectionProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll();
  // const isInView = useInView(ref);
  const imageY = useTransform(scrollYProgress, [0, 1], [200, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [200, 800]);

  return (
    <motion.div
      ref={ref}
      style={{ background: color }}
      className="snap-section"
    >
      {/* <h1 className="landing-text">QClip</h1> */}
      <div className="relative-div">
        <h1 className="qclip-title">
          <span className="qc-text-color">QC</span>lip
        </h1>
        <motion.h2 className="landing-text" style={{ y: textY }}>
          Get Queens College admissions information with Artificial
          Intelligence.
        </motion.h2>
        <motion.img
          src={qcBackground}
          alt="qc"
          className="qc-image"
          style={{ y: imageY }}
        />
      </div>
    </motion.div>
  );
};
