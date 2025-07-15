import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const user = { name: "Krishi", email: email };

    console.log("Login request:", email, password);

    return NextResponse.json({
      success: true,
      message: "Login successful",
      name: user.name,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Login error" },
      { status: 500 }
    );
  }
}
