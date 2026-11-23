"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, PawPrint, Home as HomeIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AmigoSVG } from "@/components/AmigoSVG";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#plans", label: "Plans" },
];

const metrics = [
  { label: "Pets playing", value: "5,000+" },
  { label: "Daily playtime", value: "24/7" },
  { label: "Happy tails", value: "99%" },
];

export function SyntraHero({ className = "" }: { className?: string }) {
  const router = useRouter();

  return (
    <section
      className={[
        "relative min-h-[55vh] flex flex-col overflow-hidden bg-amigo-bg",
        className,
      ].join(" ")}
    >
      {/* Background grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="w-full h-full" />
        <svg className="w-full h-full" style={{ display: "block" }}>
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.15"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 px-6 py-4 border-b border-amigo-border bg-amigo-surface/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-amigo-primary rounded-2xl shadow-amigo-glow flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="font-amigo font-bold text-xl tracking-tight text-amigo-text group-hover:text-amigo-primary transition-colors">
              Amigo
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-amigo-text-muted">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-amigo-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-amigo-text-muted hover:text-amigo-text border-amigo-border/50">
              <HomeIcon className="w-4 h-4 mr-1" />
              <span className="text-[10px] uppercase tracking-wider font-semibold">Home</span>
            </Button>
            <Button variant="play" size="lg" onClick={() => router.push("/checkout?plan=lifetime")}>
              Get Amigo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-10 items-center py-14"
        >
          {/* Text side */}
          <div className="flex-1 lg:flex-1">
            <h1 className="font-amigo font-bold text-5xl md:text-7xl leading-tight tracking-tight mb-6 text-amigo-text">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-amigo-primary via-amigo-secondary to-amigo-accent">Amigo.</span>
            </h1>
            <p className="text-lg md:text-xl text-amigo-text-muted mb-6 max-w-md leading-relaxed font-body">
              Your pet companion
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="play" size="lg" onClick={() => router.push("/checkout?plan=lifetime")}>
                Get Amigo <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </div>

            {/* Metrics */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 items-start">
              {metrics.map((m) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col"
                >
                  <span className="font-amigo font-bold text-2xl text-amigo-text">{m.value}</span>
                  <span className="text-sm text-amigo-text-muted">{m.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

        {/* Mascot side */}
        <div className="flex-1 lg:flex-1 flex justify-center relative">
          <div className="relative w-full max-w-xs lg:max-w-sm">
            <AmigoSVG size="lg" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 flex items-center gap-2 bg-white border border-teal-200 rounded-full px-4 py-2 shadow-amigo-glow animate-pulse"
            >
              <PawPrint className="w-4 h-4 text-teal-400 fill-teal-400" />
              <span className="text-xs font-bold text-amigo-text">Adopt me</span>
            </motion.div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
