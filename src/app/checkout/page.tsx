"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, PawPrint } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AmigoSVG } from "@/components/AmigoSVG";

const PLANS: Record<string, { name: string; price: string; desc: string }> = {
  monthly: {
    name: "Monthly subscription",
    price: "$20",
    desc: "A playful subscription that renews every month.",
  },
  lifetime: {
    name: "Lifetime access",
    price: "$500",
    desc: "One-time purchase. Amigo is yours for life.",
  },
};

function Confetti({ visible }: { visible: boolean }) {
  useEffect(() => {
    if (!visible) return;
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.zIndex = "9999";
    canvas.style.pointerEvents = "none";

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const colors = ["#f97316", "#ec4899", "#22d3ee", "#86efac", "#fbbf24", "#a78bfa"];
    const particles: Array<{ x: number; y: number; vx: number; vy: number; color: string; size: number; angle: number }> = [];
    const particleCount = 300;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: width / 2,
        y: height / 2,
        vx: (Math.random() - 0.5) * 40,
        vy: (Math.random() - 0.5) * 40 - 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 14 + 7,
        angle: Math.random() * Math.PI * 2,
      });
    }

    let opacity = 1;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      opacity -= 0.008;
      if (opacity <= 0) {
        canvas.remove();
        return;
      }
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25;
        p.angle += 0.1;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, [visible]);

  return null;
}

export default function CheckoutPage() {
  usePathname();
  const urlPlan =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("plan")
      : null;
  const planKey = urlPlan === "lifetime" ? "lifetime" : "monthly";
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const plan = PLANS[planKey];

  const handleCheckout = async () => {
    setLoading(true);
    // Simulate a brief processing delay for a realistic feel
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("success");
    setLoading(false);
  };

  const showConfetti = status === "success";
  const bubbleText = status === "success" ? "YAYY!!" : "Adopt me";

  if (status === "success") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-amigo-bg text-amigo-text">
        <Confetti visible={showConfetti} />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-20 z-10"
        >
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.6)]">
            <PawPrint className="w-12 h-12 text-white" />
          </div>
          <h1 className="font-amigo font-bold text-4xl mb-4 text-amigo-text">
            Order placed successfully!
          </h1>
          <p className="text-lg text-amigo-text-muted mb-10">
            Thank you for bringing Amigo home to your pet.
          </p>
          <Button
            variant="play"
            size="lg"
            className="w-auto"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            OK
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-amigo-bg text-amigo-text">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-amigo-border bg-amigo-surface/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5 text-amigo-text-muted" />
            <span className="font-amigo font-bold text-lg text-amigo-text">
              Back to home
            </span>
          </Link>
          <div className="flex items-center gap-2 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm border border-amigo-border/30">
            <Heart className="w-4 h-4 text-amigo-primary" />
            <span className="text-xs font-bold text-amigo-text">
              {plan.name}
            </span>
          </div>
        </div>
      </nav>

      <main className="flex-1 relative px-6 max-w-7xl mx-auto pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-16 items-start py-12"
        >
          {/* Mascot side */}
          <div className="flex-1 lg:flex-1 flex justify-center">
            <div className="relative w-full max-w-xs lg:max-w-sm">
              <AmigoSVG size="lg" interactive />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 flex items-center gap-2 bg-white border border-teal-200 rounded-full px-4 py-2 shadow-amigo-glow animate-pulse"
              >
                <PawPrint className="w-4 h-4 text-teal-400 fill-teal-400" />
                <span className="text-xs font-bold text-amigo-text">{bubbleText}</span>
              </motion.div>
            </div>
          </div>

          {/* Checkout form side */}
          <div className="flex-1 lg:flex-1 max-w-md">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-amigo-surface border border-amigo-border rounded-[3rem] p-8 shadow-amigo-glow"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-amigo font-bold text-3xl text-amigo-text">
                  Checkout
                </h2>
                <span className="text-xs font-bold text-amigo-primary/80 uppercase tracking-wider">
                  Secure payment
                </span>
              </div>

              <div className="mb-8">
                <h3 className="font-amigo font-bold text-xl mb-2 text-amigo-text">
                  {plan.name}
                </h3>
                <p className="text-amigo-text-muted text-sm">
                  {plan.desc}
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-amigo font-bold text-4xl text-amigo-text">
                    {plan.price}
                  </span>
                  {planKey === "monthly" && (
                    <span className="text-lg text-amigo-text-muted">/month</span>
                  )}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.desc.split(". ").map((s, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-amigo-text-muted">
                    <PawPrint className="w-3 h-3 mt-1 text-amigo-primary/40 shrink-0" />
                    {s}{!s.endsWith(".") && "."}
                  </div>
                ))}
              </div>

              <Button
                variant="play"
                size="lg"
                className="w-full"
                disabled={loading}
                onClick={handleCheckout}
              >
                {loading ? "Processing payment…" : "Pay with Stripe"}
              </Button>

              <p className="mt-4 text-xs text-amigo-text-muted text-center">
                Secure payment processing
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <footer className="border-y border-amigo-border bg-amigo-surface py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-amigo font-bold text-xl text-amigo-text">
            <Heart className="w-5 h-5 text-amigo-primary" />
            <span>Amigo</span>
          </div>
          <p className="text-xs text-amigo-text-muted">
            Your pet companion. Designed with ♡.
          </p>
        </div>
      </footer>
    </div>
  );
}
