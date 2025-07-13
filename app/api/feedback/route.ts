// filepath: d:\mock_interview_platform\app\api\feedback\route.ts
import { NextResponse } from "next/server";
import { CreateFeedback } from "@/lib/actions/general.action";

export async function POST(request: Request) {
  const body = await request.json();
  const result = await CreateFeedback(body);
  return NextResponse.json(result);
}