"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Array of image paths
const images = [
  "/images3.jpeg",
  "/images4.jpg.jpeg",
  "/images5.jpeg",
  "/images7.jpeg",
  "/images9.jpeg",
  "/images11.jpeg",
  "/images3.jpeg",
  "/images4.jpg.jpeg",
  "/images5.jpeg",
  "/images7.jpeg",
  "/images9.jpeg",
  "/images24.jpg.jpeg",
  "/images5.jpeg",
  "/images7.jpeg",
  "/images9.jpeg",
  "/images7.jpeg",
  "/images9.jpeg",
  "/images11.jpeg",
  "/images3.jpeg",
  "/images5.jpeg",
  "/images7.jpeg",
  "/images9.jpeg",
  "/images11.jpeg",
  "/images7.jpeg",
  "/images9.jpeg",
  "/images11.jpeg",
  "/images11.jpeg",
  "/images9.jpeg",
  "/images11.jpeg",
  "/images11.jpeg",
  "/images24.jpg.jpeg",
];

export default function Gallery() {
  return <ParallaxScroll images={images} />;
}

function ParallaxScroll({ images }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth out the scroll progress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  });

  // Split images into three roughly equal columns
  const third = Math.ceil(images.length / 3);
  const columns = [
    images.slice(0, third),
    images.slice(third, 2 * third),
    images.slice(2 * third),
  ];

  // Parallax speeds for each column
  const speeds = [-200, 200, -200];

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5 py-8">
        {columns.map((colImages, colIndex) => {
          const yMotion = useTransform(
            smoothProgress,
            [0, 1],
            [0, speeds[colIndex]]
          );

          return (
            <div className="grid gap-10" key={`col-${colIndex}`}>
              {colImages.map((src, idx) => (
                <motion.div
                  style={{ y: yMotion }}
                  key={`img-${colIndex}-${idx}`}
                >
                  <img
                    src={src}
                    alt={`Gallery image ${idx}`}
                    className="h-80 w-full object-cover rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
