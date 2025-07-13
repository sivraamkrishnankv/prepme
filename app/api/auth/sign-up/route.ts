import { NextResponse } from "next/server";
import { signUp } from "@/lib/actions/auth.action";

export async function POST(request: Request) {
  const body = await request.json();
  const { uid, name, email, password } = body;

  const result = await signUp({ uid, name, email, password });

  return NextResponse.json(result);
}