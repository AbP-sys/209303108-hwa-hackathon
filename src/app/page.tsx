"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Heart,
  PawPrint,
  Zap,
  Clock,
  Target,
  Trophy,
  Smile,
  LayoutGrid,
  Smartphone,
} from "lucide-react";
import { AmigoSVG } from "@/components/AmigoSVG";
import { SyntraHero } from "@/components/SyntraHero";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

const featureList = [
  {
    icon: Clock,
    title: "Chase and explore",
    desc: "Amigo moves around your home, inviting your dog to follow, explore and interact with it.",
  },
  {
    icon: Target,
    title: "Treat Treasure Hunt",
    desc: "Discover hidden rewards through timed treat dispensing and simple food-search challenges.",
  },
  {
    icon: Trophy,
    title: "Interactive play",
    desc: "Gentle movements and playful sounds encourage your dog to engage in short play sessions.",
  },
  {
    icon: Smile,
    title: "Sniff and discover",
    desc: "Amigo offers scent-based discovery activities that encourage natural sniffing and problem-solving.",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-amigo-bg text-amigo-text selection:bg-amigo-primary/30">
      <SyntraHero />

      <main className="flex-1 relative pb-20">
        {/* Features */}
        <motion.section
          id="features"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 py-16 max-w-7xl mx-auto relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ ...itemVariants.visible }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <h2 className="font-amigo font-bold text-3xl md:text-5xl mb-2 text-amigo-text">Built for connection</h2>
            <p className="text-amigo-text-muted max-w-2xl mx-auto text-lg">Keeps your pet bustling and joyful throughout the day.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureList.map((f) => (
              <motion.div
                key={f.title}
                variants={itemVariants}
                whileInView={{ ...itemVariants.visible }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={[
                  "group relative p-5 rounded-3xl border border-white/30 bg-amigo-surface/60 backdrop-blur-md shadow-sm",
                  "hover:border-amigo-primary/60 hover:bg-amigo-surface/80 transition-all duration-300",
                ].join(" ")}
              >
                <div className="w-10 h-10 rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-amigo-primary group-hover:text-white transition-colors duration-300">
                  <f.icon className="w-5 h-5 text-amigo-primary group-hover:text-white" />
                </div>
                <h3 className="font-amigo font-bold text-lg mb-2 text-amigo-text">{f.title}</h3>
                <p className="text-sm text-amigo-text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Magic moments / how it works */}
        <motion.section
          id="how-it-works"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 max-w-7xl mx-auto py-16 bg-amigo-surface rounded-[3rem] my-12 border border-amigo-border overflow-hidden relative"
        >
          <div className="grid lg:grid-cols-2 gap-6 items-center p-4">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <h2 className="font-amigo font-bold text-3xl md:text-4xl mb-3 text-amigo-text">Moments that wag 🐕</h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                <p className="text-amigo-text-muted mb-4 text-sm leading-relaxed">
                  From the first unboxing to every playful nudge, Amigo responds with movement, light,
                  and a personality that grows on you.
                </p>
              </motion.div>
              <div className="space-y-2">
                {[
                  {
                    icon: LayoutGrid,
                    color: "text-amigo-secondary",
                    title: "Smart navigation",
                    desc: "Lidar-powered mapping helps Amigo find its way around your home.",
                  },
                  {
                    icon: Zap,
                    color: "text-amigo-accent",
                    title: "Two way audio",
                    desc: "Talk to your pet and hear them back, wherever you are.",
                  },
                  {
                    icon: Smartphone,
                    color: "text-amigo-primary",
                    title: "Activity insights app",
                    desc: "Track play, rest, and treat activity in the Amigo app.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col gap-1 rounded-2xl bg-white/40 p-5 transition-colors border border-white/30"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={["w-6 h-6", item.color].join(" ")} />
                      <span className="font-amigo font-bold text-amigo-text">{item.title}</span>
                    </div>
                    <p className="text-sm text-amigo-text-muted leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center z-10">
              <div className="relative w-full max-w-xs lg:max-w-sm">
                <motion.div
                  animate={{
                    x: [0, 25, 0, -25, 0],
                    y: [0, -18, 0, 18, 0],
                    rotate: [0, 3, 0, -3, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-20"
                >
                  <AmigoSVG size="sm" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Plans */}
        <motion.section
          id="plans"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 max-w-7xl mx-auto py-24 relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-amigo font-bold text-3xl md:text-5xl mb-2 text-amigo-text">Bring Amigo home</h2>
            <p className="text-amigo-text-muted max-w-2xl mx-auto text-lg">Pick the plan that fits you and your pet.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Monthly subscription",
                price: "$20",
                unit: "/month",
                popular: false,
                features: ["Amigo companion", "Monthly treat drops", "App access", "Community events"],
              },
              {
                name: "Lifetime access",
                price: "$500",
                unit: "",
                popular: true,
                features: ["Amigo companion", "All accessories", "Lifetime app access", "Priority support"],
              },
            ].map((plan) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                whileInView={{ ...itemVariants.visible }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className={[
                  "group relative rounded-[3rem] p-8 border shadow-amigo-glow transition-all duration-300 flex flex-col",
                  "border-amigo-primary text-amigo-text bg-amigo-surface",
                  plan.popular
                    ? "border-amigo-primary shadow-[0_0_60px_rgba(34,211,238,0.7)] ring-2 ring-amigo-primary/60"
                    : "border-amigo-primary shadow-amigo-glow ring-2 ring-amigo-primary/30",
                ].join(" ")}
                onClick={() => router.push(`/checkout?plan=${plan.name === "Lifetime access" ? "lifetime" : "monthly"}`)}
                style={{ cursor: "pointer" }}
              >
                <CardHeader className="pt-16 flex-1">
                  {plan.popular && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-amigo-surface text-amigo-primary px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-amigo-primary/40">
                      <span className="w-2 h-2 bg-amigo-primary rounded-full animate-pulse" />
                      Best value
                    </div>
                  )}
                  <CardTitle className="mb-1">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6 text-5xl font-amigo font-bold">{plan.price}<span className="text-2xl">{plan.unit}</span></div>
                  <ul className="space-y-3 text-sm flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <PawPrint className="w-4 h-4 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="border-y border-amigo-border bg-amigo-surface py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-amigo font-bold text-xl text-amigo-text">
            <Heart className="w-5 h-5 text-amigo-primary" />
            <span>Amigo</span>
          </div>
          <p className="text-xs text-amigo-text-muted">Your pet companion. Designed with ♡.</p>
        </div>
      </footer>
    </div>
  );
}
