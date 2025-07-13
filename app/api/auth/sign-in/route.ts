import { NextResponse } from "next/server";
import { signIn } from "@/lib/actions/auth.action";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, idToken } = body;

  const result = await signIn({ email, idToken });

  return NextResponse.json(result);
}