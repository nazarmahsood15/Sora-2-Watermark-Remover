// app/api/remove-watermark/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { videoUrl } = body;

  if (!videoUrl) return NextResponse.json({ error: "videoUrl is required" }, { status: 400 });

  try {
    const response = await fetch("https://api.kie.ai/api/v1/jobs/createTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 18f0ad30240e8aa55505bae6215646d5",
      },
      body: JSON.stringify({
        model: "sora-watermark-remover",
        input: { video_url: videoUrl },
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.msg || "Failed to create task");

    return NextResponse.json({ taskId: data.data.taskId });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const taskId = req.nextUrl.searchParams.get("taskId");
  if (!taskId) return NextResponse.json({ error: "taskId is required" }, { status: 400 });

  try {
    const response = await fetch(`https://api.kie.ai/api/v1/jobs/recordInfo?taskId=${taskId}`, {
      headers: {
        Authorization: "Bearer 18f0ad30240e8aa55505bae6215646d5",
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
