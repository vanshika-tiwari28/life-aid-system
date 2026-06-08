import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Donor from "@/models/donor";

export async function GET(req) {
  await connectDB();

  try {
    const { searchParams } = new URL(req.url);

    const bloodGroup = searchParams.get("bloodGroup");
    const city = searchParams.get("city");

    const donors = await Donor.find({
      bloodGroup: { $regex: bloodGroup, $options: "i" },
      city: { $regex: city, $options: "i" },
    });

    const res = NextResponse.json(donors);

    // ✅ CORS FIX
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return res;

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}