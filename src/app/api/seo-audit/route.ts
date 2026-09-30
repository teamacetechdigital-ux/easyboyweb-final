import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      website?: string;
    };

    const name = body.name?.trim();
    const email = body.email?.trim();
    const website = body.website?.trim();

    if (!name || !email || !website) {
      return NextResponse.json(
        { error: "Name, email, and website are required." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We will contact you soon.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "SEO audit endpoint is available.",
  });
}
