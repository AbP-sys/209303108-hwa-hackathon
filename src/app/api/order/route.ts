import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Minimal validation
    if (!body.name || !body.petName || !body.email) {
      return NextResponse.json(
        { error: "name, petName and email are required" },
        { status: 400 },
      );
    }

    // In a real integration this would persist to a DB / notify the team.
    // For the hackathon, we acknowledge the order and return a confirmation.
    const order = {
      id: `amigo-${Date.now()}`,
      name: body.name,
      petName: body.petName,
      plan: body.plan || "buddy",
      email: body.email,
      createdAt: new Date().toISOString(),
      status: "confirmed",
    };

    return NextResponse.json({ ok: true, order }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
