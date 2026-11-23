"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, PawPrint, ShieldCheck, Sparkles, Zap, Home as HomeIcon, Gift, ArrowRight } from "lucide-react";
import Link from "next/link";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

const featureList = [
  {
    icon: Sparkles,
    title: "Instant connection",
    desc: "Amigo lights up the moment your pet arrives home — warm, expressive, and always happy to see you.",
  },
  {
    icon: PawPrint,
    title: "Playful by design",
    desc: "Every interaction is rounded, bouncy, and joyful — built to spark a smile at first tap.",
  },
  {
    icon: ShieldCheck,
    title: "Premium quality",
    desc: "Soft-touch materials, rounded shapes, and a finish that feels as good as it looks.",
  },
  {
    icon: Zap,
    title: "Smooth transitions",
    desc: "Micro-interactions and fluid animations make every tap feel alive.",
  },
];

const plans = [
  {
    name: "Amigo Starter",
    price: "$49",
    desc: "Perfect first companion for a new pet.",
    features: ["Playful mascot", "Warm onboarding", "Soft-touch finish"],
    popular: false,
  },
  {
    name: "Amigo Buddy",
    price: "$79",
    desc: "The full companion experience.",
    features: ["Everything in Starter", "Animated expressions", "Premium gift box"],
    popular: true,
  },
  {
    name: "Amigo Pal",
    price: "$119",
    desc: "For devoted pet families.",
    features: ["Everything in Buddy", "Extra accessories", "Priority support"],
    popular: false,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-amigo-bg text-amigo-text selection:bg-amigo-primary/30">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-3 border-b border-amigo-border bg-amigo-surface/95 backdrop-blur-md shadow-sm">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="max-w-7xl mx-auto flex items-center justify-between"
        >
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-amigo-primary rounded-2xl shadow-amigo-glow flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className={[
              "font-amigo font-bold text-xl tracking-tight text-amigo-text",
              "group-hover:text-amigo-primary transition-colors",
            ].join(" ")}>Amigo</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-amigo-text-muted hover:text-amigo-primary transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-sm font-medium text-amigo-text-muted hover:text-amigo-primary transition-colors">How it works</Link>
            <Link href="#plans" className="text-sm font-medium text-amigo-text-muted hover:text-amigo-primary transition-colors">Plans</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-amigo-text-muted hover:text-amigo-text border-amigo-border/50">
              <HomeIcon className="w-4 h-4 mr-1" />
              <span className="text-[10px] uppercase tracking-wider font-semibold">Home</span>
            </Button>
            <Button variant="play" size="lg" onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}>
              Get Amigo
            </Button>
          </div>
        </motion.div>
      </nav>

      <main className="flex-1 relative pt-24 pb-20">
        {/* Hero */}
        <section className="relative px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="flex flex-col justify-center lg:pl-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amigo-primary/10 border border-amigo-border text-amigo-primary text-xs font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amigo-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amigo-primary"></span>
                </span>
                New: Premium soft-touch edition
              </div>
              <h1 className="font-amigo font-bold text-5xl md:text-7xl leading-tight tracking-tight mb-6 text-amigo-text">
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-amigo-primary via-amigo-secondary to-amigo-accent">Amigo.</span>
              </h1>
              <p className="text-lg md:text-xl text-amigo-text-muted mb-10 max-w-md leading-relaxed font-body">
                Your pet’s new best friend. A warm, playful companion built with rounded shapes, smooth
                transitions, and instant charm — for an instant connection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="play" size="lg" onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}>
                  Get Amigo <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
                <Button variant="outline" size="lg" className="border-amigo-border text-amigo-text hover:bg-amigo-bg hover:text-amigo-primary">
                  See how it works
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-xs lg:max-w-sm">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" role="img" aria-labelledby="title desc" className="w-full max-w-[320px] h-auto drop-shadow-[0_0_24px_rgba(34,211,238,0.25)]">
                    <title id="title">Amigo — Your Pet Companion</title>
                    <desc id="desc">A friendly white and mint robotic pet with glowing blue eyes, rosy cheeks, an antenna, and little wheels.</desc>
                    <defs>
                      <linearGradient id="shell" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#fff"/>
                        <stop offset=".58" stopColor="#f4f7f6"/>
                        <stop offset="1" stopColor="#dce6e4"/>
                      </linearGradient>
                      <linearGradient id="mint" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#d8f5f0"/>
                        <stop offset="1" stopColor="#8fcac5"/>
                      </linearGradient>
                      <linearGradient id="wheel" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#c7d0d2"/>
                        <stop offset=".55" stopColor="#879499"/>
                        <stop offset="1" stopColor="#59676d"/>
                      </linearGradient>
                      <linearGradient id="screen" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#202630"/>
                        <stop offset="1" stopColor="#080d16"/>
                      </linearGradient>
                      <linearGradient id="blue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#b8f4ff"/>
                        <stop offset="1" stopColor="#4b9eff"/>
                      </linearGradient>
                      <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation={8} result="blur"/>
                        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                      </filter>
                      <filter id="shadow" x="-30%" y="-30%" width="160%" height="180%">
                        <feGaussianBlur stdDeviation={13}/>
                      </filter>
                    </defs>
                    <style>{`
                      .amigo { transform-box: fill-box; transform-origin: 50% 90%; animation: amigo-float 3.8s ease-in-out infinite; }
                      .antenna-tip { transform-box: fill-box; transform-origin: 50% 50%; animation: tip-glow 2.2s ease-in-out infinite; }
                      .eye { transform-box: fill-box; transform-origin: center; animation: blink 5.2s infinite; }
                      .eye.right { animation-delay: .08s; }
                      .cheek { animation: blush 2.8s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
                      .chest-light { animation: chest-pulse 1.8s ease-in-out infinite; }
                      .ear-ring { animation: ring-pulse 2.6s ease-in-out infinite; }
                      @keyframes amigo-float { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-9px) rotate(-.5deg); } }
                      @keyframes blink { 0%, 42%, 46%, 100% { transform: scaleY(1); } 44% { transform: scaleY(.08); } }
                      @keyframes tip-glow { 0%,100% { opacity: .75; filter: none; } 50% { opacity: 1; filter: drop-shadow(0 0 12px #8deaff); } }
                      @keyframes blush { 0%,100% { opacity: .65; } 50% { opacity: 1; } }
                      @keyframes chest-pulse { 0%,100% { opacity: .65; } 50% { opacity: 1; } }
                      @keyframes ring-pulse { 0%,100% { opacity: .7; } 50% { opacity: 1; } }
                      @media (prefers-reduced-motion: reduce) {
                        .amigo,.antenna-tip,.eye,.cheek,.chest-light,.ear-ring { animation: none !important; }
                      }
                    `}</style>
                    <ellipse cx="405" cy="704" rx="260" ry="35" fill="#50646a" opacity={0.16} filter="url(#shadow)"/>
                    <g className="amigo">
                      <path d="M535 202 L579 86" fill="none" stroke="#85bdb9" strokeWidth={19} strokeLinecap="round"/>
                      <path d="M540 196 L581 91" fill="none" stroke="#d5f1ec" strokeWidth={6} strokeLinecap="round" opacity={0.75}/>
                      <circle className="antenna-tip" cx="588" cy="72" r="28" fill="url(#blue)" filter="url(#softGlow)"/>
                      <circle cx="578" cy="62" r="8" fill="#fff" opacity={0.45}/>
                      <path d="M195 421 Q143 461 160 542 Q171 590 211 603 L244 555 L236 448Z" fill="url(#mint)" stroke="#b9d8d5" strokeWidth={5}/>
                      <path d="M646 423 Q706 456 691 531 Q682 575 646 595 L617 552 L621 452Z" fill="url(#mint)" stroke="#b9d8d5" strokeWidth={5}/>
                      <ellipse cx="220" cy="624" rx={69} ry={116} transform="rotate(10 220 624)" fill="url(#wheel)" stroke="#e8eeee" strokeWidth={8}/>
                      <ellipse cx="225" cy="625" rx={39} ry={83} transform="rotate(10 225 625)" fill="#b9d0ce"/>
                      <ellipse cx="610" cy="625" rx={69} ry={116} transform="rotate(-10 610 625)" fill="url(#wheel)" stroke="#e8eeee" strokeWidth={8}/>
                      <ellipse cx="605" cy="625" rx={39} ry={83} transform="rotate(-10 605 625)" fill="#b9d0ce"/>
                      <path d="M255 411 Q262 376 310 370 L514 370 Q565 379 583 421 L640 608 Q654 657 608 675 Q429 724 232 675 Q190 661 205 610Z" fill="url(#shell)" stroke="#d7e0df" strokeWidth={7}/>
                      <path d="M270 443 Q291 409 324 410 L505 410 Q544 412 559 449 L585 585 Q589 619 557 635 Q402 676 257 633 Q225 622 233 585Z" fill="#f9fbfa" opacity={0.65}/>
                      <path d="M276 655 Q406 686 548 653" fill="none" stroke="#b5d5d1" strokeWidth={12} strokeLinecap="round" opacity={0.7}/>
                      <path d="M220 465 Q235 428 269 432 L293 455 L274 615 Q249 640 222 616 Q197 592 205 535Z" fill="url(#mint)" stroke="#d4e2e0" strokeWidth={6}/>
                      <path d="M565 455 Q587 426 619 441 Q654 461 654 527 L638 605 Q620 638 591 615 L566 470Z" fill="url(#mint)" stroke="#d4e2e0" strokeWidth={6}/>
                      <path d="M250 390 Q400 431 551 390 L565 423 Q403 478 237 422Z" fill="#dce5e3" stroke="#c4d1cf" strokeWidth={5}/>
                      <path d="M205 216 Q219 132 315 119 Q410 91 548 128 Q642 154 654 246 L667 365 Q670 420 618 443 Q405 499 189 438 Q142 421 151 359Z" fill="url(#shell)" stroke="#d9e2e0" strokeWidth={8}/>
                      <path d="M220 213 Q247 148 326 140 Q430 111 542 148" fill="none" stroke="#fff" strokeWidth={10} strokeLinecap="round" opacity={0.9}/>
                      <ellipse cx="190" cy="339" rx={42} ry={70} fill="url(#mint)" stroke="#d7e5e2" strokeWidth={7}/>
                      <ellipse cx="190" cy="339" rx={23} ry={47} fill="#b5dcd7" opacity={0.8}/>
                      <ellipse cx="634" cy="339" rx={49} ry={72} fill="url(#mint)" stroke="#d7e5e2" strokeWidth={7}/>
                      <ellipse cx="640" cy="339" rx={31} ry={51} fill="none" stroke="#e7ffff" strokeWidth={7} className="ear-ring" filter="url(#softGlow)"/>
                      <ellipse cx="640" cy="339" rx={19} ry={36} fill="#a7d6d2" opacity={0.6}/>
                      <path d="M237 216 Q251 171 311 166 Q415 143 529 168 Q603 185 614 244 L627 350 Q631 397 587 411 Q404 454 221 410 Q180 398 187 350Z" fill="url(#screen)" stroke="#aeb9bb" strokeWidth={9}/>
                      <path d="M224 220 Q247 184 296 179" fill="none" stroke="#fff" strokeWidth={5} opacity={0.22} strokeLinecap="round"/>
                      <path d="M588 211 Q613 239 613 282" fill="none" stroke="#fff" strokeWidth={8} opacity={0.16} strokeLinecap="round"/>
                      <g filter="url(#softGlow)">
                        <path className="eye" d="M245 317 Q258 260 302 260 Q348 260 359 317" fill="none" stroke="url(#blue)" strokeWidth={23} strokeLinecap="round"/>
                        <path className="eye right" d="M445 317 Q458 263 504 263 Q550 263 563 317" fill="none" stroke="url(#blue)" strokeWidth={23} strokeLinecap="round"/>
                      </g>
                      <path d="M367 344 Q400 337 434 345 Q433 375 401 383 Q370 376 367 344Z" fill="url(#blue)" filter="url(#softGlow)"/>
                      <path d="M378 349 Q401 354 424 349" fill="none" stroke="#e8fbff" strokeWidth={4} opacity={0.7}/>
                      <g className="cheek" fill="#f6a9d2" opacity={0.9}>
                        <path d="M237 340 l-8 14 M256 343 l-8 15 M275 345 l-8 15" stroke="#f6a9d2" strokeWidth={9} strokeLinecap="round"/>
                        <path d="M536 345 l-8 15 M555 343 l-8 15 M574 340 l-8 14" stroke="#f6a9d2" strokeWidth={9} strokeLinecap="round"/>
                      </g>
                      <g fill="#83bcb9" transform="translate(400 541)">
                        <ellipse cx="0" cy="14" rx={23} ry={19}/>
                        <ellipse cx="-24" cy="-12" rx={9} ry={13} transform="rotate(-25 -24 -12)"/>
                        <ellipse cx="-8" cy="-27" rx={9} ry={13} transform="rotate(-8 -8 -27)"/>
                        <ellipse cx="11" cy="-27" rx={9} ry={13} transform="rotate(8 11 -27)"/>
                        <ellipse cx="27" cy="-11" rx={9} ry={13} transform="rotate(25 27 -11)"/>
                      </g>
                      <rect x="347" y="598" width={106} height={17} rx={8.5} fill="#b5e9ff" opacity={0.45} filter="url(#softGlow)"/>
                      <rect className="chest-light" x="350" y="600" width={100} height={12} rx={6} fill="url(#blue)" stroke="#c9f4ff" strokeWidth={2}/>
                      <path d="M364 603 H432" stroke="#fff" strokeWidth={2} strokeLinecap="round" opacity={0.8}/>
                    </g>
                  </svg>
                </motion.div>
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
        </section>

        {/* Features */}
        <section id="features" className="px-6 max-w-7xl mx-auto py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-amigo font-bold text-3xl md:text-5xl mb-4 text-amigo-text">Built for connection</h2>
            <p className="text-amigo-text-muted max-w-2xl mx-auto text-lg">Every detail is rounded, warm, and expressive — designed to make you and your pet feel at home.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureList.map((f) => (
              <motion.div
                key={f.title}
                variants={itemVariants}
                whileInView={{ ...itemVariants.visible }}
                viewport={{ once: true }}
                className={[
                  "group relative p-6 rounded-3xl bg-amigo-surface border border-amigo-border shadow-sm",
                  "hover:border-amigo-primary/50 hover:shadow-amigo-glow transition-all duration-300",
                ].join(" ")}
              >
                <div className="w-12 h-12 rounded-2xl bg-amigo-primary/10 border border-amigo-border flex items-center justify-center mb-4 group-hover:bg-amigo-primary group-hover:text-white transition-colors duration-300">
                  <f.icon className="w-6 h-6 text-amigo-primary group-hover:text-white" />
                </div>
                <h3 className="font-amigo font-bold text-lg mb-2 text-amigo-text">{f.title}</h3>
                <p className="text-sm text-amigo-text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Magic moments / how it works */}
        <section id="how-it-works" className="px-6 max-w-7xl mx-auto py-24 bg-amigo-surface rounded-[3rem] my-16 border border-amigo-border overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center p-8">
            <div>
              <h2 className="font-amigo font-bold text-3xl md:text-4xl mb-6 text-amigo-text">Moments that wag</h2>
              <p className="text-amigo-text-muted mb-8 text-lg leading-relaxed">
                From the first unboxing to every playful nudge, Amigo responds with smooth motion, warm light,
                and a personality that grows on you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-amigo-secondary" />
                  <span className="font-medium text-amigo-text">Bouncy, expressive animations</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-amigo-accent" />
                  <span className="font-medium text-amigo-text">Premium soft-touch materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gift className="w-5 h-5 text-amigo-primary" />
                  <span className="font-medium text-amigo-text">Arrives in a playful gift box</span>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="w-64 h-64 bg-teal-100 rounded-full shadow-amigo-glow border-4 border-teal-200 relative flex items-center justify-center overflow-hidden"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" role="img" aria-labelledby="title desc" className="w-full h-full drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                  <title id="title">Amigo — Your Pet Companion</title>
                  <desc id="desc">A friendly white and mint robotic pet with glowing blue eyes, rosy cheeks, an antenna, and little wheels.</desc>
                  <defs>
                    <linearGradient id="shell" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#fff"/>
                      <stop offset=".58" stopColor="#f4f7f6"/>
                      <stop offset="1" stopColor="#dce6e4"/>
                    </linearGradient>
                    <linearGradient id="mint" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#d8f5f0"/>
                      <stop offset="1" stopColor="#8fcac5"/>
                    </linearGradient>
                    <linearGradient id="wheel" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#c7d0d2"/>
                      <stop offset=".55" stopColor="#879499"/>
                      <stop offset="1" stopColor="#59676d"/>
                    </linearGradient>
                    <linearGradient id="screen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#202630"/>
                      <stop offset="1" stopColor="#080d16"/>
                    </linearGradient>
                    <linearGradient id="blue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#b8f4ff"/>
                      <stop offset="1" stopColor="#4b9eff"/>
                    </linearGradient>
                    <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation={8} result="blur"/>
                      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                    <filter id="shadow" x="-30%" y="-30%" width="160%" height="180%">
                      <feGaussianBlur stdDeviation={13}/>
                    </filter>
                  </defs>
                  <style>{`
                    .amigo { transform-box: fill-box; transform-origin: 50% 90%; animation: amigo-float 3.8s ease-in-out infinite; }
                    .antenna-tip { transform-box: fill-box; transform-origin: 50% 50%; animation: tip-glow 2.2s ease-in-out infinite; }
                    .eye { transform-box: fill-box; transform-origin: center; animation: blink 5.2s infinite; }
                    .eye.right { animation-delay: .08s; }
                    .cheek { animation: blush 2.8s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
                    .chest-light { animation: chest-pulse 1.8s ease-in-out infinite; }
                    .ear-ring { animation: ring-pulse 2.6s ease-in-out infinite; }
                    @keyframes amigo-float { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-9px) rotate(-.5deg); } }
                    @keyframes blink { 0%, 42%, 46%, 100% { transform: scaleY(1); } 44% { transform: scaleY(.08); } }
                    @keyframes tip-glow { 0%,100% { opacity: .75; filter: none; } 50% { opacity: 1; filter: drop-shadow(0 0 12px #8deaff); } }
                    @keyframes blush { 0%,100% { opacity: .65; } 50% { opacity: 1; } }
                    @keyframes chest-pulse { 0%,100% { opacity: .65; } 50% { opacity: 1; } }
                    @keyframes ring-pulse { 0%,100% { opacity: .7; } 50% { opacity: 1; } }
                    @media (prefers-reduced-motion: reduce) {
                      .amigo,.antenna-tip,.eye,.cheek,.chest-light,.ear-ring { animation: none !important; }
                    }
                  `}</style>
                  <ellipse cx="405" cy="704" rx="260" ry="35" fill="#50646a" opacity={0.16} filter="url(#shadow)"/>
                  <g className="amigo">
                    <path d="M535 202 L579 86" fill="none" stroke="#85bdb9" strokeWidth={19} strokeLinecap="round"/>
                    <path d="M540 196 L581 91" fill="none" stroke="#d5f1ec" strokeWidth={6} strokeLinecap="round" opacity={0.75}/>
                    <circle className="antenna-tip" cx="588" cy="72" r="28" fill="url(#blue)" filter="url(#softGlow)"/>
                    <circle cx="578" cy="62" r="8" fill="#fff" opacity={0.45}/>
                    <path d="M195 421 Q143 461 160 542 Q171 590 211 603 L244 555 L236 448Z" fill="url(#mint)" stroke="#b9d8d5" strokeWidth={5}/>
                    <path d="M646 423 Q706 456 691 531 Q682 575 646 595 L617 552 L621 452Z" fill="url(#mint)" stroke="#b9d8d5" strokeWidth={5}/>
                    <ellipse cx="220" cy="624" rx={69} ry={116} transform="rotate(10 220 624)" fill="url(#wheel)" stroke="#e8eeee" strokeWidth={8}/>
                    <ellipse cx="225" cy="625" rx={39} ry={83} transform="rotate(10 225 625)" fill="#b9d0ce"/>
                    <ellipse cx="610" cy="625" rx={69} ry={116} transform="rotate(-10 610 625)" fill="url(#wheel)" stroke="#e8eeee" strokeWidth={8}/>
                    <ellipse cx="605" cy="625" rx={39} ry={83} transform="rotate(-10 605 625)" fill="#b9d0ce"/>
                    <path d="M255 411 Q262 376 310 370 L514 370 Q565 379 583 421 L640 608 Q654 657 608 675 Q429 724 232 675 Q190 661 205 610Z" fill="url(#shell)" stroke="#d7e0df" strokeWidth={7}/>
                    <path d="M270 443 Q291 409 324 410 L505 410 Q544 412 559 449 L585 585 Q589 619 557 635 Q402 676 257 633 Q225 622 233 585Z" fill="#f9fbfa" opacity={0.65}/>
                    <path d="M276 655 Q406 686 548 653" fill="none" stroke="#b5d5d1" strokeWidth={12} strokeLinecap="round" opacity={0.7}/>
                    <path d="M220 465 Q235 428 269 432 L293 455 L274 615 Q249 640 222 616 Q197 592 205 535Z" fill="url(#mint)" stroke="#d4e2e0" strokeWidth={6}/>
                    <path d="M565 455 Q587 426 619 441 Q654 461 654 527 L638 605 Q620 638 591 615 L566 470Z" fill="url(#mint)" stroke="#d4e2e0" strokeWidth={6}/>
                    <path d="M250 390 Q400 431 551 390 L565 423 Q403 478 237 422Z" fill="#dce5e3" stroke="#c4d1cf" strokeWidth={5}/>
                    <path d="M205 216 Q219 132 315 119 Q410 91 548 128 Q642 154 654 246 L667 365 Q670 420 618 443 Q405 499 189 438 Q142 421 151 359Z" fill="url(#shell)" stroke="#d9e2e0" strokeWidth={8}/>
                    <path d="M220 213 Q247 148 326 140 Q430 111 542 148" fill="none" stroke="#fff" strokeWidth={10} strokeLinecap="round" opacity={0.9}/>
                    <ellipse cx="190" cy="339" rx={42} ry={70} fill="url(#mint)" stroke="#d7e5e2" strokeWidth={7}/>
                    <ellipse cx="190" cy="339" rx={23} ry={47} fill="#b5dcd7" opacity={0.8}/>
                    <ellipse cx="634" cy="339" rx={49} ry={72} fill="url(#mint)" stroke="#d7e5e2" strokeWidth={7}/>
                    <ellipse cx="640" cy="339" rx={31} ry={51} fill="none" stroke="#e7ffff" strokeWidth={7} className="ear-ring" filter="url(#softGlow)"/>
                    <ellipse cx="640" cy="339" rx={19} ry={36} fill="#a7d6d2" opacity={0.6}/>
                    <path d="M237 216 Q251 171 311 166 Q415 143 529 168 Q603 185 614 244 L627 350 Q631 397 587 411 Q404 454 221 410 Q180 398 187 350Z" fill="url(#screen)" stroke="#aeb9bb" strokeWidth={9}/>
                    <path d="M224 220 Q247 184 296 179" fill="none" stroke="#fff" strokeWidth={5} opacity={0.22} strokeLinecap="round"/>
                    <path d="M588 211 Q613 239 613 282" fill="none" stroke="#fff" strokeWidth={8} opacity={0.16} strokeLinecap="round"/>
                    <g filter="url(#softGlow)">
                      <path className="eye" d="M245 317 Q258 260 302 260 Q348 260 359 317" fill="none" stroke="url(#blue)" strokeWidth={23} strokeLinecap="round"/>
                      <path className="eye right" d="M445 317 Q458 263 504 263 Q550 263 563 317" fill="none" stroke="url(#blue)" strokeWidth={23} strokeLinecap="round"/>
                    </g>
                    <path d="M367 344 Q400 337 434 345 Q433 375 401 383 Q370 376 367 344Z" fill="url(#blue)" filter="url(#softGlow)"/>
                    <path d="M378 349 Q401 354 424 349" fill="none" stroke="#e8fbff" strokeWidth={4} opacity={0.7}/>
                    <g className="cheek" fill="#f6a9d2" opacity={0.9}>
                      <path d="M237 340 l-8 14 M256 343 l-8 15 M275 345 l-8 15" stroke="#f6a9d2" strokeWidth={9} strokeLinecap="round"/>
                      <path d="M536 345 l-8 15 M555 343 l-8 15 M574 340 l-8 14" stroke="#f6a9d2" strokeWidth={9} strokeLinecap="round"/>
                    </g>
                    <g fill="#83bcb9" transform="translate(400 541)">
                      <ellipse cx="0" cy="14" rx={23} ry={19}/>
                      <ellipse cx="-24" cy="-12" rx={9} ry={13} transform="rotate(-25 -24 -12)"/>
                      <ellipse cx="-8" cy="-27" rx={9} ry={13} transform="rotate(-8 -8 -27)"/>
                      <ellipse cx="11" cy="-27" rx={9} ry={13} transform="rotate(8 11 -27)"/>
                      <ellipse cx="27" cy="-11" rx={9} ry={13} transform="rotate(25 27 -11)"/>
                    </g>
                    <rect x="347" y="598" width={106} height={17} rx={8.5} fill="#b5e9ff" opacity={0.45} filter="url(#softGlow)"/>
                    <rect className="chest-light" x="350" y="600" width={100} height={12} rx={6} fill="url(#blue)" stroke="#c9f4ff" strokeWidth={2}/>
                    <path d="M364 603 H432" stroke="#fff" strokeWidth={2} strokeLinecap="round" opacity={0.8}/>
                  </g>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section id="plans" className="px-6 max-w-7xl mx-auto py-24 relative">
          <div className="text-center mb-16">
            <h2 className="font-amigo font-bold text-3xl md:text-5xl mb-4 text-amigo-text">Choose your companion</h2>
            <p className="text-amigo-text-muted max-w-2xl mx-auto text-lg">Warm, premium, and ready to ship.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card key={plan.name} className={[
                "flex flex-col group relative",
                plan.popular ? "border-amigo-primary shadow-amigo-glow" : "",
              ].join(" ")}>
                <CardHeader className="pt-8">
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-amigo-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-amigo-secondary-glow">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      Most popular
                    </div>
                  )}
                  <CardTitle className="mb-1">{plan.name}</CardTitle>
                  <CardDescription>{plan.desc}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6 text-4xl font-amigo font-bold text-amigo-text">{plan.price}</div>
                  <ul className="space-y-3 text-sm text-amigo-text-muted flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <PawPrint className="w-4 h-4 text-amigo-primary/40 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={plan.popular ? "play" : "outline"}
                    className="w-full"
                    onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Choose {plan.name}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Order section */}
      <section id="order" className="px-6 max-w-7xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={[
            "rounded-[3rem] bg-gradient-to-br from-amigo-primary via-amigo-secondary to-amigo-accent p-8 md:p-12 relative overflow-hidden text-white",
            "shadow-[0_0_40px_rgba(236,72,153,0.5)]",
          ].join(" ")}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.15] pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-[100px]" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-amigo font-bold text-3xl mb-2">Ready to meet Amigo?</h2>
                <p className="text-amigo-primary/20 text-lg">Place your order in under a minute.</p>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                <Heart className="w-4 h-4 text-amigo-primary animate-pulse" />
                <span className="text-xs font-bold tracking-wider">Free shipping</span>
              </div>
            </div>

            <OrderForm />
          </div>
        </motion.div>
      </section>

      <footer className="border-y border-amigo-border bg-amigo-surface py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-amigo font-bold text-xl text-amigo-text">
            <Heart className="w-5 h-5 text-amigo-primary" />
            <span>Amigo</span>
          </div>
          <p className="text-xs text-amigo-text-muted">Premium pet companion. Designed with {"\u2661"}.</p>
        </div>
      </footer>
    </div>
  );
}

function OrderForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          petName: formData.get("petName"),
          plan: formData.get("plan"),
          email: formData.get("email"),
        }),
      });
      if (res.ok) {
        setStatus("success");
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8 animate-bounce">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-amigo-glow">
          <PawPrint className="w-8 h-8 text-white" />
        </div>
        <h3 className="font-amigo font-bold text-xl mb-2">Woof! Order placed 🐾</h3>
        <p className="text-amigo-primary/20">Amigo is on the way to your pet.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-white/80 mb-1">Your name</label>
          <input
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-amigo-primary outline-none transition-all"
            placeholder="Alex"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-white/80 mb-1">Pet{"\u2019"}s name</label>
          <input
            name="petName"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-amigo-primary outline-none transition-all"
            placeholder="Buddy"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-white/80 mb-1">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-amigo-primary outline-none transition-all"
          placeholder="alex@example.com"
        />
      </div>
      <div>
        <label className="block text-xs font-bold text-white/80 mb-1">Choose your Amigo</label>
        <select
          name="plan"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-amigo-primary outline-none transition-all"
        >
          <option value="starter">Amigo Starter — $49</option>
          <option value="buddy">Amigo Buddy — $79</option>
          <option value="pal">Amigo Pal — $119</option>
        </select>
      </div>
      <Button type="submit" variant="play" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Placing order…" : "Get Amigo"}
      </Button>
    </form>
  );
}
