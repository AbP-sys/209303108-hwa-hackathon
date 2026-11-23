import { NextResponse } from "next/server";

const PLANS: Record<string, { name: string; price: number }> = {
  monthly: { name: "Monthly subscription", price: 2000 },
  lifetime: { name: "Lifetime access", price: 50000 },
};

export async function POST(req: Request) {
  try {
    const { plan } = await req.json();
    const planData = PLANS[plan];

    if (!planData) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      // Demo mode: return a mock session id for hackathon testing
      return NextResponse.json({
        sessionId: `demo_session_${plan}_${Date.now()}`,
        demo: true,
      });
    }

    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(secretKey);

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: planData.name,
              description: "Amigo — Your Pet Companion",
            },
            unit_amount: planData.price,
            ...(plan === "lifetime"
              ? {}
              : { recurring: { interval: "month" } }),
          },
          quantity: 1,
        },
      ],
      mode: plan === "lifetime" ? "payment" : "subscription",
      success_url: `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/checkout?success=true`,
      cancel_url: `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/checkout?canceled=true`,
      metadata: { plan },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
