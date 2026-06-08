import { NextResponse } from "next/server";
import {connectDB} from "@/lib/db";
import User from "@/models/user";
import jwt from "jsonwebtoken";

// ✅ CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function GET(request) {
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json({ message: "No token" }, {
        status: 401,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    await connectDB();

    const user = await User.findById(decoded.id).select("-password");

    return NextResponse.json(
      { user },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

  } catch (error) {
    return NextResponse.json({ message: "Invalid token" }, {
      status: 401,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }
}