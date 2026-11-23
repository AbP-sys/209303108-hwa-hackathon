"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
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
          className="px-6 max-w-7xl mx-auto relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ ...itemVariants.visible }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <h2 className="font-amigo font-bold text-3xl md:text-5xl mb-2 text-amigo-text">Built for connection</h2>
            <p className="text-amigo-text-muted max-w-2xl mx-auto text-lg">Every detail is designed to help you and your pet feel at home.</p>
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
                <h2 className="font-amigo font-bold text-3xl md:text-4xl mb-3 text-amigo-text">Moments that wag</h2>
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
            <h2 className="font-amigo font-bold text-3xl md:text-5xl mb-4 text-amigo-text">Bring Amigo home</h2>
            <p className="text-amigo-text-muted max-w-2xl mx-auto text-lg">Pick the plan that fits you and your pet.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Amigo Monthly",
                price: "$20",
                unit: "/month",
                desc: "A playful subscription that keeps the fun going every month.",
                popular: false,
                features: ["Amigo companion", "Monthly treat drops", "App access", "Community events"],
              },
              {
                name: "Amigo Forever",
                price: "$500",
                unit: "",
                desc: "One-time purchase. Amigo is yours for life — no recurring fees.",
                popular: true,
                features: ["Amigo companion", "All accessories", "Lifetime app access", "Priority support"],
              },
            ].map((plan) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                whileInView={{ ...itemVariants.visible }}
                viewport={{ once: true }}
                className={[
                  "flex flex-col group relative rounded-3xl bg-amigo-surface border border-amigo-border shadow-sm hover:border-amigo-primary/50 hover:shadow-amigo-glow transition-all duration-300",
                  plan.popular ? "border-amigo-primary shadow-amigo-glow" : "",
                ].join(" ")}
              >
                <CardHeader className="pt-8">
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-amigo-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-amigo-secondary-glow">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      Best value
                    </div>
                  )}
                  <CardTitle className="mb-1">{plan.name}</CardTitle>
                  <CardDescription>{plan.desc}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6 text-4xl font-amigo font-bold text-amigo-text">{plan.price}<span className="text-lg text-amigo-text-muted">{plan.unit}</span></div>
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
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Order section */}
      <motion.section
        id="order"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 max-w-7xl mx-auto py-20"
      >
        <div className={[
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
        </div>
      </motion.section>

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
