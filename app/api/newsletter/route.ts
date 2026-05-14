import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({ email: z.string().email() });

export async function POST(request: Request) {
  const formData = await request.formData();
  const parsed = schema.safeParse({ email: formData.get("email") });
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Valid email required" }, { status: 400 });
  }
  return NextResponse.json({ ok: true, message: "Subscribed", email: parsed.data.email });
}
