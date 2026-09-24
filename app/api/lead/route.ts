import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Email valide requis." }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY manquante dans les variables d'environnement.");
    return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
  }

  const listId = process.env.BREVO_LIST_ID ? Number(process.env.BREVO_LIST_ID) : undefined;

  const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      listIds: listId ? [listId] : undefined,
      updateEnabled: true,
    }),
  });

  if (!brevoResponse.ok) {
    const errorBody = await brevoResponse.text();
    console.error("Erreur Brevo:", brevoResponse.status, errorBody);
    return NextResponse.json(
      { error: "Impossible d'enregistrer le contact pour le moment." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
