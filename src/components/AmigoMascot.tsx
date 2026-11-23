"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AmigoMascot({ className = "" }: { className?: string }) {
  const [blinking, setBlinking] = useState(false);
  const [antennaPulse, setAntennaPulse] = useState(false);

  useEffect(() => {
    const blinkId = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 150);
    }, 4000);
    const pulseId = setInterval(() => setAntennaPulse((p) => !p), 2200);
    return () => {
      clearInterval(blinkId);
      clearInterval(pulseId);
    };
  }, []);

  return (
    <div
      className={[
        "relative inline-block group cursor-pointer",
        className,
      ].join(" ")}
      style={{ transformOrigin: "center bottom" }}
    >
      {/* Floating body animation */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        {/* Rear wheel (left) */}
        <div className="absolute -left-3 bottom-0 w-12 h-14 bg-slate-400 rounded-full shadow-lg z-0">
          <div className="absolute inset-0 w-6 h-6 bg-teal-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white" />
        </div>

        {/* Body */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-72 h-48 bg-white rounded-[40%]_rounded-[60%] rounded-[35%]_rounded-[65%] border-4 border-teal-100 shadow-[0_0_40px_rgba(156,216,212,0.35)] overflow-hidden"
        >
          {/* Chest highlight stripe */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1 bg-teal-300/70 rounded-full shadow-[0_0_12px_rgba(93,228,255,0.8)]"
          />
          {/* Paw print */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-10 h-10 text-teal-300">
            <svg
              className="w-full h-full text-teal-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 6 Q1 4 3 2 M5 6 Q6 4 8 2" />
              <circle cx="5" cy="5" r="1.5" />
            </svg>
          </div>

          {/* Neck separation line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-teal-100/60" />
        </motion.div>

        {/* Head */}
        <motion.div
          animate={{ scale: [1, 1.01, 1], rotate: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-14 left-1/2 -translate-x-1/2 w-48 h-36 bg-white rounded-[45%] border-4 border-teal-100 shadow-[0_0_30px_rgba(156,216,212,0.4)] relative z-20 overflow-hidden"
        >
          {/* Screen face */}
          <div
            className="absolute top-4 left-4 right-4 bottom-6 bg-[#0b0c10] rounded-[35%] border-2 border-teal-200/60 relative overflow-hidden shadow-inner"
          >
            {/* Left eye (glowing curved) */}
            <motion.div
              animate={blinking ? { scaleY: 0.05 } : { scaleY: 1 }}
              transition={{ duration: 0.15 }}
              className="absolute top-12 left-8 w-14 h-6 bg-transparent border-t-8 border-teal-400 rounded-full opacity-90 shadow-[0_0_16px_rgba(93,228,255,0.9)]"
            />
            {/* Right eye */}
            <motion.div
              animate={blinking ? { scaleY: 0.05 } : { scaleY: 1 }}
              transition={{ duration: 0.15 }}
              className="absolute top-12 right-8 w-14 h-6 bg-transparent border-t-8 border-teal-400 rounded-full opacity-90 shadow-[0_0_16px_rgba(93,228,255,0.9)] transform -scale-x-1"
            />
            {/* Left blush */}
            <div className="absolute top-20 left-6 w-3 h-1.5 bg-pink-400/70 rounded-full blur-sm" />
            {/* Right blush */}
            <div className="absolute top-20 right-6 w-3 h-1.5 bg-pink-400/70 rounded-full blur-sm" />
            {/* Nose / mouth */}
            <div
              className="absolute top-22 left-1/2 -translate-x-1/2 w-6 h-2 bg-teal-400 rounded-full shadow-[0_0_10px_rgba(93,228,255,0.8)]"
            />
          </div>

          {/* Left ear/side accent */}
          <div
            className="absolute -top-2 -left-4 w-10 h-16 bg-teal-200 rounded-full border-2 border-teal-300 border-t-transparent border-l-transparent rotate-[-15deg] origin-top shadow-[0_0_12px_rgba(156,216,212,0.4)]"
          />
          {/* Right ear/side accent */}
          <div
            className="absolute -top-2 -right-4 w-10 h-16 bg-teal-200 rounded-full border-2 border-teal-300 border-t-transparent border-r-transparent rotate-[15deg] origin-top shadow-[0_0_12px_rgba(156,216,212,0.4)]"
          />
        </motion.div>

        {/* Antenna */}
        <motion.div
          animate={antennaPulse
            ? { boxShadow: ["0 0 8px rgba(93,228,255,0.6)", "0 0 24px rgba(93,228,255,1)"] }
            : { boxShadow: ["0 0 8px rgba(93,228,255,0.6)"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 right-6 w-1 h-12 bg-teal-200 rounded-full z-30 rotate-10"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-teal-100 rounded-full shadow-[0_0_20px_rgba(93,228,255,1)] border border-white"
          />
        </motion.div>

        {/* Front wheel (right) */}
        <div className="absolute right-3 bottom-0 w-12 h-14 bg-slate-400 rounded-full shadow-lg z-0">
          <div className="absolute inset-0 w-6 h-6 bg-teal-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white" />
        </div>
      </motion.div>

      {/* Love badge */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-8 h-8 bg-teal-400 text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-[0_0_20px_rgba(93,228,255,0.6)] animate-bounce"
      >
        ♡
      </motion.div>
    </div>
  );
}
