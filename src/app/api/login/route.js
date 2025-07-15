import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    console.log("Login request:", email, password);

  
   const hardcodedUser = { email: "krishi@gmail.com", password: "krishi123", name: "Krishi" };
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
      return NextResponse.json({
        success: true,
        message: "Login successful",
        name: hardcodedUser.name,
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Login error" },
      { status: 500 }
    );
  }
}
