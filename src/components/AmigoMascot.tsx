"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function AmigoMascot({ className = "" }: { className?: string }) {
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 120);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const headRotate = useTransform(mouseX, [-200, 200], [-8, 8]);
  const headTilt = useTransform(mouseY, [-200, 200], [-4, 4]);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  return (
    <div
      className={[
        "relative inline-block group cursor-pointer",
        className,
      ].join(" ")}
      style={{ transformOrigin: "center" }}
    >
      {/* Tail */}
      <motion.div
        animate={{ rotate: [0, 18, 0, -18, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        className="absolute -right-3 bottom-10 w-12 h-20 bg-orange-200 rounded-full opacity-80 origin-top rotate-45 -z-10 group-hover:scale-110"
      />

      {/* Body */}
      <motion.div
        animate={{ scale: [1, 1.04, 1], y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-48 h-48 bg-orange-200 rounded-full shadow-amigo-glow border-4 border-orange-300 overflow-hidden group-hover:scale-105"
      >
        <div className="absolute bottom-10 left-8 w-20 h-14 bg-orange-100 rounded-full opacity-90" />
        <div className="absolute top-12 left-16 w-6 h-10 bg-white rounded-full opacity-60 blur-sm" />
      </motion.div>

      {/* Head */}
      <motion.div
        style={{ rotate: headRotate, y: headTilt }}
        className="absolute -top-14 left-1/2 -translate-x-1/2 z-20 w-32 h-32 bg-amigo-primary rounded-full shadow-amigo-secondary-glow border-4 border-orange-300"
      >
        <div className="absolute -top-6 -left-4 w-14 h-20 bg-amigo-primary rounded-full rotate-[-20deg] origin-bottom border-4 border-orange-300 border-t-transparent border-l-transparent shadow-amigo-secondary-glow" />
        <div className="absolute -top-6 -right-4 w-14 h-20 bg-amigo-primary rounded-full rotate-[20deg] origin-bottom border-4 border-orange-300 border-t-transparent border-r-transparent shadow-amigo-secondary-glow" />

        <div className="flex items-center justify-center gap-3 pt-6">
          <motion.div
            animate={blinking ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 0.15 }}
            className="w-5 h-5 bg-white rounded-full border-2 border-amigo-text relative shadow-inner"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-amigo-text rounded-full" />
          </motion.div>
          <motion.div
            animate={blinking ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 0.15 }}
            className="w-5 h-5 bg-white rounded-full border-2 border-amigo-text relative shadow-inner"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-amigo-text rounded-full" />
          </motion.div>
        </div>

        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-5 h-4 bg-amigo-text rounded-full opacity-90" />
        <div className="absolute top-21 left-1/2 -translate-x-1/2">
          <svg className="w-6 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#fff" }}>
            <path d="M0 0 Q2 4 4 0" />
          </svg>
        </div>
        <div className="absolute top-14 left-1 w-4 h-4 bg-pink-400 rounded-full opacity-60 blur-md" />
        <div className="absolute top-14 right-1 w-4 h-4 bg-pink-400 rounded-full opacity-60 blur-md" />
      </motion.div>

      {/* Paws */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-6 h-3 bg-orange-300 rounded-full" />
        <div className="w-6 h-3 bg-orange-300 rounded-full" />
      </div>

      {/* Love badge */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-amigo-secondary-glow animate-bounce"
      >
        ♡
      </motion.div>
    </div>
  );
}
