import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    console.log("Received:", name, email, password);

    return NextResponse.json(
      { success: true, message: "Signup successful!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Error!" },
      { status: 500 }
    );
  }
}
